"use client"

import Fields from './components/fields';
import Header from './components/header';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSidebar } from "@/components/ui/sidebar";
import EditPortfolioState from '@/zustand/non-persist/editPortfolio';

const EditSinglePortfolio = () => {
  const { id } = useParams<{ id: string }>();
  const { setOpenMobile, setOpen } = useSidebar();
  const [ isLoding, setIsLoading ] = useState(true);
  const { setPortfolioStates } = EditPortfolioState();

  useEffect(() => {
    setOpen(false)
    setOpenMobile(false)
  },[])

  useEffect(() => {
    const fetchPortfolio = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(`/api/portfolio/${id}`);

        if(!res.ok) {
          console.log(await res.json())
          return
        }
        const json = await res.json();
        
        setPortfolioStates(json)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    };
    fetchPortfolio();
  }, []);

  return ( 
    <>
      <Header id={id}/>
      <section className='flex gap-4 w-full px-[4%] py-4 lg:p-6 overflow-y-auto scrollbar'>
        <Fields />
      </section>
    </>
  )
}

export default EditSinglePortfolio