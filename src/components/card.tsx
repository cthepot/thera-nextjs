import React from "react";


interface CardProps {
  title: string;
  description: string;
  className?: string;
}

function Card({ title, description, className }: CardProps) {
  return (
    <div className={`"flex flex-col items-start p-5 border border-gray-300" ${className} `}>
      <div className="flex flex-col gap-6 mt-4">
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

export default Card
