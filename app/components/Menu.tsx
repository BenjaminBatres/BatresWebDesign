"use client";

import { useState } from "react";
import Links from "./ui/Links";
import Link from "next/link";

interface ILinks {
  path: string;
  name: string;
}

interface MenuProps {
  links: ILinks[];
}
export default function Menu({ links }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <div
        className="relative size-8 flex flex-col justify-center gap-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-1.75" : "rotate-0 "}`}
        />
        <div
          className={`w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-1.75" : "rotate-0"}`}
        />
      </div>

      <div
        className={`${isOpen ? "max-h-105" : "pointer-events-none max-h-0"} absolute top-16 sm:top-20 left-0 w-full duration-350 ease-linear z-20 overflow-hidden`}
      >
        <div className="bg-white p-6 border-t shadow-sm">
          <ul className="space-y-5">
            {links.map((link, id) => (
              <Links key={id} name={link.name} path={link.path} setIsOpen={setIsOpen}/>
            ))}
            <Link
              href={"/contact"}
              onClick={() => setIsOpen(false)}
              className="sm:hidden px-6 py-2 bg-black text-white rounded-full font-semibold hover:bg-black/90 duration-300"
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
      <div onClick={() => setIsOpen(false)} className={`${isOpen ? '' : "pointer-events-none" }fixed inset-0 -z-10`}/>
    </div>
  );
}
