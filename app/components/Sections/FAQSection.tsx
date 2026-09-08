import Link from "next/link";
import FAQ from "../ui/FAQ";
import faqs from "@/app/data/faq-info";
export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-20 px-6">
      <div className="max-w-300 mx-auto grid xl:grid-cols-2 gap-12 xl:gap-6">
        <div className="space-y-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">FAQ</h3>
            <div className="w-6 h-0.5 bg-[#d7e6fe]" />
          </div>
          <h2 className="text-[39px] md:text-[49px] leading-[120%] font-bold">
            Questions / Answers
          </h2>
          <Link
            href={"#contact"}
            className="px-6 py-3 bg-black rounded-full text-white font-semibold"
          >
            Still have questions?
          </Link>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, id) => (
            <FAQ key={id} title={faq.title} description={faq.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
