import React from "react";

type IconType = React.ComponentType<{ className?: string }>;

interface CardProps {
  heading: string;
  description: string;
  icon: IconType;
}

const Card : React.FC<CardProps> = ({heading, description, icon: IconComponent }) => {
  return(
      <div className="flex flex-col items-center py-4 lg:px-0">
        <div className="items-start justify-center bg-gray-100 rounded-lg p-5 mr-5">
          <div className="flex items-center mb-3">
            <IconComponent className="inline w-6 mr-2" />
            <h4 className="text-xl font-semibold text-left">
              {heading}
            </h4>
          </div>
          <p className="text-sm text-left opacity-80">
            {description}
          </p>
        </div>
      </div>
  )
}

export default Card
