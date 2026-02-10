;

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

// Helper function to generate random amounts
const randomAmount = () => Math.floor(Math.random() * 6_000_000) + 1;

// Labels for all months
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Generate random data for 12 months
const data = {
  labels,
  datasets: [
    {
      label: "Amount",
      data: [
        ...labels.slice(0, 6).map(() => randomAmount()),
        ...Array(6).fill(0),
      ],
      backgroundColor: "#5757d6",
      borderRadius: { topLeft: 10, topRight: 10 },
      barThickness: 16, // automatically adjusts
      maxBarThickness: 30, // largest width
      minBarLength: 2,
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  scales: {
    x: {
      grid: { display: false },
      border: { display: false },
      ticks: {
        color: "#082353",
      },
    },
    y: {
      min: 0,
      max: 6_000_000,
      ticks: {
        stepSize: 1_000_000,
        color: "#082353",
        callback: (tickValue: string | number) =>
          `₦${Number(tickValue) / 1_000_000}M`,
      },
      border: { display: false },
    },
  },
} as const;

export default function SimpleBarChart() {
  return (
    <div style={{ width: "100%", maxWidth: "700px" }}>
      <Bar data={data} options={options} />
    </div>
  );
}
