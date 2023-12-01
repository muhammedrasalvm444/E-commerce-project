import React from "react";
import { client } from "../lib/sanity";
import { fullProduct, simplifiedProduct } from "../interface";
import Image from "next/image";
import Link from "next/link";
async function getData(category: string) {
  const query = `*[_type == "product"&&category->name=="${category}"] |order(_createdAt desc) {
    _id,
      price,
    name,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": image[0].asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

const page = async ({ params }: { params: { category: string } }) => {
  const data: simplifiedProduct[] = await getData(params.category);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-4 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center mt-5">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 ms:text-3xl">
            Our Latest products of{" "}
            <span className="text-primary">{params?.category}</span>
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product?.imageUrl ?? ""}
                  alt="Product image"
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="flex justify-between mt-3">
                <div>
                  <h3 className="text-xl font-semibold">
                    {" "}
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-xl font-semibold text-gray-900 mt-4">
                    {" "}
                    {product.categoryName}
                  </p>
                </div>
                <div className="flex gap-3">
                  <h1 className="text-xl font-semibold pl-2 text-primary">
                    ${product?.price}
                  </h1>
                  <div className="text-2xl">
                    {" "}
                    {/* Adjust the size here */}
                    {/* <IndianRupee /> */}
                  </div>
                </div>
              </div>
              {/* <div className="flex justify-end my-2">
            <Button className="h-10 w-28 ">Add to Cart</Button>
          </div> */}

              {/* <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <Link href={`/product/${product.slug}`}>
                  {product.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {product.categoryName}
              </p>
            </div>
            <p className="text-sm font-medium text-gray-900">
              {product.price}
            </p>
          </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
