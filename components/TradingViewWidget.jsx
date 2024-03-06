"use client";

// TradingViewWidget.jsx
import React, { useState, useEffect, useRef, memo } from 'react';

const TradingViewWidget = ({ performanceMetrics, currentCoin }) => {
  const container = useRef();
  const [performanceData, setPerformanceData] = useState(null);

  

  
    useEffect(() => {
        fetch(`${performanceMetrics}/${currentCoin}`)
            .then((res) => res.json())
            .then((data) => {
                setPerformanceData(data);
                console.log(data.id);
            })
            .catch(error => console.error(error));
    }, [currentCoin]);

    useEffect(
        () => {
          const script = document.createElement("script");
          script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
          script.type = "text/javascript";
          script.async = true;
          script.innerHTML = `
            {
              "symbols": [
                [
                    "${performanceData?.symbol || 'CRYPTO:BTC'}USD|1D"
                ]
              ],
              "chartOnly": false,
              "width": "100%",
              "height": "100%",
              "locale": "en",
              "colorTheme": "light",
              "autosize": true,
              "showVolume": false,
              "showMA": false,
              "hideDateRanges": false,
              "hideMarketStatus": false,
              "hideSymbolLogo": false,
              "scalePosition": "right",
              "scaleMode": "Normal",
              "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
              "fontSize": "10",
              "noTimeScale": false,
              "valuesTracking": "1",
              "changeMode": "price-and-percent",
              "chartType": "area",
              "maLineColor": "#2962FF",
              "maLineWidth": 1,
              "maLength": 9,
              "lineWidth": 2,
              "lineType": 0,
              "dateRanges": [
                "1d|1",
                "1m|30",
                "3m|60",
                "12m|1D",
                "60m|1W",
                "all|1M"
              ]
            }`;
          // Clear container before adding new script
        container.current.innerHTML = '';
        container.current.appendChild(script);
    
        },[performanceData]);

  return (
    <div className=' rounded-xl bg-background h-[390px]  flex justify-center items-center p-2 md:h-[711px] md:p-6'>
    <div className="tradingview-widget-container " ref={container}>
    </div>
    </div>
  );
}

export default memo(TradingViewWidget);
