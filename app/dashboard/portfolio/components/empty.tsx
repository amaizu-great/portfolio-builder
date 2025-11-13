"use client";

import { toast } from "sonner"
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { PortfolioData } from "@/types/portfolio";
import readJsonFile from "@/functions/readJsonFile";
import { IconFolderCode } from "@tabler/icons-react";
import  portfolioState  from "@/zustand/persit/addPortfolio";
import { errorToast, succesToast, warnToast } from "@/lib/toastConfig";
import { Empty, EmptyMedia, EmptyTitle, EmptyHeader, EmptyContent, EmptyDescription } from "@/components/ui/empty";

const EmptyPortfolio = () => {
  const router = useRouter();
  const {setPortfolioStates} = portfolioState()
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    try {
      const json:PortfolioData = await readJsonFile(file);

      if (
        !json.profile ||
        typeof json.profile !== "object" ||
        typeof json.profile.email !== "string" ||
        typeof json.profile.firstName !== "string" ||
        typeof json.profile.lastName !== "string" ||
        typeof json.profile.description !== "string"
      ) {
        toast.warning("This file doesn't fit the expected Type format.", warnToast);
        return; 
      } 
      toast.success("Portfolio imported successfully ✅", succesToast);
      setPortfolioStates(json)
      router.push("/dashboard/portfolio/create")
    } catch (err) {
      toast.error("Failed to import file ❌. Please check your JSON format.", errorToast);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const json:PortfolioData = await readJsonFile(file);

        if (
          !json.profile ||
          typeof json.profile !== "object" ||
          typeof json.profile.email !== "string" ||
          typeof json.profile.firstName !== "string" ||
          typeof json.profile.lastName !== "string" ||
          typeof json.profile.description !== "string"
        ) {
          toast.warning("This file doesn't fit the expected Type format.", warnToast);
          return;
        } 
        toast.success("Portfolio imported successfully ✅", succesToast);
        setPortfolioStates(json)
        router.push("/dashboard/portfolio/create")
      } catch (err) {
        toast.error("❌ Failed to import file. Please check your JSON format.", errorToast);
      }
    }
  };

  return (
    <Empty onDragOver={handleDragOver} onDrop={handleDrop} onDragLeave={handleDragLeave} className={`${isDragging ? "bg-gray-100 transition-colors duration-300" : ""}`}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconFolderCode />
        </EmptyMedia>

        <EmptyTitle>
          {isDragging ? "Drop your JSON file here" : "No Portfolio Yet"}
        </EmptyTitle>

        <EmptyDescription>
          You haven&apos;t created any portfolio yet. Get started by creating
          your first portfolio or import one.
        </EmptyDescription>
      </EmptyHeader>

      <EmptyContent>
        <div className="flex gap-2">
          <Button className="cursor-pointer" onClick={() => router.push("/dashboard/portfolio/create")}>
            Create Portfolio
          </Button>

          <label htmlFor="portfolio-import">
            <input id="portfolio-import" type="file" accept=".json" className="hidden" onChange={handleFileSelect} />
            <Button variant="outline" asChild>
              <span className="cursor-pointer">Import Portfolio</span>
            </Button>
          </label>
        </div>
      </EmptyContent>
    </Empty>
  );
};

export default EmptyPortfolio;
