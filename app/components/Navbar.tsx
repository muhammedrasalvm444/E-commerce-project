"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

// ... (import statements remain unchanged)

const Navbar = () => {
  const Links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Men",
      href: "/Men",
    },
    {
      name: "Women",
      href: "/Women",
    },
    {
      name: "Teens",
      href: "/Teens",
    },
  ];
  const { handleCartClick } = useShoppingCart();

  const pathname = usePathname();

  return (
    <header className="mb-8 border-b">
      <div className="flex justify-between items-center mx-auto max-w-2xl px-4 py-2 sm:px-6 lg:max-w-7xl">
        <Link href={"/"}>
          <h1 className="font-bold text-2xl md:text-4xl">
            Next <span className="text-primary">Commerce</span>
          </h1>
        </Link>
        <div className="flex items-center">
          <nav className="hidden gap-16 lg:flex 2xl:ml-16">
            {Links?.map((item, index) => (
              <Link
                key={index}
                href={item?.href}
                className={`text-xl font-semibold ${
                  item?.href === pathname
                    ? "lg text-2xl text-primary"
                    : "text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                }`}
              >
                {item?.name}
              </Link>
            ))}
          </nav>
          <div className="flex divide-x border-r sm:border-l ml-7">
            <Button
              variant={"outline"}
              onClick={() => handleCartClick()}
              className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
            >
              <ShoppingBag />
              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Cart
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
