import * as motion from "motion/react-client";
interface IProps {
  title: string;
  subtitle: string;
}
export default function SectionHeaderSecondary({ subtitle, title }: IProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="w-6 h-0.5 bg-[#d7e6fe]" />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-[39px] md:text-[49px] leading-[120%] font-bold"
      >
        {subtitle}
      </motion.h2>
    </>
  );
}
