import Link from "next/link";
import * as motion from "motion/react-client";
export default function CTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="p-6 md:p-10 bg-[#151424] rounded-2xl flex flex-col items-center gap-8"
    >
      <div className="space-y-6">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center gap-2"
          >
            <h3 className="text-white font-semibold md:text-xl">Get Started</h3>
            <div className="w-6 h-0.5 bg-white" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-[39px] md:text-[49px] leading-[120%] tracking-[-0.5px] text-white font-semibold text-center max-w-200"
          >
            Ready to bring your vision to life? Get in touch today!
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-white! text-center md:text-lg"
        >
          Let's build a website your business can be proud of.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          href={"/contact"}
          className="bg-white rounded-full px-6 py-3 text-[15px] tracking-[-0.5px] font-semibold"
        >
          Get in touch
        </Link>
      </motion.div>
    </motion.div>
  );
}
