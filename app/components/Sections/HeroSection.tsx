import Link from "next/link";
import Image from "next/image";
import HeroImg from "../../assets/undraw_designer_efwz.svg";
export default function HeroSection() {
  const links = [
    {
      path: '#project',
      name: "View My Work",
      theme: "bg-white text-black border",
    },
    {
      path: '#contact',
      name: "Get a Free Quote",
      theme: "bg-black text-white",
    },
  ];

  return (
    <section className="pt-40 pb-10 sm:pb-30 px-6">
      <div className="max-w-300 mx-auto flex flex-col items-center gap-10">
        <div className="space-y-5">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl text-center font-bold max-w-xl lg:max-w-4xl mx-auto">
            Modern Websites Built for Small Businesses
          </h2>
          <p className="lg:text-lg text-center max-w-md lg:max-w-2xl mx-auto">
            I build professional, mobile-friendly websites that help local
            businesses look credible online and turn visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {links.map((link, id) => (
              <Link
                href={link.path}
                key={id}
                className={`px-6 py-3 font-medium ${link.theme} rounded-full`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <Image src={HeroImg} alt="" className="w-150" />
      </div>
    </section>
  );
}
