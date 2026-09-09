import * as motion from "motion/react-client";
interface ISectionHeader {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: ISectionHeader) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-xl text-center font-semibold">{title}</h3>
        <div className="w-6 h-0.5 bg-[#d7e6fe]" />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-[39px] md:text-[49px] leading-[120%] font-bold text-center"
      >
        {subtitle}
      </motion.h2>
    </div>
  );
}
