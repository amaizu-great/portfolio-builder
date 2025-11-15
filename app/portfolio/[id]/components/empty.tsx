import {useRouter} from "next/navigation";
import { Button } from "@/components/ui/button";
import useLoadingState from "@/zustand/non-persist/loadingState";
import { Empty, EmptyHeader, EmptyTitle, EmptyContent, EmptyDescription } from "@/components/ui/empty";

const EmptyPortfolio = () => {
  const router = useRouter();
  const { reFetch, setReFetch } = useLoadingState();

  return (
    <Empty className="size-full">
      <EmptyHeader className="flex flex-col gap-2 w-full">
        <EmptyTitle className="text-[30px] sm:text-[40px]">404 - Not Found</EmptyTitle>
        <EmptyDescription className="w-full"> The portfolio you&apos;re looking for doesn&apos;t exist 🔎. Try again</EmptyDescription>
      </EmptyHeader>

      <EmptyContent> 
        <EmptyDescription className="flex flex-col gap-4 w-full justify-center items-center sm:flex-row">
          <Button variant="outline" onClick={() => router.back()} className="w-40 cursor-pointer"> Back </Button>
          <Button onClick={() => setReFetch(!reFetch)} className="w-40 cursor-pointer"> Retry </Button>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  )
}

export default EmptyPortfolio;
