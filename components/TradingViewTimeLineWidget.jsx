"use client";

import React, { useEffect } from 'react';

const TradingViewTimelineWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "feedMode": "all_symbols",
      "isTransparent": false,
      "displayMode": "adaptive",
      "width": 450,
      "height": 200,
      "colorTheme": "light",
      "locale": "en"
    });

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewTimelineWidget;
