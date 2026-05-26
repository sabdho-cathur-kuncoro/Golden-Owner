import { AnimatedPressable, KpiCard, LineChart } from "@/components/ui";
import {
  HomeKpi,
  HomeKpiTrend,
  MonthlyChartData,
  OwnerProfile,
} from "@/constants/dummy";
import {
  bgColor,
  blackColor,
  dot,
  FontFamily,
  greenColor,
  greyColor,
  primaryColor,
  redColor,
  SPACE_16,
  SPACE_24,
  strokeColor,
  whiteColor,
} from "@/constants/theme";
import { useBottomSheetStore } from "@/stores/bottomSheet.store";
import { Bell, ChevronDown } from "lucide-react-native";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { compactCurrency } from "../../../../utils/currencyFormat";

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

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const openSheet = useBottomSheetStore((s) => s.open);
  const closeSheet = useBottomSheetStore((s) => s.close);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greetLabel}>Welcome back,</Text>
          <Text style={styles.greetName}>{OwnerProfile.name}</Text>
        </View>
        <AnimatedPressable onPress={() => {}}>
          <View style={styles.bellContainer}>
            <Bell size={20} color={primaryColor} />
            <View style={[dot, styles.bellDot]} />
          </View>
        </AnimatedPressable>
      </View>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* KPI Row 1 */}
        <View style={styles.kpiRow}>
          <KpiCard
            label="SALES THIS MONTH"
            value={compactCurrency(HomeKpi.sales_this_month)}
            valueColor={primaryColor}
            trend={HomeKpiTrend.sales.trend}
            percentage={`${HomeKpiTrend.sales.change}%`}
          />
          <View style={{ width: SPACE_16 }} />
          <KpiCard
            label="TOTAL ORDERS"
            value={String(HomeKpi.total_orders)}
            valueColor={primaryColor}
            trend={HomeKpiTrend.orders.trend}
            percentage={`${HomeKpiTrend.orders.change}%`}
          />
        </View>

        <View style={{ height: SPACE_16 }} />

        {/* KPI Row 2 */}
        <View style={styles.kpiRow}>
          <KpiCard
            label="RETURN RATE"
            value={`${HomeKpi.return_rate}%`}
            valueColor={redColor}
            trend={HomeKpiTrend.return_rate.trend}
            percentage={`${HomeKpiTrend.return_rate.change}%`}
          />
          <View style={{ width: SPACE_16 }} />
          <KpiCard
            label="GROSS PROFIT"
            value={compactCurrency(HomeKpi.gross_profit)}
            valueColor={greenColor}
            trend={HomeKpiTrend.gross_profit.trend}
            percentage={`${HomeKpiTrend.gross_profit.change}%`}
          />
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: bgColor,
    paddingHorizontal: SPACE_16,
    paddingVertical: SPACE_16,
  },
  greetLabel: {
    fontSize: 13,
    fontFamily: FontFamily.satoshiRegular,
    color: greyColor,
  },
  greetName: {
    fontSize: 20,
    fontFamily: FontFamily.satoshiBold,
    color: blackColor,
    marginTop: 2,
  },
  bellContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: strokeColor,
    alignItems: "center",
    justifyContent: "center",
  },
  bellDot: {
    position: "absolute",
    top: 6,
    right: 6,
  },
  scroll: {
    paddingHorizontal: SPACE_16,
    paddingTop: SPACE_16,
    paddingBottom: 100,
  },
  kpiRow: {
    flexDirection: "row",
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
