import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center justify-center px-8 xl:px-0 xl:h-[90px]">
      <div className="container mx:auto">
        <div className="flex flex-col lg:flex-row justify-between items-center py-8">
          <Link href={'/'}>
            <h2 className="h2 text-3xl">{"<Huzaif Malik />"}</h2>
          </Link>
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
