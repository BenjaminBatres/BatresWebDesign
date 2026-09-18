import Image, { StaticImageData } from "next/image";
import * as motion from "motion/react-client";
interface TProject {
  link: string;
  image: string | StaticImageData;
  title: string;
  tag: string;
  description: string;
}

export default function Project({
  link,
  image,
  title,
  tag,
  description,
}: TProject) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.2, duration: 0.7 }}
      href={link}
      target="_blank"
      className="p-2 bg-white rounded-lg space-y-6"
    >
      <figure className="overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          loading="eager"
          className="hover:scale-105 duration-500"
        />
      </figure>
      <div className="px-4 pb-4 space-y-3">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between">
          <h3 className="text-[25px] font-bold">{title}</h3>
          <div className="bg-[#ebebeb] text-sm px-4 py-1.5 rounded-full font-semibold">
            {tag}
          </div>
        </div>
        <p className="text-sm text-center md:text-left">{description}</p>
      </div>
    </motion.a>
  );
}
