import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Card from "../components/card";
import CardImage from "../components/cardImage";
import CardHowTo from "../components/cardHowTo";
import Navbar from "../components/navbar";

const satoshi = 'satoshi-regular';

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${satoshi}`}>
      <div className="w-full max-w-5xl py-16 px-4 lg:px-0 flex flex-col gap-20">
        <Navbar/>
        <div>
          <h1 className= "mb-3">
            Your <span className='font-weight-300'>fans deserve</span><br/>
            <span className='font-weight-300'>Your</span> health supplements
          </h1>
          <p>
            Customize health supplements and sell them under your own brand.<br/>
            Pay only when sold, and we ship them directly to your fans.
          </p>
        <div className= "py-7">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScYP1JMfFryeiFxUrpYr8X8jFQgkFne1XcNPEqRNjtULoxCLQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button
          className="bg-purple-primary text-white py-4 px-6 mb-2 flex flex-row items-center rounded-full space-x-2.5">
            <p className="font-weight-500">Get more information{' '}</p>
            <ArrowRightIcon className="h-5 w-5 ml-1"/>
          </button>
          </a>
        </div>
      </div>
      </div>


      <div className='w-full max-w-5xl px-4 py-16'>
        <div className = "flex flex-row gap items-center text-center justify-center font-instrument-serif mb-16 gap-2.5">
          <p> Made in France</p>
          <span className='ellipsis-4 rounded-full'/>
          <p>No advance payment</p>
          <span className='ellipsis-4 rounded-full'/>
          <p>Shipped to your fans </p>
        </div>
        <div className= 'flex flex-col md:flex-row items-start p-0 gap-10'>
              <Card
                title = "Your brand"
                description = "Select health supplements tailored to your community. We design the packaging that you want."
             />
              <Card
                title = "Pay later"
                description = "No need to pay large orders and manage inventory. Pay only when you sold your products."
              />
              <Card
                title = "We ship"
                description = "We package and fulfill orders to all of your customers individually to make your life easier."
              />
        </div>
      </div>
{/*
      <div className='w-full max-w-5xl py-16 px-4 lg:px-0'>
        <div className=' mb-16'>
          <h2 id="organic-made-in-france-accredited" className="mb-6">
          <span className='font-weight-300'>Organic, made in France</span><br/>
            & Accredited
          </h2>
          <p>
            Our ingredients are sourced following strict guidelines and high quality standards. <br/>
            All our products produced in France and under organic French or European labels.
          </p>
        </div>
        <div className='flex flex-col md:flex-row py-10 items-start p-0 gap-10'>
          <CardImage
            src = "/french-flag.png"
            alt = "Made in France"
            title = "Made in France"
            description = "All supplements are produced and packaged in France."
            width = {60}
            height = {80}
          />
          <CardImage
            src = "/ab.png"
            alt = "Organic Ingredients"
            title = "Organic Ingredients"
            description = "Certified French “Agriculture Biologique or European organic"
            width = {60}
            height = {80}
          />
        </div>
      </div>
*/}

      <div  className='w-full max-w-5xl py-16 px-4 lg:px-0'>
        <h2 id="how-it-works" className='mb-16'>
        <span className='font-weight-300'>How it </span> works
        </h2>
        <div className = "flex flex-col items-start gap-10">
          <div className='flex flex-col lg:flex-row items-start gap-10'>
            <CardHowTo
              title = "Select supplements"
              description = "From a catalogue of 20+ products, whether it’s for clearer skin or deeper focus we tailor short and long programs to your audience."
              stepId = { 1 }
            />
            <CardHowTo
              title = "We design your packaging"
              description = "Unleash your brand's full potential with custom packaging we design for your. Limitless possibilities to make your products stand out and shine."
              stepId = { 2 }
              />
          </div>
          <div className='flex flex-col lg:flex-row items-start gap-10'>
            <CardHowTo
              title = "Sell without paying"
              description = "We set-up a shopify for you so you can focus on selling your product. No need to pay large orders and manage inventory."
              stepId = { 3 }
            />
            <CardHowTo
              title = "We ship your products"
              description = "Pay only after you have sold your products. We ship directly to your fans in 4 weeks."
              stepId = { 4 }
            />
          </div>
        </div>
      </div>

{/*

      <div className='w-full max-w-5xl py-16 px-4 lg:px-0'>
          <div className="mb-16">
          <h2 className="mb-6" id="health-supplements">
          <span className='font-weight-300'>Choose from a wide range of </span><br/>
          health supplements
          </h2>
          <p>From a catalogue of 20+ products, find the supplements that best fit your community</p>
        </div>
      </div>

      <div className='w-full max-w-5xl py-16 px-4 lg:px-0'>
        <h2 className="16" id="contact">
        Contact
        </h2>
      </div>

*/}

    </main>
  )
}
