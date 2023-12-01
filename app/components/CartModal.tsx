"use client";
import React from "react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

export function CartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  console.log("cartDetails", cartDetails);

  async function handleCheckoutClick(event: any) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      console.log("resss", result);

      if (result?.error) {
        console.log("result");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Sheet
      open={shouldDisplayCart}
      onOpenChange={() => {
        handleCartClick();
      }}
    >
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          {" "}
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="mt-6 divide-y divide-gray-200">
              {cartCount == 0 ? (
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl font-semibold">
                    You have no cart items
                  </h1>
                </div>
              ) : (
                <>
                  {" "}
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li
                      className="py-6 flex border-b border-gray-200 "
                      key={entry?.id}
                    >
                      <div className="h-24 w-24 sm:h-20 sm:w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entry?.image || ""}
                          alt="cart image"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="ml-3 flex flex-col flex-1 overflow-x-hidden">
                        <div className="flex justify-between">
                          <h1 className="text-xl font-semibold md:text-sm ">
                            {entry?.name}
                          </h1>
                          <h2 className="mt-1 text-2xl font-semibold">
                            {entry?.price}
                          </h2>
                        </div>
                        <div className="mt-1 overflow-x-hidden">
                          <p className="text-sm line-clamp-2 text-justify text-gray-700 ">
                            {entry?.desc}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">QTY: {entry.quantity}</p>

                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              Remove
                            </button>
                          </div>
                          {}
                        </div>
                      </div>
                    </li>
                  ))}{" "}
                </>
              )}
            </ul>
          </div>

          {cartCount != 0 && (
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              {/* Subtotal Section */}
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal:</p>
                <p>${totalPrice}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes are calculated at checkout.
              </p>
              <div className="mt-6">
                <div className="w-full">
                  <Button className="w-full" onClick={handleCheckoutClick}>
                    CheckOut
                  </Button>
                </div>
                <div className="mt-3 flex justify-center items-center">
                  <p className="text-sm text-gray-500">
                    Or{" "}
                    <span
                      className="text-primary cursor-pointer"
                      onClick={() => {
                        handleCartClick();
                      }}
                    >
                      Continue shopping
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
