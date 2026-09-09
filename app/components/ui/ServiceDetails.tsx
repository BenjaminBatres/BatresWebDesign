import * as motion from "motion/react-client";
import { ReactElement } from "react";

interface IDetails {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
}

export default function ServiceDetails({
  icon,
  description,
  title,
  id,
}: IDetails) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: id * 0.15, duration: 0.5 }}
      className="bg-white p-6 rounded-lg space-y-6"
    >
      <div className="size-20 bg-[#ebebeb] rounded-full flex justify-center items-center">
        <div className="text-4xl">{icon}</div>
      </div>
      <div className="space-y-3">
        <h3 className="text-xl md:text-[25px]/[120%] font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}
