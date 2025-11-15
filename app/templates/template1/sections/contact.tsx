
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { PortfolioData } from "@/types/portfolio";
import { Github, Mail, PhoneIncoming } from "lucide-react";


const Contact = ({portfolio, className}: {portfolio: PortfolioData, className?: string}) => {
  return (
    <section id="contact" className={`flex flex-col gap-10 py-16 px-[4%] items-center ${className}`}>
      <div className="flex flex-col gap-2 items-center text-center max-w-[500px]">
        <button className="outline-none text-[12px] px-7 py-1 rounded-full bg-gray-300 w-fit">
          Get In Touch
        </button>

        <p className="text-[14px] text-gray-600">What is next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.</p>
      </div>

      <div className="flex flex-col gap-2 text-[14px]">
       {portfolio.profile.phone &&
          <div className="flex gap-2 items-center">
            <PhoneIncoming size={18} />
            <Link href={`tel:${portfolio.profile.phone}`} className="flex gap-2">
              {portfolio.profile.phone}
            </Link>
          </div>
        }

        <div className="flex gap-2 items-center">
          <Mail size={18}/>
          <Link href={`mailto:${portfolio.profile.email}`} className="flex gap-2">
            {portfolio.profile.email}
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <p className="text-[12px]  text-gray-600">You may also find me on these platforms!</p>

        <div className="flex items-center gap-4 text-gray-600">
          {portfolio.profile.socials?.github && <Link target="_blank" rel="noopener noreferrer" href={portfolio.profile.socials.github}><Github size={20}/></Link>}
          {portfolio.profile.socials?.x && <Link target="_blank" rel="noopener noreferrer" href={portfolio.profile.socials.x}><FaXTwitter size={20}/></Link>}
          {portfolio.profile.socials?.linkedin && <Link target="_blank" rel="noopener noreferrer" href={portfolio.profile.socials.linkedin}><CiLinkedin size={30}/></Link>}
        </div>
      </div>

    </section>
  )
}

export default Contact
