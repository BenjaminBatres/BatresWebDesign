import Link from "next/link";

export default function notFound() {
  return (
    <div className="pt-40 xl:pt-50 pb-16 md:pb-32 xl:pb-40 px-6 flex flex-col items-center gap-8">
      <div className="space-y-6">
        <h1 className="text-[49px] md:text-[55px] lg:text-7xl font-bold text-center leading-[120%] tracking-[-3px] max-w-3xl">
          404
          <br />
          This place doesn't exist.
        </h1>
        <p className="max-w-155 mx-auto text-center">
          Don’t worry—it happens to the best of us. Let’s get you back on track.
          Use the button below to head back to the homepage.
        </p>
      </div>
      <Link href={'/'} className="bg-black px-6 py-3 rounded-full text-white font-medium text-[15px]">
      Go home
      </Link>
    </div>
  );
}
