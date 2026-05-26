import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

type SliceData = { label: string; percent: number; color: string };
type Props = { data: SliceData[]; size?: number };

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function buildArcPath(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  startAngle: number,
  endAngle: number
): string {
  const s1 = polarToCartesian(cx, cy, outerR, startAngle);
  const e1 = polarToCartesian(cx, cy, outerR, endAngle);
  const s2 = polarToCartesian(cx, cy, innerR, endAngle);
  const e2 = polarToCartesian(cx, cy, innerR, startAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return [
    `M ${s1.x} ${s1.y}`,
    `A ${outerR} ${outerR} 0 ${large} 1 ${e1.x} ${e1.y}`,
    `L ${s2.x} ${s2.y}`,
    `A ${innerR} ${innerR} 0 ${large} 0 ${e2.x} ${e2.y}`,
    "Z",
  ].join(" ");
}

export default function DonutChart({ data, size = 120 }: Props) {
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size / 2 - 4;
  const innerR = outerR * 0.58;
  const gap = 1;

  const total = data.reduce((s, d) => s + d.percent, 0);
  let cursor = 0;

  return (
    <Svg width={size} height={size}>
      {data.map((d) => {
        const sweep = (d.percent / total) * 360;
        const start = cursor + gap;
        const end = cursor + sweep - gap;
        cursor += sweep;
        if (sweep <= gap * 2) return null;
        return (
          <Path
            key={d.label}
            d={buildArcPath(cx, cy, outerR, innerR, start, end)}
            fill={d.color}
          />
        );
      })}
    </Svg>
  );
}
