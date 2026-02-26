import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Label,
  PieLabelRenderProps,
  Tooltip,
} from "recharts";
import { percentageDefaultedMonthly, percentagePaidMonthly } from "./constants";

type Description = "Active Payment" | "Disbursed";
interface ProgressPieProps {
  data?: { name: string; value: number }[];
  colors?: string[];
  description?: Description;
}
// export const randomValue = Math.floor(Math.random() * 30) + 60;

const defaultData = [
  { name: "Active payment", value: percentagePaidMonthly },
  { name: "Default", value: percentageDefaultedMonthly },
];

const defaultColors = ["#31abdb", "#fab83d"];

const ProgressPie: React.FC<ProgressPieProps> = ({
  data = defaultData,
  colors = defaultColors,
  description = "Active Payment",
}) => {
  return (
    <div
      style={{ width: 230, height: 197 }}
      className=" bg-[#e1f5f8] rounded-2xl"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={78}
            paddingAngle={0}
            startAngle={90}
            endAngle={-270}
          >
            {data.map((_, i) => (
              <Cell
                key={i}
                fill={colors[i]}
                stroke="none"
                style={{ cursor: "pointer" }}
              />
            ))}
            <Label
              position="center"
              content={() => (
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  <tspan
                    x="50%"
                    y="50%"
                    dy="-0.3em"
                    fontSize="22"
                    fill="#31abdb"
                    fontWeight="bold"
                  >
                    {percentagePaidMonthly}%
                  </tspan>
                  <tspan x="50%" dy="2em" fontSize="12" fill="#000">
                    {description}
                  </tspan>
                </text>
              )}
            />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressPie;
