const { argv } = require('yargs');
const fs = require('fs').promises;
const path = require('path');
const grayMatter = require('gray-matter');
const chokidar = require('chokidar');
const Queue = require('better-queue');

const DIRS = ['./blogs'];
const MdxPattern = /\.mdx?$/;
const cacheFile = path.join(process.cwd(), '.blog-cache.json');

async function walk(dir) {
  const result = [];

  await collectDir(dir, result);

  return result;
}

async function collectDir(dir, output) {
  const files = await fs.readdir(dir);
  const operations = files.map(async (file) => {
    const filePath = path.join(dir, file);
    const fStat = await fs.stat(filePath);

    if (fStat.isDirectory()) {
      await collectDir(filePath, output);
    } else {
      if (MdxPattern.test(file)) {
        output.push({
          filename: file,
          path: filePath,
        });
      }
    }
  });

  return Promise.all(operations);
}

function writeToCache(data) {
  return fs.writeFile(cacheFile, JSON.stringify(data, null, 2), {
    encoding: 'utf-8',
  });
}

async function setupFileCache(dirs) {
  const fileNodes = await Promise.all(dirs.map(walk));

  const files = fileNodes.flat(2);
  const result = {};

  for (const file of files) {
    const fileContent = await fs.readFile(file.path, { encoding: 'utf-8' });
    const { data } = grayMatter(fileContent);
    const slug = file.filename.replace(MdxPattern, '');
    result[slug] = {
      slug,
      data,
      ...file,
    };
  }

  await writeToCache(result);
}

function watchFile(dirs) {
  const watcher = chokidar.watch(dirs, {
    ignoreInitial: true,
  });

  const queue = new Queue(async function ({ filePath, type }, cb) {
    const { base: filename } = path.parse(filePath);
    const slug = filename.replace(MdxPattern, '');
    const currentData = JSON.parse(
      await fs.readFile(cacheFile, { encoding: 'utf-8' })
    );

    if (type === 'remove') {
      delete currentData[slug];
      await writeToCache(currentData);
    } else {
      const fileContent = await fs.readFile(filePath, { encoding: 'utf-8' });
      const { data } = grayMatter(fileContent);
      currentData[slug] = {
        slug,
        data,
        filename,
        path: filePath,
      };
      await writeToCache(currentData);
    }

    cb();
  });

  watcher
    .on('add', (filePath) => queue.push({ type: 'add', filePath }))
    .on('change', (filePath) => queue.push({ type: 'change', filePath }))
    .on('unlink', (filePath) => queue.push({ type: 'remove', filePath }));

  log('Watching file changes in', dirs);
}

const log = console.log.bind(console);

(async function run(dirs) {
  await setupFileCache(dirs);

  if (argv.watch) {
    watchFile(dirs);
  } else {
    log('done');
  }
})(DIRS);
