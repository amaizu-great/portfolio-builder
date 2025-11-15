import { PortfolioData } from '@/types/portfolio';

const Skills = ({portfolio, className}: {portfolio: PortfolioData, className?: string}) => {
  return (  
    <section className={`flex flex-col gap-10 py-16 px-[4%] items-center ${className}`}>  
      <button className="outline-none text-[12px] px-7 py-1 rounded-full bg-gray-300 w-fit">
        Skills
      </button>


    </section>
  )
}

export default Skills
