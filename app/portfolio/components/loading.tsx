import { Skeleton } from "@/components/ui/skeleton"

const LoadingPortfolio = () => {
  return (
    <section className="flex flex-col gap-4 h-full px-[4%] py-4 lg:p-6 overflow-y-auto scrollbar">
      <div className="flex flex-col gap-2 justify-between md:items-center md:flex-row">
        <h1 className="animate-text-shimmer bg-size-[200%_100%] bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 bg-clip-text text-transparent text-[20px] md:text-[25px] font-semibold whitespace-nowrap">My Portfolio&apos;s</h1>

        <Skeleton className="w-full md:w-72 h-10" />
      </div>

      <Skeleton className="h-full w-full" />
    </section>
  )
}

export default LoadingPortfolio
