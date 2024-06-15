export default function Main() {
  const path = 'https://nine4-2.vercel.app'
  return (
    <section className="body-font text-gray-600">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-40 flex flex-col items-center pt-6 text-center md:ml-24 md:w-1/2 md:items-start md:text-left lg:grow">
          <h1 className="Avenir xl:w-2/2 mb-5 items-center text-5xl text-gray-900 sm:text-6xl">
            We are making Stunning Websites
          </h1>
          <p className="mb-4 text-lg text-gray-600 xl:w-3/4">
            nine4 is a free to use website template for websites made with Next.js and styled with Tailwind CSS
          </p>
          <div className="flex justify-center">
            <a
              className="mt-2 inline-flex items-center rounded-lg border bg-gray-900 bg-transparent px-5 py-3 font-medium text-white transition duration-500 ease-in-out"
              href="https://github.com/r1/nine4-2/"
            >
              <span className="justify-center">Find out more</span>
            </a>
          </div>
        </div>
        <div className="mb-0 mr-48 sm:mb-28 sm:mr-0 md:pl-10 lg:mb-0 xl:mr-44">
          <img className="ml-24 w-80 md:ml-1" alt="iPhone-12" src={`${path}/images/iPhone-12-Mockup.png`}></img>
        </div>
      </div>
      <section className="mx-auto">
        <div className="container mx-auto px-5 lg:px-24 ">
          <div className="mb-4 flex w-full flex-col text-left lg:text-center">
            <h1 className="Avenir mb-8 text-2xl font-semibold text-black">Trusted by top-tier product companies</h1>
          </div>
          <div className="mb-16 grid grid-cols-2 gap-16 text-center lg:grid-cols-4">
            <div className="flex items-center justify-center">
              <img
                src={`${path}/images/Google-Logo.svg`}
                alt="Google Logo"
                className="greyC block h-16 object-contain"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={`${path}/images/Shopify-Logo.svg`}
                alt="Shopify Logo"
                className="greyC block h-16 object-contain"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={`${path}/images/Cloudflare-Logo.svg`}
                alt="Cloudflare Logo"
                className="greyC block h-16 object-contain"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={`${path}/images/Paypal-Logo.svg`}
                alt="Paypal Logo"
                className="greyC block h-16 object-contain"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <div className="grr mx-auto max-w-7xl pt-20 text-center">
        <h1 className="Avenir mb-8 text-6xl font-semibold text-gray-900">Less code, less effort.</h1>
        <h1 className="Avenir mb-8 text-center text-2xl font-semibold text-gray-600">
          Minify your CSS with Tailwind's built in PostCSS support.
        </h1>
        <div className="container mx-auto flex flex-col items-center justify-center rounded-lg ">
          <img
            className="g327 mb-10 w-3/4 rounded-lg border object-cover object-center shadow-md"
            alt="Placeholder Image"
            src={`${path}/images/placeholder.png`}
          ></img>
        </div>
      </div>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <div className="py-24 md:py-36">
            <h1 className="Avenir mb-5 text-6xl font-semibold text-gray-900">Subscribe to our newsletter</h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-600">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              placeholder="jack@example.com"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-2 w-1/4 rounded-md border border-gray-600 px-2 py-3 font-semibold text-gray-800 hover:border-gray-900"
            ></input>{' '}
            <a
              className="ml-2 mt-2 inline-flex items-center rounded-lg border bg-gray-900 bg-transparent px-14 py-3 font-medium text-white transition duration-500 ease-in-out"
              href="/"
            >
              <span className="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  )
}
