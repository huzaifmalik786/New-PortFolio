import Link from 'next/link';
import { RiInstagramLine, RiLinkedinLine, RiGithubLine, RiDiscordLine, RiTwitterLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-6 text-lg'>
      <Link href={'/'} className='hover:text-accent translate-all duration-300 text-2xl'><RiLinkedinLine /></Link>
      <Link href={'/'} className='hover:text-accent translate-all duration-300 text-2xl'><RiGithubLine /></Link>
      <Link href={'/'} className='hover:text-accent translate-all duration-300 text-2xl'><RiInstagramLine /></Link>
      <Link href={'/'} className='hover:text-accent translate-all duration-300 text-2xl'><RiDiscordLine /></Link>
      <Link href={'/'} className='hover:text-accent translate-all duration-300 text-2xl'><RiTwitterLine/></Link>
    </div>
  );
};

export default Socials;
