
import data from "./dashboard/data.json"

import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";

export default function Page() {
  return (
    <>
      <div className="flex flex-1 flex-col overflow-y-auto scrollbar">
        <div className="@container/main flex flex-1 flex-col gap-2 overflow-y-auto scrollbar">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 overflow-y-scroll scrollbar">
            <SectionCards />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </>
  )
}
