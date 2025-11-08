import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select"
import { ArrowDownToLine } from "lucide-react";
import { allTemplatesName } from "@/app/templates/allTemplates";
import useLoadingState from "@/zustand/non-persist/loadingState";
import useTemplatesState from "@/zustand/non-persist/templateState";

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

const Header = () => {
  const { isLoading } = useLoadingState();
  return (
    <header className="flex h-fit py-4 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <div className="flex justify-between items-center w-full">
          <SelectTemplate />

          <Button disabled={isLoading}>
            <ArrowDownToLine />
            <p className="hidden md:block">Save Changes</p>
          </Button>
        </div> 
      </div>
    </header>
  )
}

export default Header
