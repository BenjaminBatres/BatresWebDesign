import Link from "next/link";
import FAQ from "../ui/FAQ";
import faqs from "@/app/data/faq-info";
import SectionHeaderSecondary from "../ui/SectionHeaderSecondary";
export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:pt-20 md:pb-40 px-6">
      <div className="max-w-300 mx-auto grid xl:grid-cols-2 gap-12 xl:gap-6">
        <div className="space-y-8">
          <SectionHeaderSecondary title="FAQ" subtitle="Questions / Answers"/>
          <Link
            href={"/contact"}
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
