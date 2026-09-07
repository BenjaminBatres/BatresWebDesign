'use client'
import Link from "next/link";
interface TLink {
  path: string;
  name: string;
  setIsOpen?(boolean: boolean): void;
}

export default function Links({ path, name, setIsOpen }: TLink) {
  return (
    <li>
      <Link href={path} className="font-medium" onClick={() => setIsOpen?.(false)}>
        {name}
      </Link>
    </li>
  );
}
