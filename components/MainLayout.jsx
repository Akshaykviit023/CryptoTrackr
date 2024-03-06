"use client";

import TradingViewWidget from "./TradingViewWidget"
import GetStartedCard from "./GetStartedCard"
import requests from "./Requests"
import TrendingCoinCard from "./TrendingCoinCard"
import SentimentCard from "./SentimentCard"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import PerformanceCard from "./PerformanceCard"
import AboutCard from "./AboutCard"
import TokenomicsCard from "./TokenomicsCard"
import TeamCard from "./TeamCard"
import CoinsList from "./CoinsList"

import { useState, useEffect } from 'react'

const MainLayout = () => {
    
    const [coinsData, setCoinsData] = useState(null);
    const [currentCoin, setCurrentCoin] = useState("bitcoin");

    const handleCoinClick = (selectedCoin) => {
        // Handle the selected coin value here
        setCurrentCoin(selectedCoin);
        console.log("Selected coin:", selectedCoin);
      };

    useEffect(() => {
        fetch(requests.fetchCoinDetails)
            .then((res) => res.json())
            .then((data) => {
                setCoinsData(data);
            })
            .catch(error => console.error(error));
    }, [coinsData]);

  return (
    <div className="w-11/12 mx-auto py-24">

<div className="flex  items-center mb-2">
        <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="text-black">Cryptocurrencies</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-40">
        <div className="flex justify-between ">
          <CoinsList coinsList = {coinsData} onCoinClick={handleCoinClick}/>
        </div>
      </HoverCardContent>
    </HoverCard>
    &raquo;
    <p className="ml-4 text-sm font-medium">{currentCoin}</p>
    </div>

      {/*<p className="">Cryptocurrencies {">>"} Bitcoin</p>*/}
    <div className=" w-full flex flex-col justify-between items-start gap-6 lg:flex-row ">
        <div className=" w-full lg:w-3/4  ">
            <TradingViewWidget performanceMetrics = {requests.fetchPrice} currentCoin = {currentCoin}/>

            <PerformanceCard performanceMetrics = {requests.fetchPrice} currentCoin = {currentCoin}/>

            <SentimentCard />

            {/* <TradingViewTimelineWidget /> */}

            <AboutCard performanceMetrics = {requests.fetchPrice} currentCoin = {currentCoin}/>
            
            <TokenomicsCard />

            <TeamCard />

            </div>
        <div className="max-lg:w-full lg:grow ">
            <GetStartedCard />
            <TrendingCoinCard trendingRequest = {requests.fetchTrending} />
        </div>
    </div>
    </div>
  )
}

export default MainLayout