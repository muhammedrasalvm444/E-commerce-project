import { CheckCheck, XCircle } from "lucide-react";
import React from "react";

const Failed = () => {
  return (
    <div className=" h-screen flex justify-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <XCircle className="h-10 w-10 text-red-900" />

        <p> Transaction failed </p>
      </div>
    </div>
  );
};

export default Failed;
