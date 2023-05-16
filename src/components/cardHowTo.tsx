import React from "react";

interface CardHowToProps {
  title: string;
  description: string;
  stepId: number;
}



function CardHowTo({ title, description, stepId }: CardHowToProps) {
  return (
    <div className="flex flex-row lg:flex-col items-start p-5 border border-gray-300 w-full lg:w-1/2 h-64">
      <div className="flex flex-col gap-6">
        <div className="flex flex-row items-center gap-2">
        <span className='ellipsis-8 rounded-full bg-purple-primary'/>
        <p className="text-left text-opacity-60"> Step {stepId}</p>
        </div>
        <h4 className="text-left">
            {title}
        </h4>
        <p className="text-left text-gray-subtitle text-opacity-60">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CardHowTo
