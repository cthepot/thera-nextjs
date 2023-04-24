import React from "react";

interface CardProps {
  heading: string;
  description: string;
}

const Card : React.FC<CardProps> = ({heading, description}) => {
  return(
      <div className="flex flex-col items-center px-5 py-4 lg:px-0">
        <h4 className="mb-3 text-xl font-semibold lg:text-left">
          {heading}
        </h4>
        <p className="m-0 w-full md:w-3/4 lg:max-w-[30ch] xl:max-w-[32ch] text-sm text-center lg:text-left opacity-80">
          {description}
        </p>
      </div>
  )
}

export default Card
