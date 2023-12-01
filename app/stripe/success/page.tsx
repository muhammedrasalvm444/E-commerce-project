import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <div className=" h-screen flex justify-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <CheckCheck className="h-10 w-10 text-green-300"></CheckCheck>
        <p className="text-xl font-semibold ">
          {" "}
          your Order successfully placed{" "}
        </p>
        <p className="text-sm font-medium ">Thank you for your purchase</p>
        <Link href="/">
          <Button>Continue shopping</Button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
