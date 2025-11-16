
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { Github, MapPin } from "lucide-react";
import AddPortfolioState from "@/zustand/non-persist/addPortfolio";

const HeadingSection = ({className}: {className?: string}) => {
  const { profile } = AddPortfolioState()
  const ImageComponent = () => {
    return (
      <section className="flex h-50 min-w-40 items-center justify-center bg-gray-200 relative ">
        <div className="h-50 min-w-35 border-2 border-white -mt-4" style={{background:`url(${profile.profileImage.url})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center"}}/>
      </section>
    )
  }
  return (
    <section className="flex flex-row-reverse items-center justify-around gap-5 px-4 pt-12 pb-10 text-[14px]">
      {profile.profileImage?.url && <ImageComponent />}

      <div className="flex flex-col gap-4 max-w-[600px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-[20px] font-bold leading-none text-[#030712] ">Hi, I Am {profile.firstName} 👋</h1>
          <p className="leading-normal text-Grey2">{profile.description}</p>
        </div>

        { profile?.location && 
          <p className="flex gap-2 text-Grey2 text-[12px]">
            <MapPin size={20} /> 
            {profile?.location}
          </p>
        }

        {(profile.socials?.github || profile.socials?.x || profile.socials?.linkedin) && 
          <div className="flex items-center gap-4 text-Grey2">
            {profile.socials?.github && <Link target="_blank" rel="noopener noreferrer" href={profile.socials.github}><Github size={20}/></Link>}
            {profile.socials?.x && <Link target="_blank" rel="noopener noreferrer" href={profile.socials.x}><FaXTwitter size={20}/></Link>}
            {profile.socials?.linkedin && <Link target="_blank" rel="noopener noreferrer" href={profile.socials.linkedin}><CiLinkedin size={25}/></Link>}
          </div>
        }
      </div>
    </section>
  )
}

export default HeadingSection