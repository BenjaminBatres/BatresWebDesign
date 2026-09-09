import { FcSearch } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import LookProfessionalIcon from "../../assets/Look-Professional.svg";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function Values() {
  const values = [
    {
      image: LookProfessionalIcon,
      title: "Look Professional",
      description:
        "Make a strong first impression when potential customers find your business online.",
    },
    {
      icon: <FcSearch className="text-4xl" />,
      title: "Get Found",
      description:
        "Give customers another way to discover your business through search engines.",
    },
    {
      icon: <FaPhoneAlt className="text-[#ff6584] text-3xl" />,
      title: "Get More Inquiries",
      description:
        "Make it easy for potential customers to call, message, or request a quote.",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {values.map((value, id) => (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: id * 0.15, duration: 0.5 }}
          key={id}
          className="bg-white p-6 rounded-lg space-y-6 sm:nth-[3]:col-span-2 lg:nth-[3]:col-span-1"
        >
          <div className="size-20 bg-[#ebebeb] rounded-full flex justify-center items-center">
            {value?.image ? (
              <Image src={value?.image} alt="" />
            ) : (
              <div>{value?.icon}</div>
            )}
          </div>
          <div className="space-y-3">
            <h3 className="text-[25px]/[120%] font-bold">{value.title}</h3>
            <p>{value.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
