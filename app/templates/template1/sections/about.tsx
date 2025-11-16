import { PortfolioData } from '@/types/portfolio';

const About = ({portfolio, className}: {portfolio: PortfolioData, className?: string}) => {
    
  const ImageComponent = () => {
    return (
      <section className="flex h-70 min-w-65 items-center justify-center md:h-80 md:min-w-70 bg-gray-200 relative ">
        <div className="h-70 min-w-60 border-8 border-white -mt-10 md:h-80 min-md-w-70" style={{background:`url(${portfolio.about?.image?.url ?? portfolio.profile.profileImage.url})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center"}}/>
      </section>
    )
  }

  return (
    <section id='about' className={`flex flex-col gap-10 py-16 px-[4%] items-center ${className}`}>
      <button className="outline-none text-[12px] px-7 py-1 rounded-full bg-gray-300 w-fit">
        About Me
      </button>

      <div className='flex flex-col w-full items-center justify-around gap-10 text-[14px] md:flex-row' >
        {portfolio.about?.image?.url && <ImageComponent />}

        <div className='flex flex-col gap-4 max-w-150'>
          <h1 className="text-[22px] font-bold leading-none text-[#030712] md:text-[25px] lg:text-[30px]">
            Curious about me? Here you have it:
          </h1>

          <p className='text-Grey2'>{portfolio.about?.bio}</p>
        </div>
      </div>

    </section>
  )
}

export default About
