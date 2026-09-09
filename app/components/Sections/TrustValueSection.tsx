import * as motion from "motion/react-client";
import Values from "../ui/Values";

export default function TrustValueSection() {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-300 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[36px] sm:text-[39px] lg:text-[49px] leading-[120%] font-bold text-center mb-6"
        >
          Why Your Business Needs a Website
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="lg:text-lg text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          Your customers are searching for your business online. Give them a
          professional place to learn about your services, see your work, and
          contact you.
        </motion.p>
        <Values />
      </div>
    </section>
  );
}
