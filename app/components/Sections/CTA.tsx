import Link from "next/link";

export default function CTA() {
  return (
    <div className="p-6 md:p-10 bg-[#151424] rounded-2xl flex flex-col items-center gap-8">
      <div className="space-y-6">
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-white font-semibold md:text-xl">Get Started</h3>
            <div className="w-6 h-0.5 bg-white" />
          </div>
          <h2 className="text-[39px] md:text-[49px] leading-[120%] tracking-[-0.5px] text-white font-semibold text-center max-w-200">
            Ready to bring your vision to life? Get in touch today!
          </h2>
        </div>
        <p className="text-white! text-center md:text-lg">
          Let's build a website your business can be proud of.
        </p>
      </div>
      <Link
        href={"/contact"}
        className="bg-white rounded-full px-6 py-3 text-[15px] tracking-[-0.5px] font-semibold"
      >
        Get in touch
      </Link>
    </div>
  );
}
