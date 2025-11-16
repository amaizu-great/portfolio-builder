import { toast } from "sonner"
import { useRouter } from "next/navigation";
import { ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { allTemplatesName } from "@/app/templates/allTemplates";
import useLoadingState from "@/zustand/non-persist/loadingState";
import useTemplatesState from "@/zustand/non-persist/templateState";
import EditPortfolioState from '@/zustand/non-persist/editPortfolio';
import { errorToast, succesToast, warnToast } from "@/lib/toastConfig";
import { Select, SelectItem, SelectGroup, SelectLabel, SelectValue, SelectContent, SelectTrigger } from "@/components/ui/select"

const SelectTemplate = () => {
  const { isLoading } = useLoadingState();
  const { template, setTemplate } = useTemplatesState();

  return (
    <Select disabled={isLoading} onValueChange={(value) => setTemplate(value)}>
      <SelectTrigger className="w-full max-w-30 md:max-w-[180px]">
        <SelectValue placeholder={template} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Templates</SelectLabel>
          {allTemplatesName.map((template, idx) => (
            <SelectItem disabled={isLoading} key={idx} value={template}>{template}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const Header = ({id}:{id:string}) => {
  const router = useRouter()
  const { template } = useTemplatesState();
  const { isLoading, setIsLoading } = useLoadingState();
  const { profile , about, projects, experience, testimonials, newsletter, clearAllState } = EditPortfolioState();

  const handleEditPortfolio = async () => {
    setIsLoading(true);

    const body = {
      template, 
      profile,
      views: 0,
      about,
      projects,
      experience,
      testimonials,
      newsletter,
    }

    try {
      const res = await fetch(`/api/portfolio/${id}`,{
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      })
  
      if(res.status === 401){
        toast.error("You are not authorized to edit a portfolio  🔐🔐", errorToast)
        return;
      }
  
      if(res.status === 400){
        toast.warning("🤔 i think you left some field empty ⚠️", warnToast)
        return;
      }
  
      if(!res.ok){
        toast.error("Failed to edit portfolio ⛔😞", errorToast)
        console.log(await res.json())
        return;
      }

      toast.success("Portfolio updated successfully 🎉", succesToast)
      clearAllState()
      router.push("/dashboard/portfolio")
    } catch (error) {
        toast.error("an error occurred ⛔😞", errorToast)
        console.log(error)  
    } finally {
      setIsLoading(false);
    }

  }

  return (
    <header className="flex h-fit py-4 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <div className="flex justify-between items-center w-full">
          <SelectTemplate />

          <Button disabled={isLoading} onClick={handleEditPortfolio} className="cursor-pointer">
            <ArrowDownToLine />
            <p className="hidden md:block">Edit Changes</p>
          </Button>
        </div> 
      </div>
    </header>
  )
}

export default Header
