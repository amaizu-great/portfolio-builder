"use client"

import { toast } from "sonner";
import { useEffect, useState } from "react";
import { errorToast } from "@/lib/toastConfig";
import EmptyPortfolio from "./components/empty";
import { PortfolioData } from "@/types/portfolio";
import LoadingPortfolio from "./components/loading";
import { SiteHeader } from "@/components/site-header";
import HeadingSection from "./components/heading-section";
import PortfolioTable from "./components/portfolio-table-list";
import useLoadingState from "@/zustand/non-persist/loadingState";

const PortfolioPage = () => {
  const { reFetch } = useLoadingState()
  const [isLoading, setIsLoading] = useState(true);
  const [portfolios, setPortfolios] = useState<PortfolioData[]>([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      setIsLoading(true);

      try {
        const res = await fetch("/api/portfolio");

        if(!res.ok) {
          toast.error("Failed to fetch portfolios", errorToast);
          console.log(await res.json())
          return
        }
        const json = await res.json();

        setPortfolios(json.data);
      } catch (error) {
        toast.error("An error occurred", errorToast);
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    };
    fetchPortfolio();
  }, [reFetch]);


  if (isLoading) {
    return (
      <>
        <SiteHeader />
        <LoadingPortfolio />
      </>
    )
  }

  if(portfolios.length === 0){
    return (
      <>
        <SiteHeader />
        <EmptyPortfolio />
      </>
    )
  }

  return (
    <>
      <SiteHeader />                                                                                                                                                                                                                                                                                                                                                                                                                                          

      <section className="flex flex-col gap-4 h-full px-[4%] py-4 lg:p-6 overflow-y-auto scrollbar">
        <HeadingSection />
        <PortfolioTable data={portfolios} />
      </section>
    </>
  )
}

export default PortfolioPage