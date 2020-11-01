import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-primary-700 py-3 shadow w-full">
      <div className="container mx-auto px-4">
        <div className="font-medium text-lg xs:text-2xl sm:text-3xl md:text-4xl animated text-gray-100 lg:text-right">
          <Link href="/">
            <a className="px-3 rounded border-2 border-primary-700 focus:outline-none focus-visible:shadow-outline-gray">
              Malcolm Kee
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
