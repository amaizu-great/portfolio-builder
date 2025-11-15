
import Link from "next/link";
import { useState } from "react";
import { Logs } from "lucide-react";
import { useRouter } from "next/navigation";
import { PortfolioData } from "@/types/portfolio";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Sheet, SheetTitle, SheetHeader, SheetTrigger, SheetContent, } from "@/components/ui/sheet";

const Sidebar = ({ portfolio }:{ portfolio: PortfolioData }) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 639px)")

  const handleRoute = (route: string) => {
    router.push(route)
    setOpen(false)
  }

  if(isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Logs size={20}/>
        </SheetTrigger>

        <SheetContent aria-description="navbar">
          <SheetHeader  className="border-b">
            <SheetTitle className="font-semibold text-[20px] max-md:text-[18px] max-sm:text-[16px] text-[#030712]"> 
              {`<${portfolio.profile.firstName} />`}
            </SheetTitle> 
          </SheetHeader>

          <nav className='flex flex-col gap-4 justify-around text-[14px] px-4 border-b pb-4'>
            {portfolio.about && <div onClick={() => handleRoute(`/portfolio/${portfolio.id}/#about`)}>About</div>}
            {(portfolio.projects && portfolio.projects.length > 0) && <div onClick={() => handleRoute(`/portfolio/${portfolio.id}/#projects`)}>Projects</div >}
            {(portfolio.experience && portfolio.experience.length > 0) && <div onClick={() => handleRoute(`/portfolio/${portfolio.id}/#experience`)}>Experience</div >}
            {(portfolio.testimonials && portfolio.testimonials.length > 0) && <div onClick={() => handleRoute(`/portfolio/${portfolio.id}/#testimonials`)}>Testimonials</div >}
            <div onClick={() => handleRoute(`/portfolio/${portfolio.id}/#contact`)}>Contact</div >
          </nav>
        </SheetContent>
      </Sheet>
    )
  }
}

export default Sidebar