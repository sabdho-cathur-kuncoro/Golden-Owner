import {
  FontFamily,
  greenColor,
  greyColor,
  primaryColor,
  redColor,
  SPACE_16,
  SPACE_4,
  SPACE_8,
  whiteColor,
} from "@/constants/theme";
import { TrendingDown, TrendingUp } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
  value: string;
  valueColor?: string;
  flex?: number;
  percentage?: string;
  trend?: "up" | "down";
};

export default function KpiCard({
  label,
  value,
  valueColor = primaryColor,
  flex = 1,
  percentage,
  trend,
}: Props) {
  const trendColor = trend === "up" ? greenColor : redColor;

  return (
    <View style={[styles.card, { flex }]}>
      <Text style={styles.label}>{label}</Text>
      <Text
        style={[styles.value, { color: valueColor }]}
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.7}
      >
        {value}
      </Text>
      {trend !== undefined && percentage !== undefined && (
        <View style={styles.trendRow}>
          {trend === "up" ? (
            <TrendingUp size={14} color={trendColor} />
          ) : (
            <TrendingDown size={14} color={trendColor} />
          )}
          <Text style={[styles.percentage, { color: trendColor }]}>
            {" "}
            {percentage}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: whiteColor,
    borderRadius: 12,
    padding: SPACE_16,
  },
  label: {
    fontFamily: FontFamily.satoshiRegular,
    color: greyColor,
    marginBottom: SPACE_8,
  },
  value: {
    fontSize: 20,
    fontFamily: FontFamily.satoshiBold,
    marginBottom: SPACE_4,
  },
  trendRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SPACE_4,
  },
  percentage: {
    fontSize: 12,
    fontFamily: FontFamily.satoshiMedium,
  },
});
