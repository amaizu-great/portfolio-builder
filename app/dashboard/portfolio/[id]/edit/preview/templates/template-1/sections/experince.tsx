import Link from 'next/link';
import { experienceType } from '@/types/portfolio';
import { formatMonthYear } from '@/functions/formatMonthYear';
import EditPortfolioState from '@/zustand/non-persist/editPortfolio';

const sortExperiences = (experiences: experienceType[]) => {
  return experiences.sort((a, b) => {
    const aTo = a.duration.to === "present" ? new Date() : new Date(a.duration.to);
    const bTo = b.duration.to === "present" ? new Date() : new Date(b.duration.to);

    // Sort by end date first (latest at top)
    if (bTo.getTime() !== aTo.getTime()) {
      return bTo.getTime() - aTo.getTime();
    }

    // If end dates are equal, sort by start date
    const aFrom = new Date(a.duration.from);
    const bFrom = new Date(b.duration.from);

    return bFrom.getTime() - aFrom.getTime();
  });
}

const EachExperience = ({className, experience}: {experience: experienceType, className?: string}) => {
  return (
    <div className={`flex gap-4 w-full p-4 justify-around items-center ${className === "bg-gray-100" ? "bg-white" : "bg-gray-100"}`}>
      {experience.link ? 
        <Link href={experience.link} target="_blank" rel="noopener noreferrer">
          <h1 className='text-[16px] font-bold font-tenorsans text-Grey2'>{experience.company}</h1>
        </Link> 
        : 
        <h1 className='text-[16px] font-bold font-tenorsans text-Grey2'>{experience.company}</h1>
      }

      <div className='flex flex-col sm:items-center'>
        <h3 className='font-dmsans font-medium text-[18px]'>{experience.role}</h3>

        <ul className="ml-6 list-disc [&>li]:mt-2 text-Grey2 text-[12px]">
          {experience.responsibilities?.map((res, idx) => (
            <li key={idx}>{res}</li>
          ))}
        </ul>
      </div>

      <div className='flex flex-nowrap gap-4 h-full text-Grey2 text-[10px]'>
        {experience?.duration?.from && <p>{formatMonthYear(new Date(experience.duration.from))}</p>} 
         - 
        {experience?.duration?.to && <p>{experience.duration.to === "present" ? "Present" : formatMonthYear(new Date(experience.duration.to))}</p>}
      </div>
    </div>
  )
}

const Experience = ({className}: {className?: string}) => {
  const { experience } = EditPortfolioState()

  return (
    <section id='experience' className={`flex flex-col gap-4 py-10 px-4 sm:items-center ${className}`}> 
      <div className="flex flex-col gap-2 items-center text-center">
        <button className="outline-none text-[10px] px-5 py-1 rounded-full bg-gray-300 w-fit">
          Experience
        </button>

        <p className='text-[12px]'>Here is a quick summary of my most recent experiences</p>
      </div>

      <div className='flex flex-col gap-4 w-full items-center'>
        {sortExperiences(experience).map((exp, index) => (
          <EachExperience key={index} className={className} experience={exp} />
        ))}
      </div>
    </section>
  )
}

export default Experience
