import Link from 'next/link';
import { Plus, SearchIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { InputGroup, InputGroupInput, InputGroupAddon } from "@/components/ui/input-group";

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({searchQuery, setSearchQuery}:SearchBarProps) => {

  return (
    <div className='flex flex-col gap-2 justify-between md:items-center  md:flex-row'>
      <h2 className='text-Black font-poppins text-[20px] md:text-[25px] font-semibold whitespace-nowrap '>My Portfolio&apos;s</h2>
      
      <InputGroup className='w-fit'>
        <InputGroupInput value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />

        <InputGroupAddon align="inline-end" className='flex'>
          <Link href="/portfolio/create" className='flex items-center gap-2'>
            <Plus />
            <span>Add</span>
          </Link>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default SearchBar