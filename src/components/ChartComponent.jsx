import React from "react";
import { Chart, Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);
const ChartComponent = ({ arr = [], currency, days }) => {
  const prices = [];
  const date = [];
  for (let i = 0; i < arr.length; i++) {
    if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
    else date.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
  }

  return (
    <Line
      options={{ responsive: true }}
      data={{
        labels: date,
        datasets: [
          {
            label: `price in ${currency}`,
            data: prices,
            borderColor: "hsla(148, 38%, 48%, 0.5)",
          },
        ],
      }}
    />
  );
};

export default ChartComponent;
