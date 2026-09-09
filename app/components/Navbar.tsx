import Link from "next/link";
import Menu from "./Menu";
import Links from "./ui/Links";

export default function Navbar() {
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
      name: "Faq",
    },
  ];
  return (
    <header className="fixed px-6 w-full bg-white z-50">
      <nav className="flex justify-between items-center max-w-300 mx-auto h-20">
        <h1 className="text-2xl sm:text-3xl font-bold">
          <Link href={'/'}>
          BatresWebDesign
          </Link>
        </h1>

        <ul className="hidden lg:flex gap-8">
          {links.map((link, id) => (
            <Links key={id} path={link.path} name={link.name} />
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <Link
            href={"/contact"}
            className="hidden sm:block px-6 py-2 bg-black text-white rounded-full font-semibold hover:bg-black/90 duration-300"
          >
            Contact
          </Link>
          <Menu links={links} />
        </div>
      </nav>
    </header>
  );
}
