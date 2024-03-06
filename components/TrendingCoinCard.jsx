"use client";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import Image from "next/image"
import { useEffect, useState } from "react"
import { BiSolidUpArrow } from "react-icons/bi";

const TrendingCoinCard = ({ trendingRequest }) => {
    const [trendingCoins, setTrendingCoins] = useState(null);

    useEffect(() => {
        fetch(trendingRequest)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        setTrendingCoins(data.coins);
        console.log(data.coins);
    })
    .catch(error => console.error(error));
    }, [])
    

  return (
    <Card className="w-full bg-white text-black  mt-6" >
      <CardHeader>
        <h1 className="text-2xl font-bold">Trending Coins {"(24H)"}</h1>
        
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="mx-auto w-full">
            {
                trendingCoins && trendingCoins.slice(0, 3).map((coin, index) => (
                    <div key={index} className="flex justify-between py-2">
                        <div className="flex items-center gap-2">
                        <Image 
                        src={coin.item.thumb}
                        unoptimized
                        width={25}
                        height={25}
                        alt="notAvail"
                        />
                        <p className="text-base font-medium">{coin.item.name}</p>
                        </div>
                        <div className={`px-2 py-1 rounded-md ${coin.item.data.price_change_percentage_24h.usd.toFixed(2) > 0 ? "bg-green-50" : "bg-red-50"}`}>
                        <p className={`text-base font-medium  flex items-center gap-1 ${coin.item.data.price_change_percentage_24h.usd.toFixed(2) > 0 ? "text-green-500" : "text-red-500"}`}><BiSolidUpArrow className={`text-sm ${coin.item.data.price_change_percentage_24h.usd.toFixed(2) > 0 ? "" : "rotate-180" }`}/>{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </CardContent>
    </Card>
  )
}

export default TrendingCoinCard;