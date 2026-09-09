import { TbMailFilled } from "react-icons/tb";
import SectionHeaderSecondary from "../ui/SectionHeaderSecondary";
import Form from "./Form";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-16 sm:py-20">
      <div className="max-w-300 mx-auto grid xl:grid-cols-2 gap-12 xl:gap-6">
        <div className="space-y-8">
          <SectionHeaderSecondary
            title="Get in touch"
            subtitle="Got a project in Mind? Let's get in touch."
          />
          <div className="flex items-center gap-3">
            <div className="size-15 flex justify-center items-center bg-[#ebebeb] rounded-full">
              <TbMailFilled className="text-2xl" />
            </div>
            <Link
              href={"mailto:me@benjaminbatres.dev"}
              className="text-lg text-black! font-semibold text-[15px]"
            >
              me@benjaminbatres.dev
            </Link>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
}
