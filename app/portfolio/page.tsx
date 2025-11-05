"use client"

import { useEffect, useState } from "react"

const PortfolioPage = () => {
  const [ isLoading, setIsLoading ] = useState(true)

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
  },[])

  if(isLoading){
    return(
      <>
      </>
    )
  }

  return (
    <section className="flex flex-col gap-2 overflow-y-scroll scrollbar p-4 lg:p-6">
    </section>
  )
}

export default PortfolioPage