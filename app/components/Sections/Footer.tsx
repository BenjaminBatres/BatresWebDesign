import * as motion from "motion/react-client";
import CTA from "./CTA";
import Links from "../ui/Links";

export default function Footer() {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "#projects",
      name: "Projects",
    },
    {
      path: "#services",
      name: "Services",
    },
    {
      path: "#process",
      name: "Process",
    },
    {
      path: "#pricing",
      name: "Pricing",
    },
    {
      path: "#faq",
      name: "FAQ",
    },
  ];
  return (
    <footer className="pt-16 md:pt-40 pb-6 bg-[#0e0e11] px-6">
      <div className="max-w-300 mx-auto space-y-16 lg:space-y-20">
        <CTA />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex flex-col lg:flex-row gap-8 justify-between "
        >
          <div className="space-y-4">
            <h2 className="text-white/90 text-xl font-semibold">
              BatresWebDesign
            </h2>
            <p className="text-white/90! text-sm max-w-sm">
              Let's build a modern website that helps your business stand out
              and makes it easier for customers to reach you.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold">Links</h3>
            <ul className="flex flex-col md:flex-row gap-3 text-white/90">
              {links.map((link, id) => (
                <Links key={id} name={link.name} path={link.path} />
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-white/90! text-sm"
        >
          © {new Date().getFullYear()} BatresWebDesign. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
