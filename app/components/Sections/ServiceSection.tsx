import { IoIosGlobe } from "react-icons/io";
import SectionHeader from "../ui/SectionHeader";
import ServiceDetails from "../ui/ServiceDetails";
import { RiTargetFill, RiToolsFill } from "react-icons/ri";
import { GrPowerCycle } from "react-icons/gr";
const services = [
    {
      icon: <IoIosGlobe className="text-blue-400" />,
      title: "Business Websites",
      description:
        "Professional websites that give your business a strong online presence and make it easy for customers to learn about your services and get in touch.",
    },
    {
      icon: <RiTargetFill className="text-[#ff6584]" />,
      title: "Landing Pages",
      description:
        "Focused, high-converting pages designed around a specific service, promotion, or goal.",
    },
    {
      icon: <GrPowerCycle className="text-violet-500" />,
      title: "Website Redesigns",
      description:
        "Give your outdated website a fresh, modern look with improved usability, mobile responsiveness, and a better experience for your customers.",
    },
    {
      icon: <RiToolsFill className="text-[#6e6c7f]" />,
      title: "Website Maintenance",
      description:
        "Keep your website running smoothly with ongoing updates, content changes, fixes, and technical support.",
    },
  ];
export default function ServiceSection() {
  return (
    <section id="services" className="py-16 md:py-20 px-6">
      <div className="max-w-189 lg:max-w-300 mx-auto space-y-12 md:space-y-16">
        <SectionHeader
          title="Services"
          subtitle="Websites Built Around Your Business"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, id) => (
            <ServiceDetails key={id} id={id} title={service.title} description={service.description} icon={service.icon}/>
          ))}
        </div>
      </div>
    </section>
  );
}
