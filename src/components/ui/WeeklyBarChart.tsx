import React, { useState } from "react";
import { View } from "react-native";
import Svg, { G, Rect, Text as SvgText } from "react-native-svg";

type BarData = { day: string; value: number };
type Props = { data: BarData[]; color?: string; height?: number };

export default function WeeklyBarChart({
  data,
  color = "#1C0867",
  height = 160,
}: Props) {
  const [svgWidth, setSvgWidth] = useState(300);
  const labelHeight = 24;
  const barAreaHeight = height - labelHeight;
  const maxValue = Math.max(...data.map((d) => d.value), 1);
  const barCount = data.length;
  const paddingH = 4;
  const slotWidth = (svgWidth - paddingH * 2) / barCount;
  const barWidth = slotWidth * 0.55;

  return (
    <View
      onLayout={(e) => setSvgWidth(e.nativeEvent.layout.width)}
      style={{ width: "100%" }}
    >
      <Svg width={svgWidth} height={height}>
        {data.map((d, i) => {
          const barH = Math.max((d.value / maxValue) * barAreaHeight, 2);
          const x = paddingH + i * slotWidth + (slotWidth - barWidth) / 2;
          const y = barAreaHeight - barH;
          return (
            <G key={d.day}>
              <Rect
                x={x}
                y={y}
                width={barWidth}
                height={barH}
                rx={4}
                fill={color}
                opacity={d.value === maxValue ? 1 : 0.45}
              />
              <SvgText
                x={x + barWidth / 2}
                y={height - 4}
                textAnchor="middle"
                fontSize={11}
                fill="#6C7278"
              >
                {d.day}
              </SvgText>
            </G>
          );
        })}
      </Svg>
    </View>
  );
}
