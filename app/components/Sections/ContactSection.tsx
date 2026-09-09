import SectionHeaderSecondary from "../ui/SectionHeaderSecondary";
import Form from "./Form";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-16 sm:py-20">
      <div className="max-w-300 mx-auto grid xl:grid-cols-2 gap-12 xl:gap-6">
        <div className="space-y-8">
          <SectionHeaderSecondary
            title="Get in touch"
            subtitle="Got a project in Mind? Let's get in touch."
          />
        </div>
        <Form />
      </div>
    </section>
  );
}
