import Link from 'next/link';
import Sidebar from './sidebar';
import AddPortfolioState from '@/zustand/non-persist/addPortfolio';


const NavBar = () => {
  const {profile} = AddPortfolioState()

  return (
    <header className='flex justify-between items-center w-full p-4 border-b'>
      <h1 className="font-semibold text-[16px] text-[#030712]">
        {`<${profile.firstName ? profile.firstName : "Your Name"} />`}
      </h1>

      <Sidebar />
    </header>
  )
}

export default NavBar