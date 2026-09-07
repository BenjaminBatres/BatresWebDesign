import { FcSearch } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import LookProfessionalIcon from "../../assets/Look-Professional.svg";

export default function TrustValueSection() {
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
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-300 mx-auto">
        <h2 className="text-[36px] sm:text-[39px] lg:text-[49px] leading-[120%] font-bold text-center mb-6">
          Why Your Business Needs a Website
        </h2>
        <p className="lg:text-lg text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          Your customers are searching for your business online. Give them a
          professional place to learn about your services, see your work, and
          contact you.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, id) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
