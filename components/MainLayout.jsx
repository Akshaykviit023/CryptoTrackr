import TradingViewWidget from "./TradingViewWidget"
import GetStartedCard from "./GetStartedCard"
import requests from "./Requests"
import TrendingCoinCard from "./TrendingCoinCard"
import SentimentCard from "./SentimentCard"
import TradingViewTimelineWidget from "./TradingViewTimeLineWidget"
import PerformanceCard from "./PerformanceCard"
import AboutCard from "./AboutCard"
import TokenomicsCard from "./TokenomicsCard"
import TeamCard from "./TeamCard"

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto py-24">
        
      <p className="">Cryptocurrencies {">>"} Bitcoin</p>
    <div className=" w-full flex flex-col justify-between items-start gap-6 lg:flex-row ">
        <div className=" w-full lg:w-3/4  ">
            <TradingViewWidget />

            <PerformanceCard performanceMetrics = {requests.fetchPrice}/>

            <SentimentCard />

            {/* <TradingViewTimelineWidget /> */}

            <AboutCard performanceMetrics = {requests.fetchPrice}/>
            
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