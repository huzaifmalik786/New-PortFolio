import Link from 'next/link';
import { RiInstagramLine, RiLinkedinLine, RiGithubLine, RiDiscordLine, RiTwitterLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-6 text-lg'>
      <Link href={'https://www.linkedin.com/in/huzaif-malik-8ab2b5232/'} className='hover:text-accent translate-all duration-300 text-2xl'><RiLinkedinLine /></Link>
      <Link href={'https://github.com/huzaifmalik786'} className='hover:text-accent translate-all duration-300 text-2xl'><RiGithubLine /></Link>
      <Link href={'https://www.instagram.com/huzaifmalik7860/'} className='hover:text-accent translate-all duration-300 text-2xl'><RiInstagramLine /></Link>
      <Link href={'https://discord.com/channels/1064984109744660561'} className='hover:text-accent translate-all duration-300 text-2xl'><RiDiscordLine /></Link>
      <Link href={'/'} className='hover:text-accent translate-all duration-300 text-2xl'><RiTwitterLine/></Link>
    </div>
  );
};

export default Socials;
