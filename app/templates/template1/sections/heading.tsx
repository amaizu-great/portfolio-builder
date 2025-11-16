
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { Github, MapPin } from "lucide-react";
import { PortfolioData } from "@/types/portfolio";

const HeadingSection = ({ portfolio }:{ portfolio: PortfolioData }) => {
  const ImageComponent = () => {
    return (
      <section className="flex h-70 min-w-65 items-center justify-center md:h-80 md:min-w-70 bg-gray-200 relative ">
        <div className="h-70 min-w-60 border-8 border-white -mt-10 md:h-80 min-md-w-70" style={{background:`url(${portfolio.profile.profileImage.url})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center"}}/>
      </section>
    )
  }
  return (
    <section className="flex flex-col items-center justify-around gap-10 px-[4%] py-16 text-[14px] md:flex-row-reverse">
      {portfolio.profile?.profileImage?.url && <ImageComponent />}

      <div className="flex flex-col gap-10 max-w-[600px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-[30px] font-bold leading-none text-[#030712] md:text-[35px] lg:text-[40px]">Hi, I Am {portfolio.profile.firstName} 👋</h1>
          <p className="leading-normal text-Grey2">{portfolio.profile.description}</p>
        </div>

        <p className="flex gap-2 text-Grey2">
          <MapPin size={20} /> 
          {portfolio?.profile?.location ?? ""}
        </p>

        <div className="flex items-center gap-4 text-Grey2">
          {portfolio.profile.socials?.github && <Link target="_blank" rel="noopener noreferrer" href={portfolio.profile.socials.github}><Github size={25}/></Link>}
          {portfolio.profile.socials?.x && <Link target="_blank" rel="noopener noreferrer" href={portfolio.profile.socials.x}><FaXTwitter size={25}/></Link>}
          {portfolio.profile.socials?.linkedin && <Link target="_blank" rel="noopener noreferrer" href={portfolio.profile.socials.linkedin}><CiLinkedin size={30}/></Link>}
        </div>
      </div>
    </section>
  )
}

export default HeadingSection