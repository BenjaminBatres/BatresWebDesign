"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
interface TLink {
  path: string;
  name: string;
  setIsOpen?(boolean: boolean): void;
}

export default function Links({ path, name, setIsOpen }: TLink) {
  const [targetSection, setTargetSection] = useState("");
  const router: any = useRouter();

  // If you're already on /, it scrolls directly.
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  // This decides whether to scroll immediately or change page first.
  const handleLinkClick = (href: string, sectionId: string) => {
    if (router.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      setTargetSection(sectionId);
      router.push(href);
    }
    setIsOpen?.(false);
  };

  useEffect(() => {
    if (targetSection) {
      scrollToSection(targetSection);
      setTargetSection(""); // Reset target section after scrolling
    }
  }, [targetSection]);
  return (
    <li>
      <Link
        href={path}
        className="font-medium"
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick(`/${path}`, name);
          scrollToSection(name);
        }}
      >
        {name}
      </Link>
    </li>
  );
}
