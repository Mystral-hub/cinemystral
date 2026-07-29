import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="dark:bg-[rgb(3,3,51)] dark:text-gray-200 bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-evenly">
        <span className="text-sm text-body sm:text-center">
          © 2026{" "}
          <Link to="/" className="hover:underline">
            LAKOMPANY™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className=" flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
          <li>
            <a
              target="_blank"
              href="#"
              className="dark:text-gray-200 text-gray-700 hover:underline me-4 md:me-6">
              My Portfolio
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              className="dark:text-gray-200 text-gray-700 hover:underline me-4 md:me-6">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              className="dark:text-gray-200 text-gray-700 hover:underline me-4 md:me-6">
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              className="dark:text-gray-200 text-gray-700 hover:underline">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
