'use client'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  return (
    <div className="clearNav fixed top-0 z-30 w-full transition duration-300 ease-in-out md:bg-opacity-90">
      <div className="mx-auto flex max-w-6xl flex-col px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <Link
            href="/"
            className="focus:shadow-outline rounded-lg text-lg font-semibold tracking-widest focus:outline-none"
          >
            <h1 className="Avenir md:text-4x1 text-4xl tracking-tighter text-gray-900 lg:text-3xl">NINE4</h1>
          </Link>
          <button
            className="cursor-pointer px-3 py-1 leading-none text-white outline-none focus:outline-none md:hidden "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#191919"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className={'flex-grow items-center md:flex' + (navbarOpen ? ' flex' : ' hidden')}>
          <nav className="grow flex-col ">
            <ul className="flex grow flex-wrap items-center justify-end">
              <li>
                <a
                  href="/"
                  className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Careers
                </a>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className="text-md mt-2 inline-flex items-center rounded-lg bg-gray-800 bg-transparent px-4 py-2 font-medium text-white transition duration-500 ease-in-out md:ml-4 md:mt-0"
                  href="/auth/login"
                >
                  <span className="justify-center">Login</span>
                  <svg
                    className="-mr-1 ml-2 flex size-3 fill-current text-gray-400"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
