import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"


export default function CardDemo() {
  return (
    <Card className="w-full bg-[#0052FE] text-white text-center " >
      <CardHeader>
        <h1 className="text-2xl font-bold">Get Started with KoinX for FREE</h1>
        <CardDescription className="text-white text-[14px]">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="mx-auto">
          <Image 
          src="/getStartedImg.png"
          alt="getStarted"
          height={150}
          width={150}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="mx-auto font-semibold" variant="secondary">
          Get Started for FREE 
          <ArrowRight  className="h-4 w-4 ml-2 "/>
        </Button>
      </CardFooter>
    </Card>
  )
}
