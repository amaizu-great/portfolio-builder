import { MoreVertical } from "lucide-react";
import { PortfolioData } from "@/types/portfolio";
import EachPortfolioList from "./each-portfolio-list";

const PorfolioListTableHeader = () => {
  return (
    <header className='flex gap-4 justify-between min-w-fit w-full border rounded-t-xl bg-Grey text-[12px] p-3 font-medium whitespace-nowrap'>
      <p className='w-[50px] min-w-[50px] pl-4'>Index</p>
      <p className='w-[100px] min-w-[100px]'>Template</p>
      <p className='w-50 min-w-50'>Email</p>
      <p className='w-10 min-w-10'>Views</p>
      <MoreVertical size={18} className='text-Grey2 opacity-0'/>
    </header>
  )
}


const PortfolioTable = ({ data }: { data: PortfolioData[] }) => {
  return (
    <div className="flex flex-col overflow-y-scroll scrollbar">
      <PorfolioListTableHeader />
      {data.map((porfolio, idx) => { return <EachPortfolioList key={idx} idx={idx} portfolio={porfolio} /> })}
    </div>
  )
}

export default PortfolioTable
