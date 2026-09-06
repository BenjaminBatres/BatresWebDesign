import Link from "next/link";

interface TLink {
  path: string;
  name: string;
}

export default function Links({ path, name }: TLink) {
  return (
    <li>
      <Link href={path} className="font-medium">
        {name}
      </Link>
    </li>
  );
}
