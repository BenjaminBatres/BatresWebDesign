import Link from "next/link";
import { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";

interface IPlan {
  id: number;
  icon: string | ReactNode;
  name: string;
  description: string;
  price: string;
  period: string;
  buttonText: string;
  plan: string[];
}

export default function PricingPlan({
  id,
  icon,
  name,
  description,
  price,
  period,
  buttonText,
  plan,
}: IPlan) {
  return (
    <div className="bg-white pt-8 px-6 pb-6 rounded-2xl border border-[#dfdfdf] space-y-8 relative md:hover:scale-105 duration-300 transition-all">
      {id === 1 && (
        <div className="absolute -top-3 left-1/3 xl:left-34 px-3 py-1 bg-black rounded-full text-white text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="flex flex-col items-center">
        <div className="mb-4">{icon}</div>
        <h2 className="text-2xl font-bold text-center mb-4">{name}</h2>
        <p className="text-center text-sm mb-6">{description}</p>
        <h3 className="text-[30px] font-bold mb-2">{price}</h3>
        <p className="text-sm mb-4">/ {period}</p>
        <Link
          href={"/contact"}
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold text-sm w-full text-center"
        >
          {buttonText}
        </Link>
      </div>
      {/* Features */}
      <div className="space-y-4">
        <p className="text-black! font-semibold">What's Included</p>
        <ul className="space-y-2">
          {plan.map((plan, id) => (
            <div key={id} className="flex items-center gap-2">
              <FaCheck />
              <p className="text-sm">{plan}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
