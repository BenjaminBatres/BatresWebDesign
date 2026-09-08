import { FaDollarSign, FaRegHandshake } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { PiStarFour } from "react-icons/pi";
import ServiceDetails from "../ui/ServiceDetails";

export default function WhyWorkWithMeSection() {
  const features = [
    {
      icon: <FaRegHandshake />,
      title: "Personal Service ",
      description: "Work directly with the person building your website.",
    },
    {
      icon: <FaDollarSign className="text-green-500" />,
      title: "Affordable Pricing",
      description: "Professional websites without the agency price",
    },
    {
      icon: <PiStarFour className="text-violet-500" />,
      title: "Modern Design",
      description:
        "Clean, responsive websites built to make a strong first impression.",
    },
    {
      icon: <GoGear className="text-[#6e6c7f]" />,
      title: "Technical Support",
      description:
        "I handle the technical sidd so you can focus on your business.",
    },
  ];
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-300 mx-auto space-y-12 md:space-y-16">
        <h2 className="text-[36px] sm:text-[39px] lg:text-[49px] leading-[120%] font-bold text-center mb-6">
          Why Work With Me
        </h2>
        <p className="lg:text-lg text-center max-w-lg mx-auto mb-12 lg:mb-16">
          A better website shouldn't come with unnecessary complexity or an
          agency-sized price tag.
        </p>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, id) => (
            <ServiceDetails
              key={id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
