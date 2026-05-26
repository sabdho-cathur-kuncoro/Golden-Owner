import { FontFamily, greyColor } from "@/constants/theme";
import React, { useState } from "react";
import { LayoutChangeEvent, View } from "react-native";
import Svg, {
  Defs,
  Line,
  LinearGradient,
  Path,
  Stop,
  Text as SvgText,
} from "react-native-svg";

type Props = {
  data: { day: string; value: number }[];
  color?: string;
  height?: number;
};

const PADDING_H = 16;
const PADDING_V = 20;
const LABEL_HEIGHT = 20;

function smoothPath(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x},${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? pts[i + 1];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
  }
  return d;
}

export default function LineChart({ data, color = "#000", height = 160 }: Props) {
  const [width, setWidth] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const onLayout = (e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width);

  if (width === 0 || data.length < 2) {
    return <View style={{ height }} onLayout={onLayout} />;
  }

  const chartWidth = width - PADDING_H * 2;
  const chartHeight = height - PADDING_V * 2 - LABEL_HEIGHT;
  const baseline = PADDING_V + chartHeight;

  const values = data.map((d) => d.value);
  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  const range = maxVal - minVal || 1;

  const points = data.map((d, i) => ({
    x: PADDING_H + (i / (data.length - 1)) * chartWidth,
    y: PADDING_V + (1 - (d.value - minVal) / range) * chartHeight,
    label: d.day,
  }));

  const handleTouchX = (locationX: number) => {
    const nearest = points.reduce(
      (best, _, i) =>
        Math.abs(points[i].x - locationX) < Math.abs(points[best].x - locationX)
          ? i
          : best,
      0
    );
    setSelectedIndex(nearest);
  };

  const linePath = smoothPath(points);
  const lastPt = points[points.length - 1];
  const areaPath = `${linePath} L ${lastPt.x},${baseline} L ${points[0].x},${baseline} Z`;

  return (
    <View
      onLayout={onLayout}
      style={{ height }}
      onStartShouldSetResponder={() => true}
      onResponderGrant={(e) => handleTouchX(e.nativeEvent.locationX)}
      onResponderMove={(e) => handleTouchX(e.nativeEvent.locationX)}
      onResponderRelease={() => setSelectedIndex(null)}
    >
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={color} stopOpacity={0.18} />
            <Stop offset="1" stopColor={color} stopOpacity={0} />
          </LinearGradient>
        </Defs>
        <Path d={areaPath} fill="url(#areaGrad)" />
        <Path d={linePath} stroke={color} strokeWidth={2} fill="none" />
        {selectedIndex !== null && (
          <Line
            x1={points[selectedIndex].x}
            y1={PADDING_V}
            x2={points[selectedIndex].x}
            y2={baseline}
            stroke={color}
            strokeWidth={1}
            strokeDasharray="4,4"
            strokeOpacity={0.6}
          />
        )}
        {points.map((p, i) => (
          <SvgText
            key={`label-${i}`}
            x={p.x}
            y={height - 4}
            textAnchor="middle"
            fontSize={11}
            fontFamily={FontFamily.satoshiRegular}
            fill={greyColor}
          >
            {p.label}
          </SvgText>
        ))}
      </Svg>
    </View>
  );
}
