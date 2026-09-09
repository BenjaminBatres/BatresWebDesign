"use client";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { motion } from "motion/react";
interface IFAQ {
  id: number;
  title: string;
  description: string;
}
export default function FAQ({ title, description, id }: IFAQ) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: id * 0.15, duration: 0.7 }}
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
          <p className="pb-4 px-4 text-left tracking-[-0.5px]">{description}</p>
        </div>
      </div>
    </motion.button>
  );
}
