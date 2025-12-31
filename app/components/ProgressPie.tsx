"use client";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Label,
  PieLabelRenderProps,
} from "recharts";

const data = [
  { name: "Active payment", value: 75 },
  { name: "Default", value: 25 },
];

const COLORS = ["#31abdb", "#fab83d"];

export default function ProgressPie() {
  return (
    <div style={{ width: 230, height: 197 }} className=" bg-[#e1f5f8] rounded-2xl">
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
              <Cell key={i} fill={COLORS[i]} stroke="none" />
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
                  <tspan x="50%" y="50%" dy="-0.3em" fontSize="22" fill="#31abdb" fontWeight="bold">
                    75%
                  </tspan>
                  <tspan x="50%" dy="2em" fontSize="12"  fill="#000">
                    Active Payment
                  </tspan>
                </text>
              )}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
