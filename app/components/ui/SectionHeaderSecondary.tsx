import React from "react";
interface IProps {
    title: string
    subtitle: string
}
export default function SectionHeaderSecondary({subtitle, title}:IProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="w-6 h-0.5 bg-[#d7e6fe]" />
      </div>
      <h2 className="text-[39px] md:text-[49px] leading-[120%] font-bold">
        {subtitle}
      </h2>
    </>
  );
}
