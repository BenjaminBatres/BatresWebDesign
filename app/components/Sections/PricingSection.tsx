import SectionHeader from "../ui/SectionHeader";
import { RiComputerLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { FaWrench } from "react-icons/fa";
import PricingPlan from "../ui/PricingPlan";

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, id) => (
            <PricingPlan
              key={id}
              id={id}
              icon={plan.icon}
              name={plan.name}
              buttonText={plan.buttonText}
              description={plan.description}
              period={plan.period}
              plan={plan.features}
              price={plan.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
