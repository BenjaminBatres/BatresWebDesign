"use client";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
interface IFAQ {
  title: string;
  description: string;
}
export default function FAQ({ title, description }: IFAQ) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white rounded-lg cursor-pointer w-full"
      >
        <div className="flex justify-between items-center p-4">
          <span className="md:text-xl font-semibold text-left">{title}</span>
          <div className="flex justify-center items-center rounded-full size-8 bg-[#ebebeb]">
            <GoPlus
              className={`text-2xl transition-transform duration-300 ${
                isOpen ? "rotate-45" : ""
              }`}
            />
          </div>
        </div>
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <p className="pb-4 px-4 text-left tracking-[-0.5px]">
              {description}
            </p>
          </div>
        </div>
      </button>
    </>
  );
}
