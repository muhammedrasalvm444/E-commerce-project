"use client";
import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
interface iAppProps {
  images: any;
}
const ImageGallery = ({ images }: iAppProps) => {
  const [bigImage, setBigImage] = useState(images[0]);
  const handleImageChange = (image: any) => {
    setBigImage(image);
  };

  return (
    <div className=" grid lg:grid-cols-5 gap-4">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images?.map((image: any, id: any) => (
          <div className="overflow-hidden rounded-lg bg-gray-100" key={id}>
            <Image
              src={urlFor(image).url()}
              height={400}
              width={400}
              alt="Photos"
              className="w-full h-full object-cover cursor-pointer object-center"
              onClick={() => handleImageChange(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          height={400}
          width={400}
          alt="Photos"
          className="w-full h-full object-cover cursor-pointer object-center"
        />

        <span className="px-4 py-1.5 absolute top-0 left-0 rounded-br-lg bg-red-500  text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
};

export default ImageGallery;
