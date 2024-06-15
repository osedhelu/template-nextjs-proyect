export default function Footer() {
  return (
    <footer className="pb-4">
      <div className="mx-auto max-w-6xl divide-y divide-gray-200 px-4 sm:px-6 md:px-8 xl:max-w-6xl">
        <ul className="Footer_nav__2rFid grid gap-y-10  text-sm font-medium sm:grid-cols-2 sm:pb-20 md:grid-cols-3 lg:grid-cols-4">
          <li className="row-span-2 space-y-5">
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">Company</h2>
            <ul className="text-md space-y-4">
              <li>
                <a className="text-2xl transition-colors duration-200 hover:text-gray-900" href="/">
                  Jobs
                </a>
              </li>
              <li>
                <a className="text-2xl transition-colors duration-200 hover:text-gray-900" href="/">
                  Merch
                </a>
              </li>{' '}
              <li>
                <a className="text-2xl transition-colors duration-200 hover:text-gray-900" href="/">
                  Brand
                </a>
              </li>{' '}
              <li>
                <a className="text-2xl transition-colors duration-200 hover:text-gray-900" href="/">
                  Meetups
                </a>
              </li>
            </ul>
          </li>
          <li className="row-span-2 space-y-5">
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">Newsroom</h2>
            <ul className="space-y-4">
              <li>
                <a className="text-2xl transition-colors duration-200 hover:text-gray-900" href="/">
                  News
                </a>
              </li>
              <li>
                <a className="text-2xl transition-colors duration-200 hover:text-gray-900" href="/">
                  Press
                </a>
              </li>
              <li>
                <a className="text-2xl transition-colors duration-200 hover:text-gray-900" href="/">
                  Blog
                </a>
              </li>
            </ul>
          </li>
          <li className="row-span-2 space-y-5">
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">Products</h2>
            <ul className="space-y-4">
              <li>
                <a className="text-2xl transition-colors duration-200 hover:text-gray-900" href="/">
                  Hosting
                </a>
              </li>
              <li>
                <a className="text-2xl transition-colors duration-200 hover:text-gray-900" href="/">
                  Domains
                </a>
              </li>
              <li>
                <a className="text-2xl transition-colors duration-200 hover:text-gray-900" href="/">
                  Security
                </a>
              </li>
              <li>
                <a className="text-2xl transition-colors duration-200 hover:text-gray-900" href="/">
                  SSL
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">Connect</h2>
            <ul className="space-y-4">
              <li>
                <a className="text-2xl transition-colors duration-200 hover:text-gray-900" href="/">
                  Twitter
                </a>
              </li>
              <li>
                <a className="text-2xl transition-colors duration-200 hover:text-gray-900" href="/">
                  Facebook
                </a>
              </li>
              <li>
                <a className="text-2xl font-semibold transition-colors duration-200 hover:text-gray-900" href="/">
                  Instagram
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-col-reverse justify-between border-t border-black bg-top pb-4 pt-5 lg:flex-row">
          <ul className="flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0">
            <li>
              <a
                href="/"
                className="text-md hover:text-deep-purple-accent-400 font-semibold text-black transition-colors duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md hover:text-deep-purple-accent-400 font-semibold text-black transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md hover:text-deep-purple-accent-400 font-semibold text-black transition-colors duration-300"
              >
                Ad Choices
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md hover:text-deep-purple-accent-400 font-semibold text-black transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md hover:text-deep-purple-accent-400 font-semibold text-black transition-colors duration-300"
              >
                Partners
              </a>
            </li>
          </ul>
          <ul className="mb-3 flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0">
            <a
              href="/"
              className="text-md hover:text-deep-purple-accent-400 font-semibold tracking-tight text-black transition-colors duration-300"
            >
              © 2021 Company Inc.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  )
}
