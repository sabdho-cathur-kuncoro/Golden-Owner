import { Gap, Header, LineChart } from "@/components/ui";
import {
  MonthlyChartData,
  RevenueByOutlet,
  RevenueByProduct,
} from "@/constants/dummy";
import {
  bgColor,
  blackColor,
  blackTextStyle,
  blueTextStyle,
  FontFamily,
  greenTextStyle,
  greyColor,
  greyTextStyle,
  line,
  lineColor,
  paddingScroll,
  primaryColor,
  primaryTextStyle,
  redTextStyle,
  rowCenter,
  screen,
  SPACE_16,
  SPACE_24,
  SPACE_4,
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

const SalesReport = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const openSheet = useBottomSheetStore((s) => s.open);
  const closeSheet = useBottomSheetStore((s) => s.close);
  return (
    <View style={[screen, { backgroundColor: whiteColor }]}>
      <Header title={"Sales Report"} onBack={() => router.back()} />
      <ScrollView
        style={{ flex: 1, backgroundColor: bgColor }}
        contentContainerStyle={[paddingScroll]}
        showsVerticalScrollIndicator={false}
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
                Total Value
              </Text>
              <Gap height={10} />
              <Text
                style={[blueTextStyle, { fontFamily: FontFamily.satoshiBold }]}
              >
                {compactCurrency(842_500_000)}
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
                Net Revenue
              </Text>
              <Gap height={10} />
              <Text
                style={[greenTextStyle, { fontFamily: FontFamily.satoshiBold }]}
              >
                {compactCurrency(710_200_000)}
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
                Total Profit
              </Text>
              <Gap height={10} />
              <Text
                style={[
                  primaryTextStyle,
                  { fontFamily: FontFamily.satoshiBold },
                ]}
              >
                {compactCurrency(312_800_000)}
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
                AVG Margin
              </Text>
              <Gap height={10} />
              <Text
                style={[redTextStyle, { fontFamily: FontFamily.satoshiBold }]}
              >
                38.5%
              </Text>
            </View>
          </View>
        </View>

        {/* Chart section */}
        <View style={styles.section}>
          <View style={styles.chartCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Weekly Revenue Trend</Text>
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

            <LineChart
              data={MonthlyChartData[selectedMonth]}
              color={primaryColor}
              height={160}
            />
          </View>
        </View>

        {/* Revenue by Outlet */}
        <View style={styles.section}>
          <View style={styles.cardContainer}>
            <View style={[rowCenter]}>
              <Text
                style={[
                  blackTextStyle,
                  { fontFamily: FontFamily.satoshiMedium },
                ]}
              >
                Revenue by Outlet
              </Text>
              <Text
                style={[
                  greyTextStyle,
                  { fontFamily: FontFamily.satoshiMedium, fontSize: 12 },
                ]}
              >
                Top 5 Outlet
              </Text>
            </View>
            <Gap height={20} />
            <View style={[line]} />
            <Gap height={20} />
            {RevenueByOutlet.map((data: any, index: any) => {
              const isLast = index === RevenueByOutlet.length - 1;
              return (
                <View
                  key={data.id}
                  style={[
                    rowCenter,
                    {
                      paddingBottom: isLast ? 0 : 12,
                      marginBottom: isLast ? 0 : 12,
                      borderBottomWidth: isLast ? 0 : 1,
                      borderBottomColor: lineColor,
                    },
                  ]}
                >
                  <View style={{ width: "49%" }}>
                    <Text
                      style={[
                        blackTextStyle,
                        { fontFamily: FontFamily.satoshiBold },
                      ]}
                    >
                      {data.name}
                    </Text>
                    <Gap height={SPACE_4} />
                  </View>
                  <View style={{ width: "49%", alignItems: "flex-end" }}>
                    <Text
                      style={[
                        primaryTextStyle,
                        { fontFamily: FontFamily.satoshiBold },
                      ]}
                    >
                      {compactCurrency(data.revenue)}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        {/* Revenue by Product */}
        <View style={styles.section}>
          <View style={styles.cardContainer}>
            <Text
              style={[blackTextStyle, { fontFamily: FontFamily.satoshiMedium }]}
            >
              Revenue by Product
            </Text>
            <Gap height={20} />
            <View style={[line]} />
            <Gap height={20} />
            {RevenueByProduct.map((data: any, index: any) => {
              const isLast = index === RevenueByProduct.length - 1;
              return (
                <View
                  key={data.id}
                  style={[
                    rowCenter,
                    {
                      paddingBottom: isLast ? 0 : 12,
                      marginBottom: isLast ? 0 : 12,
                      borderBottomWidth: isLast ? 0 : 1,
                      borderBottomColor: lineColor,
                    },
                  ]}
                >
                  <View style={{ width: "49%" }}>
                    <Text
                      style={[
                        blackTextStyle,
                        { fontFamily: FontFamily.satoshiBold },
                      ]}
                    >
                      {data.name}
                    </Text>
                    <Gap height={SPACE_4} />
                  </View>
                  <View style={{ width: "49%", alignItems: "flex-end" }}>
                    <Text
                      style={[
                        primaryTextStyle,
                        { fontFamily: FontFamily.satoshiBold },
                      ]}
                    >
                      {compactCurrency(data.revenue)}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SalesReport;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    padding: 10,
    borderRadius: 8,
    backgroundColor: whiteColor,
  },
  section: {
    marginTop: SPACE_24,
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
  cardTitle: {
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
});
