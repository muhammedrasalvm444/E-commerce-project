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
const AddToCartButton = ({
  name,
  id,
  price,
  image,
  desc,
  currency,
  price_id,
}: CartData) => {
  console.log("prod", price_id);
  const product = {
    name: name,
    id: id,
    price: price,
    image: urlFor(image).url(),
    desc: desc,
    currency: currency,
    price_id: price_id,
  };
  const { addItem, handleCartClick } = useShoppingCart();
  return (
    <Button
      onClick={() => {
        addItem(product);
        handleCartClick();
      }}
    >
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
