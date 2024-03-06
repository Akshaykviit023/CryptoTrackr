"use client";
import { IoIosInformationCircle } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState, useEffect } from "react";

const PerformanceCard = ({ performanceMetrics, currentCoin }) => {
    const [performanceData, setPerformanceData] = useState(null);
    useEffect(() => {
        fetch(`${performanceMetrics}/${currentCoin}`)
            .then((res) => res.json())
            .then((data) => {
                setPerformanceData(data);
            })
            .catch(error => console.error(error));
    }, [currentCoin]);

    const getDateDifference = (dateString) => {
        const currentDate = new Date();
        const givenDate = new Date(dateString);

        // Calculate the difference in milliseconds
        const differenceInMs = currentDate - givenDate;

        // Convert milliseconds to years and months
        const years = Math.floor(differenceInMs / (1000 * 60 * 60 * 24 * 365.25));
        const months = Math.floor((differenceInMs % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)); // Average days in a month

        return { years, months };
    };

    const formatOutput = ({ years, months }) => {
        if (years === 0 && months === 0) {
            return 'Less than a month';
        } else if (years === 0) {
            return `${months} month${months !== 1 ? 's' : ''}`;
        } else if (months === 0) {
            return `${years} year${years !== 1 ? 's' : ''}`;
        } else {
            return `${years} year${years !== 1 ? 's' : ''} and ${months} month${months !== 1 ? 's' : ''}`;
        }
    };

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const formatNumber = (value, denomination) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: denomination });
    };

    return (
        <div className="mt-6 bg-background rounded-xl p-2 md:p-6">
            <h1 className="text-2xl font-semibold pb-4">Performance</h1>
            <Image
                     
                    src="/performanceAnalysis.png"
                    height={1200}
                    width={1200}
                    alt='notAvail'
                    />

            <h2 className='text-lg pt-6 font-semibold text-muted-foreground flex justify-start gap-1 items-center'>Fundamentals <IoIosInformationCircle /></h2>
            {performanceData && (
                <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-x-16 mt-6">
                    <div>
                    <p className="text-sm text-muted-foreground font-medium px-2 flex justify-between">{performanceData.name} Price <span className="text-black">{formatNumber(performanceData.market_data.current_price.usd, 'USD')}</span></p>
                    <Separator className="my-4"/>

                    <p className="text-sm text-muted-foreground font-medium px-2 flex justify-between"> 24h Low / 24h High <span className="text-black">{formatNumber(performanceData.market_data.low_24h.usd, 'USD')} / {formatNumber(performanceData.market_data.high_24h.usd, 'USD')}</span></p>
                    <Separator className="my-4"/>

                    <p className="text-sm text-muted-foreground font-medium px-2 flex justify-between">Trading Volume <span className="text-black">{formatNumber(performanceData.market_data.total_volume.usd, 'USD')}</span></p>
                    <Separator className="my-4"/>

                    <p className="text-sm text-muted-foreground font-medium px-2 flex justify-between">Market Cap Rank <span className="text-black">#{performanceData.market_cap_rank}</span></p>
                    <Separator className="my-4"/>

                    
                    </div>

                    <div>
                    

                    <p className="text-sm text-muted-foreground font-medium px-2 flex justify-between">Market Cap <span className="text-black">{formatNumber(performanceData.market_data.market_cap.usd, 'USD')}</span></p>
                    <Separator className="my-4"/>

                    


                    <p className="text-sm text-muted-foreground font-medium px-2 flex justify-between ">Volume / Market Cap <span className="text-black">{performanceData.market_data.market_cap_fdv_ratio}</span></p>
                    <Separator className="mt-4 mb-[6px]"/>

                    <p className="text-sm text-muted-foreground font-medium px-2 flex justify-between items-center">All-Time High 
                    <span className="text-black text-right">
                        <p>{formatNumber(performanceData.market_data.ath.usd, 'USD')}
                        <span className={`ml-2 ${performanceData.market_data.ath_change_percentage.usd.toFixed(2) > 0 ? "text-green-500" : "text-red-500"}`}>
                            {performanceData.market_data.ath_change_percentage.usd.toFixed(2)}%
                            </span>
                            </p> 
                            <p className="text-[10px]">
                                {formatDate(performanceData.market_data.ath_date.usd)} ({formatOutput(getDateDifference(performanceData.market_data.ath_date.usd))} ago)
                                </p>
                                </span>
                                </p>
                    <Separator className="my-1"/>

                    <p className="text-sm text-muted-foreground font-medium px-2 flex justify-between items-center">All-Time Low 
                    <span className="text-black text-right">
                        <p>
                        {formatNumber(performanceData.market_data.atl.usd, 'USD')}
                            <span className={`ml-2 ${performanceData.market_data.atl_change_percentage.usd.toFixed(2) > 0 ? "text-green-500" : "text-red-500"}`}>
                                {performanceData.market_data.atl_change_percentage.usd.toFixed(2)}%
                                </span>
                                </p> <p className="text-[10px]">{formatDate(performanceData.market_data.atl_date.usd)} ({formatOutput(getDateDifference(performanceData.market_data.atl_date.usd))} ago)</p></span></p>
                    <Separator className="my-2"/>

                    </div>
                </div>
            )}
        </div>
    );
};

export default PerformanceCard;
