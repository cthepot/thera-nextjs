import Image from 'next/image';
import { Public_Sans } from 'next/font/google';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Card from "../components/card";

const public_sans = Public_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${public_sans.className}`}
    >
    <header className="w-full py-4 px-6 bg-white lg:px-0">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <a
          href="/"
          className="flex items-center"
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
        {/* Add other navigation elements here */}
      </div>
    </header>

      <div className="w-full max-w-5xl mt-20 mb-10 px-4 lg:px-0">
        <div>
          <h1 className= "mb-3">
            <span className='text-blue-primary'>Your</span> fans deserve<br/>
            Your <span className='text-blue-primary'>health supplements</span>
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
          className="bg-blue-primary hover:bg-blue-600 text-base text-white font-bold py-2 px-4 mb-2 rounded-full inline-flex items-center">
            Get more information{' '}
            <ArrowRightIcon className="h-5 w-5 ml-1"/>
          </button>
          </a>
          <p className='text-xs'>
            Made in France <span>&#183;</span> No advance payment <span>&#183;</span> Shipped to your fans
          </p>
        </div>
      </div>


      <div className='bg-white w-full py-10 px-4 lg:px-0'>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
            <Card heading = "Your brand" description = "Select health supplements tailored to your community. We design the packaging that you want."/>
            <Card heading = "Pay later" description = "No need to pay large orders and manage inventory. Pay only when you sold your products."/>
            <Card heading = "We ship" description = "We package and fulfill orders to all of your customers individually to make your life eaier."/>
        </div>
      </div>

      <div className='w-full py-20 px-4 lg:px-0 text-center'>
        <h2>
          Organic, made in France<br/>
          <span className='text-blue-primary'>& Accredited</span>
        </h2>
        <p className='text-base'>
          Our ingredients are sourced following strict guidelines and high quality standards. <br/>
          All our products produced in France and under organic French or European labels.
        </p>
      </div>


    </main>
  )
}
