import React, { useState, useEffect } from "react";
import ApexCharts from "react-apexcharts";
import { fetchEarningsData } from "@/queries/fmp/fmp-FetchEarningsData"; // Make sure this path remains correct after renaming
import { ChartDataPoint } from "@/types/fmp/types-EarningsData"; // Update the import path if necessary

interface FinancialChartProps {
  symbol: string;
  metric: "EPS" | "Revenue";
}

const FmpEarningsChart: React.FC<FinancialChartProps> = ({
  symbol,
  metric,
}) => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          columnWidth: "60%",
        },
      },
      colors: ["#00E396"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Actual", "Expected"],
        markers: {
          fillColors: ["#00E396", "#775DD0"],
        },
      },
    },
  });

  useEffect(() => {
    if (symbol) {
      fetchEarningsData(symbol).then((data) => {
        const seriesData: ChartDataPoint[] = data.map((item) => ({
          x: item.date.slice(0, 4), // Assuming the date format is YYYY-MM-DD
          y: metric === "EPS" ? item.eps : item.revenue,
          goals: [
            {
              name: "Expected",
              value:
                metric === "EPS" ? item.epsEstimated : item.revenueEstimated,
              strokeHeight: 5,
              strokeColor: "#775DD0",
            },
          ],
        }));

        setChartData((prevState) => ({
          ...prevState,
          series: [{ name: "Actual", data: seriesData }],
        }));
      });
    }
  }, [symbol, metric]);

  return (
    <ApexCharts
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={350}
    />
  );
};

export default FmpEarningsChart;
