import React, { useEffect, useRef } from "react";
import { createChart, ColorType } from "lightweight-charts"; // Import ColorType

const Chart = ({ data }: any) => {
  const chartContainerRef = useRef<HTMLDivElement>(null); // Define the ref to the chart container

  useEffect(() => {
    if (!chartContainerRef.current) return; // Check if the ref is properly assigned

    // Create the chart instance
    const chartOptions = {
      layout: {
        textColor: 'white',
        background: { type: ColorType.Solid, color: '#1e1e1e' }, // Use ColorType.Solid instead of 'solid'
      },
      grid: {
        vertLines: {
          color: '#2b2b43',
        },
        horzLines: {
          color: '#363c4e',
        },
      },
    };

    const chart = createChart(chartContainerRef.current, chartOptions); // Use ref instead of getElementById

    // Add the candlestick series
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    });

    // Set the data for the series
    candlestickSeries.setData(data);

    // Adjust the chart to fit content
    chart.timeScale().fitContent();

    // Clean up the chart instance when the component unmounts
    return () => chart.remove();
  }, [data]);

  return <div ref={chartContainerRef} style={{ width: "100%", height: "400px" }} />; // Use the ref for the div element
};

export default Chart;
