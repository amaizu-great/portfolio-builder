import Link from 'next/link';
import Sidebar from './sidebar';
import { PortfolioData } from '@/types/portfolio';


const NavBar = ({ portfolio }:{ portfolio: PortfolioData }) => {
  return (
    <header className='flex justify-between items-center w-full px-[4%] py-4 md:py-6 border-b'>
      <h1 className="font-semibold text-[20px] max-md:text-[18px] max-sm:text-[16px] text-[#030712]">
        {`<${portfolio.profile.firstName} />`}
      </h1>

      <nav className='sm:flex gap-2 hidden justify-around text-[14px] md: w-[45%] lg:w-[30%]'>
        {portfolio.about && <Link href={`/portfolio/${portfolio.id}/#about`}>About</Link>}
        {(portfolio.projects && portfolio.projects.length > 0) && <Link href={`/portfolio/${portfolio.id}/#projects`}>Projects</Link>}
        {(portfolio.experience && portfolio.experience.length > 0) && <Link href={`/portfolio/${portfolio.id}/#experience`}>Experience</Link>}
        {(portfolio.testimonials && portfolio.testimonials.length > 0) && <Link href={`/portfolio/${portfolio.id}/#testimonials`}>Testimonials</Link>}
        <Link href={`/portfolio/${portfolio.id}/#contact`}>Contact</Link>
      </nav>

      <Sidebar portfolio={portfolio}/>
    </header>
  )
}

export default NavBar