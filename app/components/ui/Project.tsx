import Image, { StaticImageData } from 'next/image';

import Link from "next/link";
interface TProject {
  link: string;
  image: string | StaticImageData;
  title: string;
  tag: string;
}

export default function Project({ link, image, title, tag }: TProject) {
  return (
    <Link
      href={link}
      target="_blank"
      className="p-2 bg-white rounded-lg space-y-6"
    >
      <figure className="overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          className="hover:scale-105 duration-500"
        />
      </figure>
      <div className="px-4 pb-4 flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between">
        <h3 className="text-[25px] font-bold">{title}</h3>
        <div className="bg-[#ebebeb] text-sm px-4 py-1.5 rounded-full font-semibold">
          {tag}
        </div>
      </div>
    </Link>
  );
}
