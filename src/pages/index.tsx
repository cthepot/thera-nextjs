import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Card from "../components/card";
import CardImage from "../components/cardImage";
import CardHowTo from "../components/cardHowTo";
import CardHowToDisabled from "../components/cardHowTo";
import Navbar from "../components/navbar";

const satoshiRegular = 'font-satoshi-regular';

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${satoshiRegular}`}>
      <div className="w-full max-w-5xl py-16 px-4 lg:px-0 flex flex-col gap-20">
        <Navbar/>
        <div className="flex lg:flex-row flex-col gap-8">
          <div className= "flex flex-col gap-10">
            <div className= "flex flex-col gap-6 flex-start">
              <h1>
                <span className="font-satoshi-bold">Your</span> fans deserve<br/>
                Your<span className="font-satoshi-bold"> health supplements </span>
              </h1>
              <p>
                Customize health supplements and sell them under your own brand.<br/>
                Pay only when sold, and we ship them directly to your fans.
              </p>
            </div>
            <div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScYP1JMfFryeiFxUrpYr8X8jFQgkFne1XcNPEqRNjtULoxCLQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-purple-primary text-white py-4 px-6 flex flex-row items-center rounded-full space-x-2.5">
                  <p className="font-weight-500">Get more information{' '}</p>
                  <ArrowRightIcon className="h-5 w-5 ml-1"/>
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-column items-right">
            <Image
              src="/bottle.png"
              alt="picture of a jar of health supplements with 'your label' on it"
              className="w-full h-full object-contain"
              width= {350}
              height= {350}
            />
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

      <div className='w-full max-w-5xl py-16 px-4 lg:px-0'>
        <div className=' mb-16'>
          <h2 id="certification" className="mb-6">
          Organic, made in France<br/>
          <span className='font-satoshi-bold'>& Certified</span>
          </h2>
          <p>
            Our ingredients are sourced following strict guidelines and high quality standards. <br/>
            All our products produced in France and under organic French or European labels.
          </p>
        </div>
        <div className='flex flex-col md:flex-row py-10 items-start p-0 gap-10'>
          <CardImage
            src = "/france.png"
            alt = "Made in France"
            title = "Made in France"
            description = "All supplements are produced and packaged in France."
            width = {60}
            height = {80}
          />
          <CardImage
            src = "/check-badge.svg"
            alt = "Organic Ingredients"
            title = "Organic Ingredients"
            description = "Certified French “Agriculture Biologique“ or European organic"
            width = {60}
            height = {80}
          />
          <CardImage
            src = "/tag.svg"
            alt = "Certified Labels"
            title = "Certified Labels"
            description = "We issue your label to a certification agency"
            width = {60}
            height = {80}
          />
        </div>
      </div>


      <div  className='w-full max-w-5xl py-16 px-4 lg:px-0'>
        <h2 id="how-it-works" className='mb-16'>
        How it <span className='font-satoshi-bold'>works</span>
        </h2>
        <div className = "flex flex-col items-start gap-10">
          <div className='flex flex-col lg:flex-row items-start gap-10'>
            <CardHowTo
              title = "Select supplements"
              description = "From a catalogue of 20+ products, whether it is for clearer skin or deeper focus we tailor short and long programs to your audience."
              stepId = { 1 }
            />
            <CardHowToDisabled
              title = "We design your packaging"
              description = "Unleash your brand's full potential with custom packaging we design for your. Limitless possibilities to make your products stand out and shine."
              stepId = { 2 }
              />
          </div>
          <div className='flex flex-col lg:flex-row items-start gap-10'>
            <CardHowToDisabled
              title = "Sell without paying"
              description = "We set-up a shopify for you so you can focus on selling your product. No need to pay large orders and manage inventory."
              stepId = { 3 }
            />
            <CardHowToDisabled
              title = "We ship your products"
              description = "Pay only after you have sold your products. We ship directly to your fans in 1 week"
              stepId = { 4 }
            />
          </div>
        </div>
      </div>

      <div className='w-full max-w-5xl py-16 px-4 lg:px-0'>
        <div className="mb-16">
          <h2 className="mb-6" id="health-supplements">
          Choose from a wide range of<br/>
          <span className='font-satoshi-bold'>health supplements</span>
          </h2>
        </div>

        <div className= "flex flex-col flex-start gap-20">

            <div className="flex flex-col flex-start gap-6">
              <div className="font-instrument-serif-big">
                <p>&quot;I have hair problems&quot;</p>
              </div>
              <div className= 'flex flex-col md:flex-row items-stretch p-0 gap-10'>
                <Card
                  className = "w-full md:w-1/3"
                  title = "Vitamin A & B"
                  description = "Essential elements to foster durable hair growth."
                />
                <Card
                  className = "w-full md:w-1/3"
                  title = "Bear Yeast"
                  description = "Makes hair and nails stronger thanks to its high nutritunial content."
                />
                <Card
                  className = "w-full md:w-1/3"
                  title = "Co-enzyme B4"
                  description = "Increases cellular energy to stimulate production of hair keratins."
                />
              </div>
            </div>

            <div className="flex flex-col flex-start gap-6">
              <div className="font-instrument-serif-big">
                <p>&quot;I want to improve my silhouette&quot;</p>
              </div>
              <div className= 'flex flex-col md:flex-row items-stretch p-0 gap-10'>
                <Card
                  className = "w-full md:w-1/3"
                  title = "Branched-Chain Amino Acids"
                  description = "Essential for muscle growth and reducing exercise fatigue."
                />
                <Card
                  className = "w-full md:w-1/3"
                  title = "Acid-Base Balance"
                  description = "Maintains body pH, crucial for metabolic health."
                />
                <Card
                  className = "w-full md:w-1/3"
                  title = "Fat-Burner"
                  description = "Boosts metabolism and aims to enhance fat burning."
                />
              </div>
            </div>

            <div className="flex flex-col flex-start gap-6">
              <div className="font-instrument-serif-big">
                <p>&quot;I want a healthier skin&quot;</p>
              </div>
              <div className= 'flex flex-col md:flex-row items-stretch p-0 gap-10'>
                <Card
                  className = "w-full md:w-1/3"
                  title = "Acid hyaluronic"
                  description = "Hydrates skin, aids wound healing and promote healthier joints."
                />
                <Card
                  className = "w-full md:w-1/3"
                  title = "Marin collagen"
                  description = "Supports skin health, boosts elasticity and improve joint health."
                />
                <Card
                  className = "w-full md:w-1/3"
                  title = "Hydration cream"
                  description = "Moisturize and replenish dry skin for a better feel and look."
                />
              </div>
            </div>

        </div>

      </div>

      {/*
      <div className='w-full max-w-5xl py-16 px-4 lg:px-0'>
        <h2 className="16 font-satoshi-bold" id="contact">
        Contact
        </h2>
      </div>
  */}

      <div className="w-full bg-black">
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col flex-start py-16 px-4 lg:px-0 gap-2">
            <Image
              src="/thera-white.svg"
              alt="Thera Logo"
              width={60}
              height={20}
            />
            <p className="text-white opacity-60">
              Copyright © 2023. All rights reserved.
            </p>
          </div>
        </div>
      </div>

    </main>
  )
}
