"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IHeaderData } from "lib/cms-content/getHeaderContent";
import { AgilityImage } from "@agility/nextjs";

interface Props {
  header: IHeaderData | null;
}

const SiteHeader = ({ header }: Props) => {
  // open / close mobile nav
  const [open, setOpen] = useState(false);

  if (!header) {
    return (
      <header className="relative p-8 text-center">
        <p className="font-bold text-gray-400">No Header Available</p>
      </header>
    );
  }

  return (
    <header className="relative mx-auto w-full bg-white px-8">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex w-full items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="md:w-0 md:flex-1">
            <Link href="/" className="flex items-center">
              <AgilityImage
                className="h-14 w-auto sm:h-20"
                src={header.logo.url}
                alt={header.logo.label}
                width={header.logo.height}
                height={header.logo.width}
                fill={false}
              />
              <p className="ml-3 mt-2 text-xl font-bold text-secondary-500">
                {header.siteName}
              </p>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
            >
              {/* <!-- Heroicon name: menu --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            {header.links.map((navitem, index) => {
              return (
                <Link
                  href={navitem.path}
                  key={`mobile-${index}`}
                  className="hover:border-b-primary border-b-2 border-transparent text-base font-medium leading-6 text-secondary-500 transition duration-300 hover:border-b-2 hover:border-primary-500 hover:text-primary-500 focus:text-primary-500 focus:outline-none"
                >
                  {navitem.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-0 z-20 origin-top-right p-2 transition md:hidden"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="rounded-lg shadow-lg">
          <div className="shadow-xs divide-y-2 divide-gray-50 rounded-lg bg-white">
            <div className="space-y-6 px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/" className="flex items-center">
                    <AgilityImage
                      className="h-14 w-auto sm:h-20"
                      src={header.logo.url}
                      alt={header.logo.label}
                      width={header.logo.height}
                      height={header.logo.width}
                      fill={false}
                    />
                    <p className="ml-3 mt-2 text-xl font-bold text-secondary-500">
                      {header.siteName}
                    </p>
                  </Link>
                </div>
                <div className="">
                  <button
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle Menu"
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-300 hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                  >
                    {/* <!-- Heroicon name: x --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <nav className="grid gap-y-8">
                  {header.links.map((navitem, index) => {
                    return (
                      <Link
                        key={`nav-${index}`}
                        href={navitem.path}
                        onClick={() => setOpen(false)}
                        className="-m-3 flex items-center space-x-3 rounded-md p-3 transition duration-300 hover:bg-gray-50"
                      >
                        {/* <!-- Heroicon name: view-grid --> */}
                        <svg
                          className="h-6 w-6 shrink-0 text-primary-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                        <div className="text-base font-medium leading-6 text-gray-900">
                          {navitem.title}
                        </div>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
