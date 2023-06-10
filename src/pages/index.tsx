import Image from 'next/image';
import Card from "../components/card";
import CardImage from "../components/cardImage";
import CardHowTo from "../components/cardHowTo";
import CardHowToDisabled from "../components/cardHowTo";
import Navbar from "../components/navbar";
import EmailForm from "../components/emailForm";

const satoshiRegular = 'font-satoshi-regular';

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${satoshiRegular}`}>
      <div className="w-full max-w-5xl py-20 px-4 lg:px-0 flex flex-col gap-20">
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
            <div className="">
              <EmailForm isBlack={false}/>

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


      <div className='w-full max-w-5xl px-4 mb-20'>
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

      <div className='w-full max-w-5xl py-20 px-4 lg:px-0 flex flex-col gap-16'>
        <div className='flex flex-col gap-2.5'>
          <h2 id="certification">
          Organic, made in France<br/>
          <span className='font-satoshi-bold'>& Certified</span>
          </h2>
          <p>
            Our ingredients are sourced following strict guidelines and high quality standards. <br/>
            All of our products are produced in France and under organic French or European labels.
          </p>
        </div>
        <div className='flex flex-col md:flex-row items-start p-0 gap-10'>
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


      <div  className='w-full max-w-5xl py-20 px-4 lg:px-0 flex flex-col gap-16'>
        <div className="flex flex-col gap-2.5">
          <h2 id="how-it-works">
          How it <span className='font-satoshi-bold'>works</span>
          </h2>
          <p>
            Customize health supplements and sell them under your own brand.<br/>
            Pay only when sold, and we ship them directly to your fans.
          </p>
        </div>
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

      <div className='w-full bg-purple-primary'>
        <div className="max-w-5xl mx-auto py-20 px-4 lg:px-0">
          <div className = "flex flex-col gap-16">
            <div className = "flex flex-col gap-2.5">
              <h2 className="text-white" >
              Your supplement<span className='font-satoshi-bold'> store</span>, <br/>
              built by us
              </h2>
              <p className="text-white">
              Focus on distributing your product, not building technical solutions. We design and build a store for you.
              </p>
            </div>
            <Image
              src="/store-frame.png"
              alt="picture of a storefront with 4 products and price points"
              className="object-left w-full h-full object-contain"
              width= {900}
              height= {900}
            />
          </div>
        </div>
      </div>

      <div className='w-full max-w-5xl py-20 px-4 lg:px-0 flex flex-col gap-16'>
        <div className="flex flex-col gap-2.5">
          <h2 id="health-supplements">
            Choose from a wide range of<br/>
            <span className='font-satoshi-bold'>health supplements</span>
          </h2>
          <p>200 products available to sell under your own brand. Supplements from hair, nutrition, digestion,  stress, focus and more.</p>
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
                  title = "Beer Yeast"
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
                  title = "Branched-Chain Aminos"
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


      <div className='w-full bg-purple-primary'>
        <div className="max-w-5xl mx-auto py-20 px-4 lg:px-0">
          <div className = "flex flex-col gap-8">
            <div className ="flex flex-col gap-2.5">
              <h2 className="text-white " id="contact">
                Contact
              </h2>
              <p className='text-white'>
                Wanna know more? Share your email to have our full product catalogue.
              </p>
            </div>
            <EmailForm isBlack={true}/>
          </div>
        </div>
      </div>

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
