"use client"
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import EmptyPortfolio from './components/empty';
import { PortfolioData } from '@/types/portfolio';
import Template1 from '@/app/templates/template1/template-1'
import useLoadingState from '@/zustand/non-persist/loadingState';

const SinglePortfolio = () => {
  const { reFetch } = useLoadingState()
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);

  useEffect(() => {
    const fetchSinglePortfolio = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(`/api/portfolio/${id}`);

        if (!res.ok) {
          console.error("Failed to fetch portfolio", await res.json());
          return;
        }
        const json = await res.json();
        setPortfolio(json);
      } catch (error) {
        console.error("An error occurred", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSinglePortfolio();
  },[id, reFetch])

  if(isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  if(!portfolio) {
    return (
      <EmptyPortfolio />
    )
  }

   const renderTemplate = () => {
    switch (portfolio.template) {
    //   case "template2":
    //     return <Template2 data={portfolio} />;
    //   case "template3":
    //     return <Template3 data={portfolio} />;
      case "template-1":
      default:
        return <Template1 portfolio={portfolio} />;
    }
  };


  return (
    <div className="h-svh scrollbar">
      {renderTemplate()}
    </div>
  )
}

export default SinglePortfolio