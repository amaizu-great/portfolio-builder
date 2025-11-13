"use client"

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { PortfolioData } from '@/types/portfolio';
import { errorToast, succesToast } from '@/lib/toastConfig';
import useLoadingState from '@/zustand/non-persist/loadingState';
import { formatLongNumbers } from '@/functions/formartLongNumber';
import { MoreVertical, SquarePen, Trash2, GripVertical, Eye } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"; 
import { Dialog, DialogClose, DialogTitle, DialogFooter, DialogHeader, DialogTrigger, DialogContent, DialogDescription } from "@/components/ui/dialog"


const DeletePortfolio = ({ id }:{ id: string}) => {
  const {isLoading, setIsLoading} = useLoadingState();

  const deletePortfolio = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/portfolio/${id}`,{
        method: 'DELETE',
        credentials: "include",
      });

      if (!res.ok) {
        toast.error("Failed to delete portfolio ❌, pls try again", errorToast) 
        return
      }

      toast.success("portfolio deleted successfully ✅" , succesToast) 
    } catch (error) {
      console.error(error);
      toast.error("An unknown error occured 🤯, pls try again ", errorToast)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-2 text-red-500 cursor-pointer">
          <Trash2 className='text-red-500'/> 
          <span>Delete</span>
        </div>
      </DialogTrigger>
      
      <DialogContent showCloseButton={false} className="flex flex-col gap-10 sm:max-w-[425px]">

        <DialogHeader className='flex flex-col gap-4 items-center'>
          <DialogTitle>Delete Portfolio</DialogTitle>
          <DialogDescription className='text-center'> You&apos;re about this portfolio 😞, this action cannot be reversed⚠️⚠️.</DialogDescription>
        </DialogHeader>

        <DialogFooter className='flex flex-col sm:flex-row gap-3 w-full'>
          <DialogClose asChild>
            <Button disabled={isLoading} variant="outline" className='cursor-pointer max-w-1/2 w-full'>Cancel</Button>
          </DialogClose>

          <Button disabled={isLoading} onClick={deletePortfolio} className='max-w-1/2 w-full cursor-pointer disabled:opacity-50'>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


const ActionButton = ({ id }:{ id: string}) => {
  const router = useRouter()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild  className="cursor-pointer size-fit">
        <MoreVertical size={18} className='text-Grey2'/>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent side="top" align="end" className="min-w-[120px]">
        <DropdownMenuItem> 
          <button onClick={()=> router.push(`portfolio/${id}`)} className="flex items-center gap-2 text-gray-400 cursor-pointer">
            <Eye size={12} className='text-gray-400'/> 
            <p>View</p>
          </button> 
        </DropdownMenuItem>
    
        <DropdownMenuItem> 
          <button onClick={()=> router.push(`portfolio/${id}/edit`)} className="flex items-center gap-2 text-gray-400 cursor-pointer">
            <SquarePen size={12} className='text-gray-400'/> 
            <p>Edit</p>
          </button> 
        </DropdownMenuItem>
    
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}> 
          <DeletePortfolio id={id} />
        </DropdownMenuItem>
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const EachPortfolio = ({ idx, portfolio }: { idx: number, portfolio: PortfolioData }) => {
  
  return (
    <div className="flex justify-between bg-white items-center min-w-fit w-full p-3 gap-4 border-b-[1.5px] cursor-pointer hover:bg-gray-50 transition-colors duration-300 group">

      <div className="flex items-center gap-2 w-[50px] min-w-[50px] whitespace-nowrap"> 
        <GripVertical size={12} className='text-Grey2'/>
        <p className='text-[12px]'>{idx + 1}</p>
      </div>

      <div className='flex gap-1 w-[100px] min-w-[100px] text-[12px] overflow-x-scroll scrollbar'>
        {portfolio.template}
      </div>

      <div className={`flex w-50 min-w-50 overflow-x-scroll scrollbar text-[12px]`}>
        {portfolio.profile.email}
      </div>

      <div className={`flex gap-2 w-10 min-w-10 overflow-x-scroll scrollbar text-[12px]`}>
        <Eye size={16} />
        {formatLongNumbers(portfolio.views)}
      </div> 

      <ActionButton id={portfolio.id} />
    </div>
  )
}
export default EachPortfolio