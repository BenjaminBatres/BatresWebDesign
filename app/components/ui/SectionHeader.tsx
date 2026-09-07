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
      <h2 className="text-[39px] md:text-[49px] leading-[120%] font-bold text-center">
        {subtitle}
      </h2>
    </div>
  );
}
