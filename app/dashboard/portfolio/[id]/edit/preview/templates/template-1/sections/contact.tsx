
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { Github, Mail, PhoneIncoming } from "lucide-react";
import EditPortfolioState from "@/zustand/non-persist/editPortfolio";

const Contact = ({className}: {className?: string}) => {
  const { profile } = EditPortfolioState()

  return (
    <section id="contact" className={`flex flex-col gap-4 py-10 px-4 items-center ${className}`}>
      <div className="flex flex-col gap-2 items-center text-center max-w-[500px]">
        <button className="outline-none text-[10px] px-5 py-1 rounded-full bg-gray-300 w-fit">
          Get In Touch
        </button>

        <p className="text-[12px] text-gray-600">What is next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.</p>
      </div>

      <div className="flex flex-col gap-2 text-[12px]">
       {profile.phone &&
          <div className="flex gap-2 items-center">
            <PhoneIncoming size={14} />
            <Link href={`tel:${profile.phone}`} className="flex gap-2">
              {profile.phone}
            </Link>
          </div>
        }

        <div className="flex gap-2 items-center">
          <Mail size={14}/>
          <Link href={`mailto:${profile.email}`} className="flex gap-2">
            {profile.email}
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <p className="text-[10px]  text-gray-600">You may also find me on these platforms!</p>

        <div className="flex items-center gap-4 text-gray-600">
          {profile.socials?.github && <Link target="_blank" rel="noopener noreferrer" href={profile.socials.github}><Github size={14}/></Link>}
          {profile.socials?.x && <Link target="_blank" rel="noopener noreferrer" href={profile.socials.x}><FaXTwitter size={14}/></Link>}
          {profile.socials?.linkedin && <Link target="_blank" rel="noopener noreferrer" href={profile.socials.linkedin}><CiLinkedin size={16}/></Link>}
        </div>
      </div>

    </section>
  )
}

export default Contact
