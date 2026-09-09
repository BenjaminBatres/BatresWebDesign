import Image from "next/image";
import ContactHeroImg from "../../assets/undraw_building-websites_k2zp.svg";
import * as motion from "motion/react-client";
export default function ContactDetailsSection() {
  return (
    <section className="pt-40 xl:pt-50 pb-16 xl:pb-20 px-6">
      <div className="max-w-300 mx-auto flex flex-col items-center gap-16">
        <div className="space-y-6 ">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[49px] leading-[120%] sm:text-[55px] lg:text-7xl text-center font-bold xl:max-w-4xl mx-auto tracking-[-3px]"
          >
            Let's build your website together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:text-lg text-center max-w-xl lg:max-w-3xl mx-auto"
          >
            Have a project in mind or just want to say hello? I’d love to hear
            from you! Whether it’s a collaboration, a question, or feedback,
            drop me a message, and let’s create something extraordinary
            together.
          </motion.p>
        </div>
        <motion.figure
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Image src={ContactHeroImg} alt="hero img" loading="eager" />
        </motion.figure>
      </div>
    </section>
  );
}
