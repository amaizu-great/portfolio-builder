import Image from 'next/image';
import { stackType } from '@/types/portfolio';
import AddPortfolioState from '@/zustand/non-persist/addPortfolio';


const EachSkill = ({ stack }: { stack:stackType}) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      {(stack.icon.url && stack.icon.url!== "") && <Image src={stack.icon.url} alt={`${stack.name}`} width={30} height={30} className="size-8" />}
      <p className='text-[12px]'>{stack.name}</p>
    </div>
  );
};

const Skills = ({className}: {className?: string}) => {
  const { profile } = AddPortfolioState()

  return (  
    <section className={`flex flex-col gap-4 py-10 px-4 items-center ${className}`}>  
      <button className="outline-none text-[10px] px-5 py-1 rounded-full bg-gray-300 w-fit">
        Skills
      </button>
      
      <div className="flex w-[90%] justify-around gap-6 flex-wrap">
       {profile.stacks?.map((stack, idx) =>  <EachSkill key={idx} stack={stack} /> )}
      </div>

    </section>
  )
}

export default Skills
