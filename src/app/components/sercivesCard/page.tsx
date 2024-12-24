import React, { useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import Image from "next/image"; // Import the Next.js Image component

// Create a builder instance for the Sanity client
const builder = imageUrlBuilder(client);

// Define the type for props
type ServiceCardProps = {
  name: string;
  description: string;
  image: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  slug: string;
};

// Define the urlFor function to return a proper URL with transformations
const urlFor = (source: any) => builder.image(source).width(800).url();


const ServicesCard: React.FC<ServiceCardProps> = ({ name, description, image, slug }) => {
  const slugVal = slug
  {console.log("SS",slugVal)}
  return (
    <div className="border rounded-lg p-4">
      {/* Project Image */}
      {image?.asset ? (
        <div className="mt-4 w-full h-64 relative">
          {/* Use Next.js Image with fixed layout */}
          <Image
            src={urlFor(image.asset)} // Generate the image URL
            alt={name}
            layout="fill" // Ensures the image fills its container
            objectFit="cover" // Maintains aspect ratio while filling
            className="rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
      ) : (
        <p className="mt-4 text-red-500">Image not available</p>
      )}

      {/* Project Name */}
      <h1 className="mt-5 text-xl font-bold">{name}</h1>

      {/* Project Description */}
      <p className="mt-2 text-gray-700">{description}</p>

      {/* Project Link (slug) */}
      {slug && (
        <div className="mt-10">
          <a
            href={`/components/servicesDetails/${slug}`}
            className="text-blue-500 hover:text-blue-700"
          >
            View Details
          </a>
        </div>
      )}
    </div>
  );
};

export default ServicesCard;
