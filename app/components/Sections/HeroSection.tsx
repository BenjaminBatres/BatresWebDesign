import Link from "next/link";
import Image from "next/image";
import HeroImg from "../../assets/undraw_designer_efwz.svg";
import * as motion from "motion/react-client";
export default function HeroSection() {
  const links = [
    {
      path: "#projects",
      name: "View My Work",
      theme: "bg-white text-black border",
    },
    {
      path: "/contact",
      name: "Get a Free Quote",
      theme: "bg-black text-white hover:bg-black/90 duration-300",
    },
  ];

  return (
    <section className="pt-40 pb-10 sm:pb-30 px-6">
      <div className="max-w-300 mx-auto flex flex-col items-center gap-10">
        <div className="space-y-5">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-7xl text-center font-bold max-w-xl lg:max-w-4xl mx-auto"
          >
            Modern Websites Built for Small Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:text-lg text-center max-w-md lg:max-w-2xl mx-auto"
          >
            I build professional, mobile-friendly websites that help local
            businesses look credible online and turn visitors into customers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            {links.map((link, id) => (
              <Link
                href={link.path}
                key={id}
                className={`px-6 py-3 font-medium ${link.theme} rounded-full`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        </div>
        <motion.figure
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Image
            src={HeroImg}
            alt="hero img"
            loading="eager"
            className="w-150"
          />
        </motion.figure>
      </div>
    </section>
  );
}
