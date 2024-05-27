import { TbBrandGithubCopilot } from 'react-icons/tb';
import { SiGithubactions } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

import Link from 'next/link';
export default function Footer() {
  return (
    <footer className=" flex text-center h-16 w-full shrink-0 items-center border-t-2 border-gray-100 0 bg-gray-50 dark:bg-gray-950">
      <div className="container flex items-center justify-center gap-4 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <FaGithub className="h-6 w-6" />
          <span className="font-semibold">Acme Inc</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            className="text-sm font-medium hover:underline hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Link
            className="rounded-full border border-gray-200  hover:border-gray-300 hover:text-gray-900  dark:border-gray-800 dark:hover:border-gray-800 dark:hover:text-gray-50"
            href="#"
          >
            <span className="sr-only">Twitter</span>
            <SiGithubactions className="w-4 h-4" />
          </Link>
          <Link
            className="rounded-full border  border-gray-200 hover:border-gray-300 hover:text-gray-900  dark:border-gray-800 dark:hover:border-gray-800 dark:hover:text-gray-50"
            href="#"
          >
            <span className="sr-only">GitHub</span>
            <TbBrandGithubCopilot className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
