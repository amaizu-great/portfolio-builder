"use client"

import { useEffect, useState } from "react";
import SearchBar from "./components/searchBar";
import EmptyPortfolio from "./components/empty";
import LoadingPortfolio from "./components/loading";
import { SiteHeader } from "@/components/site-header";

const PortfolioPage = () => {
  const [portfolios, setPortfolios] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ searchQuery, setSearchQuery ] = useState('');

  useEffect(() => {
    const fetchPortfolio = async () => {
      setIsLoading(true)
      try {
        
      } catch (error) {
        
      } finally {
        setIsLoading(false)
      }
    }
    fetchPortfolio()
  },[searchQuery])

  if(isLoading){
    return(
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
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </section>
    </>
  )
}

export default PortfolioPage