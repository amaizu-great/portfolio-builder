import AddPortfolioState from '@/zustand/non-persist/addPortfolio';

const About = ({className}: {className?: string}) => {
  const { profile, about } = AddPortfolioState()
    
  const ImageComponent = () => {
    return (
      <section className="flex h-50 min-w-40 items-center justify-center bg-gray-200 relative ">
        <div className="h-50 min-w-35 border-2 border-white -mt-4" style={{background:`url(${about?.image?.url ?? profile.profileImage.url ?? ""})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center"}}/>
      </section>
    )
  }

  return (
    <section id='about' className={`flex flex-col gap-4 py-10 px-4 items-center ${className}`}>
      <button className="outline-none text-[10px] px-5 py-1 rounded-full bg-gray-300 w-fit">
        About Me
      </button>

      <div className='flex flex-col w-full items-center justify-around gap-10 text-[14px] md:flex-row' >
        {about?.image?.url && <ImageComponent />}

        <div className='flex flex-col gap-2 max-w-150'>
          <h1 className="text-[16px] font-bold leading-none text-[#030712] ">
            Curious about me? Here you have it:
          </h1>

          <p className='text-Grey2 text-[12px]'>{about?.bio}</p>
        </div>
      </div>

    </section>
  )
}

export default About
