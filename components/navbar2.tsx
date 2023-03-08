import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="mb-2 sm:mb-0 w-full sm:w-auto text-center">
              <Link
                href="/"
                className="text-3xl no-underline text-gray-800 hover:text-gray-400"
              >
                KRUX
              </Link>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li>
                <Link
                  href="/blog"
                  className="text-lg no-underline text-gray-800 hover:text-gray-400 px-2 lg:px-3"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do"
                  className="text-lg no-underline text-gray-800 hover:text-gray-400 px-2 lg:px-3"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-lg no-underline text-gray-800 hover:text-gray-400 px-2 lg:px-3"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-lg no-underline text-gray-800 hover:text-gray-400 px-2 lg:px-3"
                >
                  Art Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-lg no-underline text-gray-800 hover:text-gray-400 px-2 lg:px-3"
                >
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link className="text-white" href="/get-involved">
                  <div className="bg-khaki my-2 px-4 py-3 rounded-lg font-sans text-xs font-semibold tracking-widest w-full sm:w-auto text-center">
                    <span className="mx-auto">GET INVOLVED</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
