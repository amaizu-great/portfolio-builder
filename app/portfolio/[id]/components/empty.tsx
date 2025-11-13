import {useRouter} from "next/navigation";
import { Button } from "@/components/ui/button";
import { Empty, EmptyHeader, EmptyTitle, EmptyContent, EmptyDescription } from "@/components/ui/empty";

const EmptyPortfolio = () => {
  const router = useRouter();
  return (
    <Empty>
      <EmptyHeader className="flex flex-col gap-2 w-full">
        <EmptyTitle className="text-[30px] sm:text-[40px]">404 - Not Found</EmptyTitle>
        <EmptyDescription className="w-full"> The portfolio you&apos;re looking for doesn&apos;t exist 🔎. Try again</EmptyDescription>
      </EmptyHeader>

      <EmptyContent> 
        <EmptyDescription className="flex w-full justify-center">
          <Button onClick={() => router.back()} className="w-[70%] min-w-[150px] cursor-pointer"> Back </Button>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  )
}

export default EmptyPortfolio;
