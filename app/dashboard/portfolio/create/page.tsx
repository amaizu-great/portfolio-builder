"use client"

import { useEffect } from 'react';
import Fields from './components/fields';
import Header from './components/header';
import { useSidebar } from "@/components/ui/sidebar";

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
      </section>
    </>
  )
}

export default CreatePortfolio
