const path = require('path');

export const FILE_DATA_CACHE = path.join(process.cwd(), '.blog-cache.json');

export type FileMetadata = {
  slug: string;
  data: {
    title: string;
    date: string;
    published?: boolean;
    tags?: string[];
  };
  filename: string;
  path: string;
};
