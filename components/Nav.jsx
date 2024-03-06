
import Image from "next/image"
import { Button } from "./ui/button"
import { FaBars } from "react-icons/fa6";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Nav = () => {
  return (
    <div className="w-full bg-white h-20 flex justify-center items-center fixed z-10
    shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]">
        <div className="w-11/12 flex justify-between items-center mx-auto relative">
        <Image 
        src="/koinX_Logo.png"
        alt="koinxLogo"
        height={100}
        width={100}

        />

        <div className=" hidden md:flex md:gap-6 md:items-center ">
            <div className="flex gap-4">
                <Button variant="ghost" className="font-semibold text-base">Crypto Taxes</Button>
                <Button variant="ghost" className="font-semibold text-base">Free Tools</Button>
                <Button variant="ghost" className="font-semibold text-base">Resource Center</Button>
            </div>
            <Button className="font-semibold text-base bg-[linear-gradient(to_right,#2870EA,#1B4AEF)]">Get Started</Button>
        </div>


        <div  className="block text-2xl md:hidden">
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"><FaBars  /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-4 mr-4 text-center">
      <Button variant="ghost" className="font-semibold text-base w-full">Crypto Taxes</Button>
        <DropdownMenuSeparator />
        <Button variant="ghost" className="font-semibold text-base w-full">Free Tools</Button>
        <DropdownMenuSeparator />
        <Button variant="ghost" className="font-semibold text-base w-full">Resource Center</Button>
        <DropdownMenuSeparator />
        <Button className="font-semibold text-base bg-[linear-gradient(to_right,#2870EA,#1B4AEF)] mt-4 mb-2 w-full">Get Started</Button>

        
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
        </div>
    </div>
  )
}

export default Nav