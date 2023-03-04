import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="shadow-lg container mx-auto px-6 py-4 rounded-lg">
        <div className="flex flex-wrap items-center justify-between">
          <div className="mb-2 sm:mb-0 w-full sm:w-auto text-center">
            <Link
              href="/"
              className="text-2xl no-underline text-gray-800 hover:text-gray-400"
            >
              KRUX
            </Link>
          </div>
          <div className="flex flex-wrap w-full sm:w-auto px-auto">
            <div className="w-full sm:w-auto text-center">
              <Link
                href="/blog"
                className="text-lg no-underline text-gray-800 hover:text-gray-400 px-2 lg:px-3"
              >
                Blog
              </Link>
              <Link
                href="/what-we-do"
                className="text-lg no-underline text-gray-800 hover:text-gray-400 px-2 lg:px-3"
              >
                What We Do
              </Link>
              <Link
                href="/courses"
                className="text-lg no-underline text-gray-800 hover:text-gray-400 px-2 lg:px-3"
              >
                Courses
              </Link>
              <Link
                href="/gallery"
                className="text-lg no-underline text-gray-800 hover:text-gray-400 px-2 lg:px-3"
              >
                Art Gallery
              </Link>
              <Link
                href="/team"
                className="text-lg no-underline text-gray-800 hover:text-gray-400 px-2 lg:px-3"
              >
                Meet the Team
              </Link>
            </div>
          </div>
          <div className="bg-khaki my-2 px-4 py-3 rounded-lg font-sans text-xs font-semibold tracking-widest w-full sm:w-auto text-center">
            <a href="https://uwm.org/projects/63685/" className="text-white">
              <span className="mx-auto">DONATE</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
