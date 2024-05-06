import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartProps {
  data: number[][];
  categories: string[];
}

const HouseholdValueChart: React.FC<ChartProps> = ({ data, categories }) => {
  const { theme } = useTheme();
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions({
      series: data.map((series, index) => ({
        name: `Series ${index + 1}`,
        data: series,
      })),
      chart: {
        type: "area",
        height: 350,
        background: theme === "dark" ? "#19191E" : "#FFF",
        dropShadow: {
          enabled: true,
          color: theme === "dark" ? "#000" : "#eee",
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
          colorStops:
            theme === "dark"
              ? [
                  {
                    offset: 0,
                    color: "#6a0dad", // Dark purple
                    opacity: 1,
                  },
                  {
                    offset: 100,
                    color: "#8fbc8f", // Dark teal
                    opacity: 1,
                  },
                ]
              : [
                  {
                    offset: 0,
                    color: "#b19cd9", // Light purple
                    opacity: 1,
                  },
                  {
                    offset: 100,
                    color: "#66cdaa", // Light teal
                    opacity: 1,
                  },
                ],
        },
      },
      xaxis: {
        categories: categories,
        labels: {
          style: {
            colors: theme === "dark" ? "#ccc" : "#333",
          },
        },
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            colors: theme === "dark" ? "#ccc" : "#333",
          },
        },
      },
      grid: {
        borderColor: theme === "dark" ? "#555" : "#ccc",
      },
      theme: {
        mode: theme ?? "dark",
      },
    });
  }, [theme, data, categories]);

  return (
    <ApexCharts
      options={options}
      series={options.series}
      type="area"
      height={350}
    />
  );
};

export default HouseholdValueChart;
