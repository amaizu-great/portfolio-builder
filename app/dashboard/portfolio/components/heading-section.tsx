import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const HeadingSection = () => {
  const router = useRouter()
  return (
    <div className='flex gap-2 justify-between items-center'>
      <h2 className='text-Black font-poppins text-[20px] md:text-[25px] font-semibold whitespace-nowrap '>My Portfolio&apos;s</h2> 

      <Button onClick={() => router.push('/dashboard/portfolio/create')} className='flex items-center gap-2 cursor-pointer'>
        <Plus />
        <span className='hidden md:block'>Add Portfolio</span>
      </Button>
    </div>
  )
}

export default HeadingSection