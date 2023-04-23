import Image from 'next/image'
import { Public_Sans } from 'next/font/google'

const public_sans = Public_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${public_sans.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/thera.svg"
              alt="Thera Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="z-10 w-full max-w-5xl">
        <h1 className="text-2xl font-bold">
          Your fans deserve
          Your health supplements
        </h1>
        <p>
          Design health supplements produced in France, under your own brand.
          Pay only when sold, and we ship them to your fans.
        </p>
        <button className="rounded-full slate-800">
          Get more information
        </button>
        <p>
          Made in France No advance payment Shipped to your fans
        </p>
      </div>

      <div>
        <h2>
          Your Community,
          Your Health Supplements.
        </h2>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="mb-3 text-2xl font-semibold">
            Accredited supplements
          </h4>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Locally sourced and manufactured in France. Our health supplements follow strict guidelines for high quality products
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="mb-3 text-2xl font-semibold">
            Your Product. Your brand.
          </h4>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Choose health supplements, the packaging and design. We will help tailor it to your community.
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="mb-3 text-2xl font-semibold">
            Sell before buying
          </h4>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            To change
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            We ship your products
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            To change
          </p>
        </a>
      </div>
    </main>
  )
}
