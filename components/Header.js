import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

import { BsArrowRight } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center justify-center px-8 xl:px-0 xl:h-[90px]">
      <div className="container mx:auto">
        <div className="flex flex-col lg:flex-row justify-between items-center py-8">
          <Link href={'/'}>
            <h2 className="h2 text-3xl">{"<Huzaif Malik />"}</h2>
          </Link>
          <Socials />
        </div>
      </div>
      <a
        href={'/resume.pdf'}
        download="Huzaif-Malik"
        target="_blank"
        rel="noreferrer"
        className="ml-8 lg:flex hidden btn rounded-full h-[45px] border border-white/50 max-w-[170px] px-5 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
      >
        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-[14px]">Get Resume</span>
        <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
      </a>
    </header>
  );
};

export default Header;
