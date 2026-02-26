import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartOptions,
} from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

interface BarChartProps {
  labels?: string[];
  data?: number[];
  backgroundColor?: string;
  barThickness?: number;
  maxBarThickness?: number;
  minBarLength?: number;
  maxValue?: number;
  stepSize?: number;
  width?: string;
  maxWidth?: string;
  dataLabel?: string;
  currencySymbol?: string;
  generateRandomData?: boolean;
  monthsToShow?: number;
  showAxes?: boolean;
  showLabels?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  barPercentage?: number;
  categoryPercentage?: number;
}

// Helper function to generate random amounts
const randomAmount = (max: number = 6_000_000) =>
  Math.floor(Math.random() * max) + 1;

// Labels for all months
const defaultLabels = [
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

const BarChart: React.FC<BarChartProps> = ({
  labels = defaultLabels,
  data: providedData,
  backgroundColor = "#5757d6",
  barThickness = 12,
  maxBarThickness = 30,
  maxValue = 6_000_000,
  stepSize = 1_000_000,
  width = "100%",
  maxWidth = "700px",
  dataLabel = "Amount",
  currencySymbol = "₦",
  generateRandomData = false,
  monthsToShow = 6,
  showAxes = true,
  showLabels = true,
  showTooltip = true,
  showLegend = false,
  barPercentage = 0.9,
  categoryPercentage = 0.9,
}) => {
  const chartLabels =
    labels ||
    Array(monthsToShow)
      .fill(0)
      .map((_, i) => `${i + 1}`);

  const chartData = providedData
    ? providedData
    : generateRandomData
      ? Array(monthsToShow)
          .fill(0)
          .map(() => randomAmount(maxValue))
      : Array(monthsToShow).fill(0);

  const data = {
    labels,
    datasets: [
      {
        label: dataLabel,
        data: chartData,
        backgroundColor,
        borderRadius: { topLeft: 10, topRight: 10 },
        barThickness,
        maxBarThickness,
           barPercentage,
      categoryPercentage,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend,
      },
      tooltip: {
        enabled: showTooltip,
      },
    },
    scales: {
      x: {
        display: showAxes,
        grid: { display: false },
        border: { display: false },
        ticks: {
          display: showLabels,
          color: "#082353",
        },
      },
      y: {
        display: showAxes,
        min: 0,
        max: maxValue,
        ticks: {
          display: showLabels,
          stepSize,
          color: "#082353",
          callback: (tickValue) =>
            `${currencySymbol}${Number(tickValue) / 1_000_000}M`,
        },
        border: { display: false },
      },
    },
  };

  return (
    <div style={{ width, maxWidth }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;

// Generate random data for 12 months
// const data = {
//   defaultLabels,
//   datasets: [
//     {
//       label: "Amount",
//       data: [
//         ...defaultLabels.slice(0, 6).map(() => randomAmount()),
//         ...Array(6).fill(0),
//       ],
//       backgroundColor: "#5757d6",
//       borderRadius: { topLeft: 10, topRight: 10 },
//       barThickness: 12, // automatically adjusts
//       maxBarThickness: 30, // largest width
//       minBarLength: 2,
//     },
//   ],
// };

// Chart options
// const options = {
//   responsive: true,
//   scales: {
//     x: {
//       grid: { display: false },
//       border: { display: false },
//       ticks: {
//         color: "#082353",
//       },
//     },
//     y: {
//       min: 0,
//       max: 6_000_000,
//       ticks: {
//         stepSize: 1_000_000,
//         color: "#082353",
//         callback: (tickValue: string | number) =>
//           `₦${Number(tickValue) / 1_000_000}M`,
//       },
//       border: { display: false },
//     },
//   },
// } as const;

// export default function SimpleBarChart() {
//   return (
//     <div style={{ width: "100%", maxWidth: "700px" }}>
//       <Bar data={data} options={options} />
//     </div>
//   );
// }
