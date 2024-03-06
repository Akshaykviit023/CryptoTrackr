"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";

const AboutCard = ({ performanceMetrics }) => {

  const [performanceData, setPerformanceData] = useState(null);

  const formatNumber = (value, denomination) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: denomination });
};

    useEffect(() => {
        fetch(performanceMetrics)
            .then((res) => res.json())
            .then((data) => {
                setPerformanceData(data);
            })
            .catch(error => console.error(error));
    }, [performanceMetrics]);

  return (
    <div className="mt-6 bg-background rounded-xl p-2 md:p-6">
        <div className="w-full">
        <h1 className="text-2xl font-semibold">About Bitcoin</h1>
        <h2 className="text-lg font-semibold">What is Bitcoin?</h2>
        { performanceData &&
        <p className="text-[15px] font-medium text-[#3E424A]">Bitcoin's price today is US{formatNumber(performanceData.market_data.current_price.usd, 'USD')}, with a 24-hour trading volume of {formatNumber(performanceData.market_data.total_volume.usd, 'USD')}. BTC is {performanceData.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
}
        <Separator className="my-4"/>
        <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet</h2>
        <p className=" text-[15px] font-medium text-[#3E424A]">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p>
        <p className="mt-6 text-[15px] font-medium text-[#3E424A]">Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</p>
        <p className="my-6 text-[15px] font-medium text-[#3E424A]">Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
        <Separator className="my-4"/>
        <h2 className="text-lg font-semibold">Already Holding Bitcoin?</h2>
        <div className="flex max-md:flex-col md:justify-between gap-10 pr-6 py-4">
            <div className="bg-[linear-gradient(to_bottom_right,#79F1A4,#0E5CAD)] rounded-lg p-4 flex justify-start gap-8 grow">
                <Image 
                height={120}
                width={120}
                src="/img1.png"
                alt="notAvail"
                />

                <div className="flex flex-col justify-evenly items-start">
                    <h2 className="text-lg font-semibold text-white">Calculate your Profits</h2>
                    <Button variant="outline"><p className="text-[14px] text-[#0F1629] font-medium">Check Now</p></Button>
                </div>
            </div>

            <div className="bg-[linear-gradient(to_bottom_right,#FF9865,#EF3031)] rounded-lg p-4 flex justify-start gap-8 grow">
                <Image 
                height={120}
                width={120}
                src="/img2.png"
                alt="notAvail"
                />

                <div className="flex flex-col justify-evenly items-start">
                    <h2 className="text-lg font-semibold text-white">Calculate your tax liability</h2>
                    <Button variant="outline"><p className="text-[14px] text-[#0F1629] font-medium">Check Now</p></Button>
                </div>
            </div>
        </div>


        <Separator className="my-4"/>
        <p className="my-6 text-[15px] font-medium text-[#3E424A]">Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui

</p>


        </div>
    </div>
  )
}

export default AboutCard