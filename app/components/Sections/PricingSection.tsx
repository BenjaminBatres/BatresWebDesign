import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";
import { RiComputerLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { FaWrench } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export default function PricingSection() {
  const pricingPlans = [
    {
      icon: <RiComputerLine className="text-4xl" />,
      name: "Simple Website",
      description:
        "A professional website built to establish your online presence.",
      price: "$400",
      period: "one-time",
      features: [
        "Up to 3 pages",
        "Next.js + React",
        "Responsive design",
        "Mobile, tablet and desktop",
        "Contact form",
        "Basic SEO setup",
        "Website deployment",
        "Basic performance optimization",
        "1 revision rounds",
        "7 days of post-launch support",
      ],
      buttonText: "Get Started",
    },
    {
      icon: <IoPerson className="text-3xl" />,
      name: "Managed Website",
      description:
        "Let me handle the technical side of your website so you don't have to.",
      price: "$35",
      period: "per month",
      popular: true,
      features: [
        "Website hosting management",
        "Domain connection assistance",
        "SSL / HTTPS",
        "Website deployment",
        "Website monitoring",
        "Minor content updates",
        "Minor bug fixes",
        "Basic performance checks",
        "Up to 1 hour of maintenance/month",
        "Technical support",
      ],
      buttonText: "Keep My Website Running",
    },
    {
      icon: <FaWrench className="text-3xl" />,
      name: "One-Time Support",
      description: "Need a few changes after your website is live. No problem.",
      price: "$75",
      period: "per support package",
      features: [
        "Up to 2 hours of support",
        "Minor text updates",
        "Image replacements",
        "Small styling changes",
        "Minor layout adjustments",
        "Minor bug fixes",
        "Valid for 30 days",
      ],
      buttonText: "Request Support",
      note: "Major changes and new features are quoted separately.",
    },
  ];
  return (
    <section id="pricing" className="py-16 md:py-20 px-6">
      <div className="max-w-300 mx-auto space-y-12 md:space-y-16">
        <SectionHeader
          title="Pricing"
          subtitle="Get Started Without Guessing The Cost"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, id) => (
            <div
              key={id}
              className="bg-white pt-8 px-6 pb-6 rounded-2xl border border-[#dfdfdf] space-y-8 relative md:hover:scale-105 duration-300 transition-all"
            >
              {id === 1 && (
                <div className="absolute -top-3 left-1/3 xl:left-34 px-3 py-1 bg-black rounded-full text-white text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="flex flex-col items-center">
                <div className="mb-4">{plan.icon}</div>
                <h2 className="text-2xl font-bold text-center mb-4">
                  {plan.name}
                </h2>
                <p className="text-center text-sm mb-6">{plan.description}</p>
                <h3 className="text-[30px] font-bold mb-2">{plan.price}</h3>
                <p className="text-sm mb-4">/ {plan.period}</p>
                <Link
                  href={"#contact"}
                  className="bg-black text-white px-6 py-3 rounded-lg font-semibold text-sm w-full text-center"
                >
                  {plan.buttonText}
                </Link>
              </div>
              {/* Features */}
              <div className="space-y-4">
                <p className="text-black! font-semibold">What's Included</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, id) => (
                    <div key={id} className="flex items-center gap-2">
                      <FaCheck />
                      <p className="text-sm">{feature}</p>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
