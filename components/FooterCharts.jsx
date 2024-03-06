"use client";

import { useState, useEffect } from "react";
import { BiSolidUpArrow } from "react-icons/bi";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const FooterCharts = ({ trendingCoinsProps }) => {
    const [trendingCoins, setTrendingCoins] = useState(null);

    useEffect(() => {
        fetch(trendingCoinsProps)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        setTrendingCoins(data.coins);
        console.log(data);
    })
    .catch(error => console.error(error));
    }, [])

  return (
    <div className="p-12 bg-white max-md:p-6">
         <div className="flex justify-center">
        <Carousel className="w-[90%] max-md:w-full">
        <h1 className="text-2xl font-semibold py-4">You May Also Like</h1>
      <CarouselContent className="-ml-1">
        {trendingCoins && trendingCoins.map((coin, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 xl:basis-1/4">
            <div className="p-1">
              <Card className="py-4 ">
                <CardContent className="">
                    <div className="flex items-center gap-2 pb-2">
                <Image 
                        src={coin.item.thumb}
                        unoptimized
                        width={25}
                        height={25}
                        alt="notAvail"
                        />

                        <p className="text-base font-medium">{coin.item.name}</p>
                        <div className={`px-2 py-1 rounded-md ${coin.item.data.price_change_percentage_24h.usd.toFixed(2) > 0 ? "bg-green-50" : "bg-red-50"}`}>
                        <p className={`text-xs font-medium  flex items-center gap-1 ${coin.item.data.price_change_percentage_24h.usd.toFixed(2) > 0 ? "text-green-500" : "text-red-500"}`}><BiSolidUpArrow className={`text-xs ${coin.item.data.price_change_percentage_24h.usd.toFixed(2) > 0 ? "" : "rotate-180" }`}/>{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%</p>
                        </div>
                        </div>
                        <p className="text-xl font-medium">{coin.item.data.price}</p>
                        <Image 
                        src={coin.item.data.sparkline}
                        unoptimized
                        width={300}
                        height={300}
                        alt="notAvail"
                        />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="max-md:hidden" />
      <CarouselNext className="max-md:hidden"/>
    </Carousel>
    </div>



        <div className="flex justify-center">
        <Carousel className="w-[90%] max-md:w-full">
        <h1 className="text-2xl font-semibold py-4">Trending Coins</h1>
      <CarouselContent className="-ml-1">
        {trendingCoins && trendingCoins.map((coin, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 xl:basis-1/4">
            <div className="p-1">
              <Card className="py-4 ">
                <CardContent className="">
                    <div className="flex items-center gap-2 pb-2">
                <Image 
                        src={coin.item.thumb}
                        unoptimized
                        width={25}
                        height={25}
                        alt="notAvail"
                        />

                        <p className="text-base font-medium">{coin.item.name}</p>
                        <div className={`px-2 py-1 rounded-md ${coin.item.data.price_change_percentage_24h.usd.toFixed(2) > 0 ? "bg-green-50" : "bg-red-50"}`}>
                        <p className={`text-xs font-medium  flex items-center gap-1 ${coin.item.data.price_change_percentage_24h.usd.toFixed(2) > 0 ? "text-green-500" : "text-red-500"}`}><BiSolidUpArrow className={`text-xs ${coin.item.data.price_change_percentage_24h.usd.toFixed(2) > 0 ? "" : "rotate-180" }`}/>{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%</p>
                        </div>
                        </div>
                        <p className="text-xl font-medium">{coin.item.data.price}</p>
                        <Image 
                        src={coin.item.data.sparkline}
                        unoptimized
                        width={300}
                        height={300}
                        alt="notAvail"
                        />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="max-md:hidden"/>
      <CarouselNext className="max-md:hidden"/>
    </Carousel>
    </div>
    </div>
  )
}

export default FooterCharts