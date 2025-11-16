"use client"

import { useEffect } from 'react';
import Preview from './preview/preview';
import Fields from './components/fields';
import Header from './components/header';
import { useSidebar } from "@/components/ui/sidebar";
import { Separator } from '@/components/ui/separator';

const CreatePortfolio = () => {
  const { setOpenMobile, setOpen } = useSidebar();
  useEffect(() => {
    setOpen(false)
    setOpenMobile(false)
  },[])

  return (  
    <>
      <Header />
      <section className='flex gap-4 w-full px-[4%] py-4 lg:p-6 overflow-y-auto scrollbar'>
        <Fields />
        <Separator orientation="vertical" className='hidden w-3 lg:block'/>
        <Preview />
      </section>
    </>
  )
}

export default CreatePortfolio
