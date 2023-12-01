"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
type CartData = {
  name: string;
  id: string;
  price: number;
  image: any;
  desc: string;
  currency: string;
  price_id: string;
};
const CheckOutNowButton = ({
  name,
  id,
  price,
  image,
  desc,
  currency,
  price_id,
}: CartData) => {
  console.log("prod", urlFor(image).url());
  const product = {
    name: name,
    id: id,
    price: price,
    image: urlFor(image).url(),
    desc: desc,
    currency: currency,
    price_id: price_id,
  };
  console.log("product", product);

  const { checkoutSingleItem } = useShoppingCart();
  const buyNow = (priceId: string) => {
    checkoutSingleItem(priceId);
  };
  return (
    <Button
      variant={"secondary"}
      onClick={() => {
        buyNow(product?.price_id);
      }}
    >
      CheckOut Now
    </Button>
  );
};

export default CheckOutNowButton;
