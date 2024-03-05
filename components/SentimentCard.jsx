"use client"

import { IoIosInformationCircle } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa6";
import Image from "next/image";
import { useState, useRef } from "react";

const SentimentCard = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();

  const SAMPLE_DATA = [
    { id: "01", bgColor: "bg-blue-50", logo: <FaMoneyBillWave />, logoColor: "bg-blue-600"},
  { id: "02", bgColor: "bg-green-50", logo: <FaArrowTrendUp />, logoColor: "bg-green-600"},
  { id: "03", bgColor: "bg-red-50", logo: <FaArrowTrendDown />, logoColor: "bg-red-600"},
  { id: "04", bgColor: "bg-violet-50", logo: <FaChartPie />, logoColor: "bg-violet-600"},
  { id: "05", bgColor: "bg-yellow-50", logo: <FaCoins />, logoColor: "bg-yellow-600"},
  ]

  const handleScroll = (scrollAmount) => {
    // Calculate the new scroll position
    const newScrollPosition = scrollPosition + scrollAmount;
  
    // Update the state with the new scroll position
    setScrollPosition(newScrollPosition);
  
    // Access the container element and set its scrollLeft property
    containerRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <div className="mt-6 bg-background rounded-xl p-2 md:p-6">
        <h1 className="text-2xl font-semibold">Sentiment</h1>

        <h2 className="text-lg font-semibold text-muted-foreground flex justify-start gap-1 items-center">Key Events <IoIosInformationCircle /></h2>
        <div
        className=""
        ref={containerRef}
      >
        <div className="content-box flex  gap-4 w-full">
 

          {/*SAMPLE_DATA.map((item) => (
            <div className={`card ${item.bgColor} w-[450px] h-[200px] flex justify-between p-6 rounded-xl`}>
              <div className={`${item.logoColor} h-12 w-12 rounded-full text-white flex justify-center items-center`}>{item.logo}</div>
              <div className="w-[82%]">
                <p className="text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia vel autem.</p>
                <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis harum quo voluptatum iste quas architecto quis at amet, aspernatur, maiores voluptate pariatur dignissimos laboriosam vitae suscipit corrupti quibusdam expedita. Dolorum.</p>
                </div>
            </div>
          ))*/}
        </div>
      </div>

        <h2 className="text-lg font-semibold text-muted-foreground flex justify-start gap-1 items-center mb-4">Analyst Estimates <IoIosInformationCircle /></h2>
        <Image 
        src="/analystGraph.png"
        alt="notAvail"
        height={200}
        width={1000}
        />
    </div>
  )
}

export default SentimentCard