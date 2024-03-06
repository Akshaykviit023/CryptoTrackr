"use client"

import { IoIosInformationCircle } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa6";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const SentimentCard = () => {
  const SAMPLE_DATA = [
    { id: "01", bgColor: "bg-blue-50", logo: <FaMoneyBillWave />, logoColor: "bg-blue-600"},
  { id: "02", bgColor: "bg-green-50", logo: <FaArrowTrendUp />, logoColor: "bg-green-600"},
  { id: "03", bgColor: "bg-red-50", logo: <FaArrowTrendDown />, logoColor: "bg-red-600"},
  { id: "04", bgColor: "bg-violet-50", logo: <FaChartPie />, logoColor: "bg-violet-600"},
  { id: "05", bgColor: "bg-yellow-50", logo: <FaCoins />, logoColor: "bg-yellow-600"},
  ]


  return (
    <div className="mt-6 bg-background rounded-xl p-2 md:p-6">
        <h1 className="text-2xl font-semibold">Sentiment</h1>

        <h2 className="text-lg font-semibold text-muted-foreground flex justify-start gap-1 items-center py-4">Key Events <IoIosInformationCircle /></h2>
        <div
        className="flex justify-center items-center"
      >
        <Carousel className="w-full">
      <CarouselContent className="-ml-1">
          {SAMPLE_DATA.map((item, index) =>(
            <div key={index}>
                <CarouselItem  className="pl-1 md:basis-1/2 xl:basis-1/4">
            <div className="">
              <Card className={` ${item.bgColor} w-[320px] h-[140px] flex justify-center items-center md:w-[450px] md:h-[200px]`}>
                <CardContent className=" ">
                <div className={`card  flex justify-between py-4 rounded-xl`}>
              <div className={`${item.logoColor} h-8 w-8  rounded-full text-white  flex justify-center text-xs items-center md:text-base md:h-12 md:w-12`}>{item.logo}</div>
              <div className="w-[82%]">
                <p className="text-xs md:text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia vel autem.</p>
                <p className="text-[10px] md:text-sm font-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis harum quo voluptatum iste quas architecto quis at amet, aspernatur.</p>
                </div>
            </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
            </div>
          ) )}
          </CarouselContent>
          <CarouselPrevious className="ml-8  max-md:hidden " />
      <CarouselNext className=" mr-8 max-md:hidden"/>
          </Carousel>
      </div>

        <h2 className="text-lg font-semibold text-muted-foreground flex justify-start gap-1 items-center mb-4 pt-8">Analyst Estimates <IoIosInformationCircle /></h2>
        <Image 
        className="py-6"
        src="/analystGraph.png"
        alt="notAvail"
        height={200}
        width={1000}
        />
    </div>
  )
}

export default SentimentCard