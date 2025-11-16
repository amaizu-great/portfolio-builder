import Image from 'next/image';
import { PortfolioData, stackType } from '@/types/portfolio';


const EachSkill = ({ stack }: { stack:stackType}) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Image src={stack.icon.url} alt={`${stack.name}`} width={50} height={50} className="size-[50px]" />
      <p>{stack.name}</p>
    </div>
  );
};

const Skills = ({portfolio, className}: {portfolio: PortfolioData, className?: string}) => {
  return (  
    <section className={`flex flex-col gap-10 py-16 px-[4%] items-center ${className}`}>  
      <button className="outline-none text-[12px] px-7 py-1 rounded-full bg-gray-300 w-fit">
        Skills
      </button>
      
      <div className="flex w-[90%] justify-around gap-16 flex-wrap">
       {portfolio.profile.stacks?.map((stack, idx) =>  <EachSkill key={idx} stack={stack} /> )}
      </div>

    </section>
  )
}

export default Skills
