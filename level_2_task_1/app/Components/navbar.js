
import Link from "next/link";
import Image from "next/image";
import Profile from "@/public/images/Avatar.png";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  return (
    <section className="w-full lg:w-full absolute h-fit py-2 lg:py-8 px-5 lg:px-40 flex justify-between items-center">
      <h1 className=" text-lg lg:text-2xl font-bold text-slate-900">Naukri</h1>
      <div className="flex items-center">
        <div className=" hidden lg:flex gap-8 items-center">
          <Link href="/" className="">
            Home
          </Link>
          <Link href="#">Jobs</Link>
          <Link
            href="#"
            className="px-6 border rounded-full border-slate-900 py-1"
          >
            About
          </Link>
        </div>
        <Link
          href="/signup"
          className=" m-1 lg:ml-4 relative px-3 lg:px-10 py-2 lg:py-2 rounded-lg text-sm font-semibold text-slate-200 bg-blue-400 "
        >
          Sign Up
        </Link>
        <div className="w-10 h-10 ml-2 lg:w-16 lg:h-16 bg-slate-600 rounded-full relative overflow-hidden">
          <Image src={Profile} alt="img" />
        </div>

        {/* Small Navbar */}

        <div className="w-5 h-5 ml-2 text-slate-900 lg:hidden">
          <CiMenuFries size="1.5rem" />
        </div>
      </div>
      <div className="bg-slate-200 lg:hidden flex flex-col px-5 justify-center items-center gap-8 absolute w-1/2 h-full top-0 right-0">
        <RxCross2 size="2rem" />
        <Link href="#" className="">
          Home
        </Link>
        <Link href="#">Jobs</Link>
        <Link
          href="#"
          className="px-6 border rounded-full border-slate-900 py-1"
        >
          About
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
