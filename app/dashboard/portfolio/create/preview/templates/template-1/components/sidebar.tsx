
import { useState } from "react";
import { Logs } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@/hooks/use-media-query";
import AddPortfolioState from "@/zustand/non-persist/addPortfolio";
import { Sheet, SheetTitle, SheetHeader, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const Sidebar = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 639px)")
  const { about, profile, testimonials, projects, experience } = AddPortfolioState()

  const handleRoute = (route: string) => {
    router.push(route)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Logs size={20}/>
      </SheetTrigger>

      <SheetContent aria-description="navbar">
        <SheetHeader  className="border-b">
          <SheetTitle className="font-semibold  text-[16px] text-[#030712]"> 
            {`<${profile.firstName ? profile.firstName : "Your Name"} />`}
          </SheetTitle> 
        </SheetHeader>

        <nav className='flex flex-col gap-4 justify-around text-[14px] px-4 pb-4'>
          {(about.image || about.bio) && <div onClick={() => handleRoute(`/dashboard/portfolio/create/#about`)}>About</div>}
          {(projects && projects.length > 0) && <div onClick={() => handleRoute(`/dashboard/portfolio/create/#projects`)}>Projects</div>}
          {(experience && experience.length > 0) && <div onClick={() => handleRoute(`/dashboard/portfolio/create/#experience`)}>Experience</div>}
          {(testimonials && testimonials.length > 0) && <div onClick={() => handleRoute(`/dashboard/portfolio/create/#testimonials`)}>Testimonials</div>}
          {(profile.email || profile.phone) && <div onClick={() => handleRoute(`/dashboard/portfolio/create/#contact`)}>Contact</div>}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar