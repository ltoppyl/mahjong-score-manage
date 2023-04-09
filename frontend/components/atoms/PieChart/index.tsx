import React from "react";
import { Cell, Pie, PieChart } from "recharts";

type Props = {
  dataList: { name: string; value: number }[];
};
export const DonutChart = ({ dataList }: Props) => {
  const COLORS = ["#28A745", "#17A2B8", "#6C757D", "#DC3545"];

  const RADIAN = Math.PI / 180;

  type RenderCustomizedLabelProps = {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
  };

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: RenderCustomizedLabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${index + 1}着:${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <PieChart width={200} height={200}>
        <Pie
          data={dataList}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          innerRadius={40}
          dataKey="value"
        >
          {dataList.map((data, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
};
