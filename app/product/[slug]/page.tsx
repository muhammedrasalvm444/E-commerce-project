import AddToCartButton from "@/app/components/AddToCartButton";
import CheckOutNowButton from "@/app/components/CheckOutNowButton";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import React from "react";
async function getData(slug: string) {
  const query = `*[_type == "product"&&slug.current=="${slug}"] {
          _id,
            price,
          name,
            "slug": slug.current,
            "categoryName": category->name,
           image,
            description,
            price_id
        }`;

  const data = await client.fetch(query);

  return data;
}

const detailPage = async ({ params }: { params: { slug: string } }) => {
  const data: fullProduct[] = await getData(params.slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 sm:mx-4 sm:px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {" "}
          <ImageGallery images={data[0]?.image} />
          <div className="md:py-6">
            <div className="my-4 ">
              <span className="text-xl text-gray-500 inline-block font-medium">
                {data[0]?.categoryName}
              </span>
              <h1 className="my-3 text-2xl  lg:text-2xl font-semibold">
                {data[0]?.name}
              </h1>
            </div>
            <div className="mb-6 md:mb-10 flex gap-6">
              <Button className="rounded-2xl flex gap-2 ">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>
              <span className=" text-sm text-gray-500 transition duration-100">
                59 Ratings
              </span>
            </div>
            <div className=" flex  items-center gap-4">
              <p className="text-xl font-medium">Price:</p>
              <span className="text-xl font-medium line-through text-red-500">
                ${data[0]?.price + 30}
              </span>
              <span className="text-2xl font-semibold">${data[0]?.price}</span>
            </div>

            <span className="text-sm font-medium my-3 text-gray-400">
              Include Vat plus shipping{" "}
            </span>
            <div className="my-3 flex items-center gap-3 text-gray-500">
              <Truck className="w-5 h-5" />
              <span className="text-sm">2-4 Days</span>
            </div>
            <div className="mt-6 mb-6 flex items-center gap-3 cursor-pointer">
              {/* <Button>Add to cart</Button> */}
              <AddToCartButton
                name={data[0]?.name}
                price={data[0]?.price}
                id={data[0]?._id}
                image={data[0]?.image[0]}
                currency="USD"
                desc={data[0]?.description}
                price_id={data[0]?.price_id}
              />
              <CheckOutNowButton
                name={data[0]?.name}
                price={data[0]?.price}
                id={data[0]?._id}
                image={data[0]?.image[0]}
                currency="USD"
                desc={data[0]?.description}
                price_id={data[0]?.price_id}
              />
            </div>
            <div className="mb-4 md:mb-18 mt-10">
              <p className="text-medium text-justify">{data[0]?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default detailPage;
