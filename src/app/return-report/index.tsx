import { DonutChart, Gap, Header, WeeklyBarChart } from "@/components/ui";
import {
  MonthlyReturnChartData,
  MonthlyReturnReasonsData,
} from "@/constants/dummy";
import {
  bgColor,
  blackColor,
  blackTextStyle,
  blueSecondaryColor,
  blueTextStyle,
  FontFamily,
  greyColor,
  greySecondaryColor,
  greyTextStyle,
  orangeColor,
  orangeTextStyle,
  paddingScroll,
  primaryColor,
  redColor,
  rowCenter,
  screen,
  SPACE_16,
  SPACE_24,
  strokeColor,
  whiteColor,
} from "@/constants/theme";
import { useBottomSheetStore } from "@/stores/bottomSheet.store";
import { router } from "expo-router";
import { ChevronDown } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { compactCurrency } from "../../../utils/currencyFormat";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

const REASON_CATEGORIES = [
  { label: "Damaged", color: redColor },
  { label: "Expired", color: orangeColor },
  { label: "Wrong Item", color: blueSecondaryColor },
  { label: "Other", color: greySecondaryColor },
];

const ReturnReport = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedReasonMonth, setSelectedReasonMonth] = useState(
    new Date().getMonth()
  );
  const openSheet = useBottomSheetStore((s) => s.open);
  const closeSheet = useBottomSheetStore((s) => s.close);

  const reasonData = REASON_CATEGORIES.map((c, i) => ({
    ...c,
    percent: MonthlyReturnReasonsData[selectedReasonMonth][i],
  }));

  return (
    <View style={[screen, { backgroundColor: whiteColor }]}>
      <Header title={"Return Report"} onBack={() => router.back()} />
      <ScrollView
        style={{ flex: 1, backgroundColor: bgColor }}
        contentContainerStyle={paddingScroll}
      >
        <View style={[rowCenter]}>
          <View style={{ width: "48%" }}>
            <View style={styles.cardContainer}>
              <Text
                style={[
                  greyTextStyle,
                  { fontSize: 12, fontFamily: FontFamily.satoshiBold },
                ]}
              >
                Total Return Value
              </Text>
              <Gap height={10} />
              <Text
                style={[blueTextStyle, { fontFamily: FontFamily.satoshiBold }]}
              >
                {compactCurrency(12_500_000_000)}
              </Text>
              <Gap height={10} />
              <Text style={[orangeTextStyle, { fontSize: 12 }]}>
                +5.2% vs last mont
              </Text>
            </View>
          </View>
          <View style={{ width: "48%" }}>
            <View style={styles.cardContainer}>
              <Text
                style={[
                  greyTextStyle,
                  { fontSize: 12, fontFamily: FontFamily.satoshiBold },
                ]}
              >
                Return Rate
              </Text>
              <Gap height={10} />
              <Text
                style={[blueTextStyle, { fontFamily: FontFamily.satoshiBold }]}
              >
                1.2%
              </Text>
              <Gap height={10} />
              <Text style={[orangeTextStyle, { fontSize: 12 }]}>
                inudstry AVG: 1.5%
              </Text>
            </View>
          </View>
        </View>
        <Gap height={SPACE_16} />
        <View style={[rowCenter]}>
          <View style={{ width: "48%" }}>
            <View style={styles.cardContainer}>
              <Text
                style={[
                  greyTextStyle,
                  { fontSize: 12, fontFamily: FontFamily.satoshiBold },
                ]}
              >
                Top Product
              </Text>
              <Gap height={10} />
              <Text
                style={[blueTextStyle, { fontFamily: FontFamily.satoshiBold }]}
              >
                Premium Coffee
              </Text>
              <Gap height={10} />
              <Text style={[orangeTextStyle, { fontSize: 12 }]}>
                12 Units return
              </Text>
            </View>
          </View>
          <View style={{ width: "48%" }}>
            <View style={styles.cardContainer}>
              <Text
                style={[
                  greyTextStyle,
                  { fontSize: 12, fontFamily: FontFamily.satoshiBold },
                ]}
              >
                Top Outlet
              </Text>
              <Gap height={10} />
              <Text
                style={[blueTextStyle, { fontFamily: FontFamily.satoshiBold }]}
              >
                Jakarta Pusat
              </Text>
              <Gap height={10} />
              <Text style={[orangeTextStyle, { fontSize: 12 }]}>
                8 returns this week
              </Text>
            </View>
          </View>
        </View>

        {/* Bar chart */}
        <Gap height={SPACE_24} />
        <View style={styles.chartCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.chartTitle}>Tren Return Mingguan</Text>
            <Pressable
              style={styles.dropdown}
              onPress={() =>
                openSheet(
                  <View>
                    {MONTHS.map((month, i) => (
                      <Pressable
                        key={month}
                        style={styles.pickerItem}
                        onPress={() => {
                          setSelectedMonth(i);
                          closeSheet();
                        }}
                      >
                        <Text
                          style={[
                            styles.pickerItemText,
                            selectedMonth === i && styles.pickerItemActive,
                          ]}
                        >
                          {month}
                        </Text>
                      </Pressable>
                    ))}
                  </View>,
                  ["55%"],
                  <View style={styles.pickerHeader}>
                    <Text style={styles.pickerTitle}>Pilih Bulan</Text>
                  </View>
                )
              }
            >
              <Text style={styles.dropdownText}>{MONTHS[selectedMonth]}</Text>
              <ChevronDown size={14} color={greyColor} />
            </Pressable>
          </View>
          <WeeklyBarChart
            data={MonthlyReturnChartData[selectedMonth]}
            color={redColor}
            height={160}
          />
        </View>

        {/* Donut chart */}
        <Gap height={SPACE_24} />
        <View style={styles.chartCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.chartTitle}>Return Reasons</Text>
            <Pressable
              style={styles.dropdown}
              onPress={() =>
                openSheet(
                  <View>
                    {MONTHS.map((month, i) => (
                      <Pressable
                        key={month}
                        style={styles.pickerItem}
                        onPress={() => {
                          setSelectedReasonMonth(i);
                          closeSheet();
                        }}
                      >
                        <Text
                          style={[
                            styles.pickerItemText,
                            selectedReasonMonth === i &&
                              styles.pickerItemActive,
                          ]}
                        >
                          {month}
                        </Text>
                      </Pressable>
                    ))}
                  </View>,
                  ["55%"],
                  <View style={styles.pickerHeader}>
                    <Text style={styles.pickerTitle}>Pilih Bulan</Text>
                  </View>
                )
              }
            >
              <Text style={styles.dropdownText}>
                {MONTHS[selectedReasonMonth]}
              </Text>
              <ChevronDown size={14} color={greyColor} />
            </Pressable>
          </View>
          <View style={styles.donutRow}>
            <DonutChart data={reasonData} size={130} />
            <View style={styles.legendList}>
              {reasonData.map((item) => (
                <View key={item.label} style={styles.legendRow}>
                  <View
                    style={[styles.legendDot, { backgroundColor: item.color }]}
                  />
                  <Text style={[greyTextStyle, styles.legendLabel]}>
                    {item.label}
                  </Text>
                  <Text style={[blackTextStyle, styles.legendPercent]}>
                    {item.percent}%
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ReturnReport;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    padding: 10,
    borderRadius: 8,
    backgroundColor: whiteColor,
  },
  chartCard: {
    backgroundColor: whiteColor,
    borderRadius: 12,
    padding: SPACE_16,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SPACE_16,
  },
  chartTitle: {
    fontSize: 14,
    fontFamily: FontFamily.satoshiBold,
    color: blackColor,
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  dropdownText: {
    fontSize: 13,
    fontFamily: FontFamily.satoshiMedium,
    color: greyColor,
  },
  pickerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SPACE_16,
    paddingVertical: SPACE_16,
    borderBottomWidth: 1,
    borderBottomColor: strokeColor,
  },
  pickerTitle: {
    fontSize: 14,
    fontFamily: FontFamily.satoshiBold,
    color: blackColor,
  },
  pickerItem: {
    paddingHorizontal: SPACE_16,
    paddingVertical: 14,
  },
  pickerItemText: {
    fontSize: 14,
    fontFamily: FontFamily.satoshiMedium,
    color: blackColor,
  },
  pickerItemActive: {
    color: primaryColor,
    fontFamily: FontFamily.satoshiBold,
  },
  donutRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  legendList: {
    flex: 1,
    gap: 10,
  },
  legendRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendLabel: {
    fontSize: 12,
    flex: 1,
  },
  legendPercent: {
    fontSize: 12,
    fontFamily: FontFamily.satoshiBold,
  },
});
