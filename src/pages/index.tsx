import Image from 'next/image'
import { Public_Sans } from 'next/font/google'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

const public_sans = Public_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${public_sans.className}`}
    >
      <div className="w-full max-w-5xl items-center justify-between text-sm lg:flex">
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

      <div className="w-full max-w-5xl mt-20 mb-10">
        <div>
          <h1 className= "mb-3">
            <span className='text-blue-500'>Your</span> fans deserve<br/>
            Your health <span className='text-blue-500'>supplements</span>
          </h1>
          <p className='text-base'>
            Customize health supplements and sell them under your own brand.<br/>
            Pay only when sold, and we ship them directly to your fans.
          </p>
        </div>
        <div className= "py-7">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScYP1JMfFryeiFxUrpYr8X8jFQgkFne1XcNPEqRNjtULoxCLQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button
          className="bg-blue-500 hover:bg-blue-600 text-base text-white font-bold py-2 px-4 mb-2 rounded-full inline-flex items-center">
            Get more information{' '}
            <ArrowRightIcon className="h-5 w-5 ml-1"/>
          </button>
          </a>
          <p className='text-xs'>
            Made in France <span>&#183;</span> No advance payment <span>&#183;</span> Shipped to your fans
          </p>
        </div>
      </div>


      <div className='bg-white w-full py-5'>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            className="group rounded-lg border border-transparent px-5 py-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="mb-3 text-xl font-semibold">
              Accredited products
            </h4>
            <p className="m-0 max-w-[30ch] text-sm opacity-80">
              Locally sourced and manufactured in France. Our health supplements follow strict guidelines for high quality products.
            </p>
          </a>

          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-color"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="mb-3 text-xl font-semibold">
              Your brand design
            </h4>
            <p className="m-0 max-w-[30ch] text-sm opacity-80">
              Select health supplements tailored to your community. We design the packaging that you want.
            </p>
          </a>

          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="mb-3 text-xl font-semibold">
              Sell before paying
            </h4>
            <p className="m-0 max-w-[30ch] text-sm opacity-80">
              No need to pay large orders and manage inventory. Pay only when you sold your products.
            </p>
          </a>

          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-xl font-semibold">
              We ship your products
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-80">
              We package and fulfill orders to all of your customers individually to make your life eaier.
            </p>
          </a>
        </div>
      </div>
    </main>
  )
}
