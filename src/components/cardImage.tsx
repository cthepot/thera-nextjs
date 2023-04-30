import React from "react";
import Image from "next/image";

interface CardImageProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

const CardImage: React.FC<CardImageProps> = ({ src, alt, title, description, width, height }) => {
  return (
    <div className="flex flex-col p-6 gap-6 border border-gray-300 items-center w-full lg:w-1/2 h-64">
      <Image src={src} alt={alt} width={width} height={height}/>
      <h4 className="">{title}</h4>
      <p className="text-gray-subtitle text-opacity-60">{description}</p>
    </div>
  );
};

export default CardImage;
