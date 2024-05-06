import { useRef, useEffect, useState } from "react";
import { fetchIncomeCategoryData } from "./queries/supabase/supabase-IncomeCategory";

interface ChartProps {
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fontColor: string;
  theme: "light" | "dark";
}

const defaultFontSettings = {
  fontSize: "16px",
  fontFamily: "Arial, sans-serif",
  fontWeight: "normal",
  fontColor: "#000",
};

const IncomeCategoryChart = async ({
  fontSize = defaultFontSettings.fontSize,
  fontFamily = defaultFontSettings.fontFamily,
  fontWeight = defaultFontSettings.fontWeight,
  fontColor = defaultFontSettings.fontColor,
  theme = "light",
}: ChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Fetch data from Supabase
  const data = await fetchIncomeCategoryData();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (ctx && data) {
      // Apply theme-based styling
      const backgroundColor = theme === "dark" ? "#333" : "#fff";
      const textColor = theme === "dark" ? "#fff" : "#000";

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const dataValues = data.map((item) => item.value);
      const dataColor = ["#532b64", "#6dc496", "#148d93", "#d63671", "#febf37"]; // Example colors
      const barWidth = 600;
      let dataTotal = dataValues.reduce((acc, val) => acc + val, 0);
      let dataWidth = dataValues.map((value) => (value / dataTotal) * barWidth);
      const rectHeight = 50;
      let currentX = 100;

      // Draw bars and labels
      dataWidth.forEach((width, index) => {
        ctx.fillStyle = dataColor[index];
        ctx.fillRect(currentX, 100, width, rectHeight);

        ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
        ctx.fillStyle = fontColor;
        ctx.fillText(`Value: ${dataValues[index]}`, currentX + 5, 95);

        currentX += width;
      });
    }
  }, [data, fontSize, fontFamily, fontWeight, fontColor, theme]);

  return (
    <canvas
      ref={canvasRef}
      width="800"
      height="400"
      style={{ backgroundColor: theme === "dark" ? "#333" : "#fff" }}
    ></canvas>
  );
};

export default IncomeCategoryChart;
