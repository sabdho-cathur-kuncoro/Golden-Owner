import { Gap, Header, WeeklyBarChart } from "@/components/ui";
import { OutletStockReportData } from "@/constants/dummy";
import {
  bgColor,
  blackColor,
  blackTextStyle,
  FontFamily,
  greenColor,
  greenRGBAColor,
  greenTextStyle,
  greyTextStyle,
  line,
  lineColor,
  orangeColor,
  orangeRGBAColor,
  paddingScroll,
  primaryColor,
  primaryTextStyle,
  redColor,
  redRGBAColor,
  redTextStyle,
  rowCenter,
  screen,
  SPACE_16,
  SPACE_24,
  SPACE_4,
  whiteColor,
} from "@/constants/theme";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

function getStockStatus(stock: number) {
  if (stock < 100)
    return { label: "Rendah", color: redColor, bgColor: redRGBAColor };
  if (stock <= 200)
    return { label: "Sedang", color: orangeColor, bgColor: orangeRGBAColor };
  return { label: "Aman", color: greenColor, bgColor: greenRGBAColor };
}

const OutletStockReportDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const outlet = OutletStockReportData.find((o) => o.id === id);

  if (!outlet) return null;

  const totalSKU = outlet.items.length;
  const totalUnits = outlet.items.reduce((sum, i) => sum + i.stock, 0);
  const lowStockCount = outlet.items.filter((i) => i.stock < 100).length;
  const avgStock = Math.round(totalUnits / totalSKU);

  const chartData = outlet.items.map((item) => ({
    day: item.product.split(" ").slice(0, 2).join(" "),
    value: item.stock,
  }));

  return (
    <View style={[screen, { backgroundColor: whiteColor }]}>
      <Header title={outlet.outlet} onBack={() => router.back()} />
      <ScrollView
        style={{ flex: 1, backgroundColor: bgColor }}
        contentContainerStyle={paddingScroll}
        showsVerticalScrollIndicator={false}
      >
        {/* KPI Cards Row 1 */}
        <View style={[rowCenter]}>
          <View style={{ width: "48%" }}>
            <View style={styles.cardContainer}>
              <Text
                style={[
                  greyTextStyle,
                  { fontSize: 12, fontFamily: FontFamily.satoshiBold },
                ]}
              >
                Total SKU
              </Text>
              <Gap height={10} />
              <Text
                style={[
                  { fontFamily: FontFamily.satoshiBold },
                  { color: primaryColor },
                ]}
              >
                {totalSKU} Produk
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
                Total Unit
              </Text>
              <Gap height={10} />
              <Text
                style={[greenTextStyle, { fontFamily: FontFamily.satoshiBold }]}
              >
                {totalUnits} pcs
              </Text>
            </View>
          </View>
        </View>

        <Gap height={SPACE_16} />

        {/* KPI Cards Row 2 */}
        <View style={[rowCenter]}>
          <View style={{ width: "48%" }}>
            <View style={styles.cardContainer}>
              <Text
                style={[
                  greyTextStyle,
                  { fontSize: 12, fontFamily: FontFamily.satoshiBold },
                ]}
              >
                Stok Rendah
              </Text>
              <Gap height={10} />
              <Text
                style={[redTextStyle, { fontFamily: FontFamily.satoshiBold }]}
              >
                {lowStockCount} Item
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
                Rata-rata Stok
              </Text>
              <Gap height={10} />
              <Text
                style={[
                  primaryTextStyle,
                  { fontFamily: FontFamily.satoshiBold },
                ]}
              >
                {avgStock} pcs
              </Text>
            </View>
          </View>
        </View>

        {/* Chart section */}
        <View style={styles.section}>
          <View style={styles.chartCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Distribusi Stok</Text>
            </View>
            <WeeklyBarChart
              data={chartData}
              color={primaryColor}
              height={160}
            />
          </View>
        </View>

        {/* Product list */}
        <View style={styles.section}>
          <View style={styles.cardContainer}>
            <View style={[rowCenter]}>
              <Text
                style={[
                  blackTextStyle,
                  { fontFamily: FontFamily.satoshiMedium },
                ]}
              >
                Daftar Produk
              </Text>
              <Text
                style={[
                  greyTextStyle,
                  { fontFamily: FontFamily.satoshiMedium, fontSize: 12 },
                ]}
              >
                {totalSKU} Produk
              </Text>
            </View>
            <Gap height={20} />
            <View style={[line]} />
            <Gap height={20} />
            {outlet.items.map((item, index) => {
              const isLast = index === outlet.items.length - 1;
              const status = getStockStatus(item.stock);
              return (
                <View
                  key={item.product}
                  style={[
                    rowCenter,
                    {
                      paddingBottom: isLast ? 0 : 12,
                      marginBottom: isLast ? 0 : 12,
                      borderBottomWidth: isLast ? 0 : 1,
                      borderBottomColor: lineColor,
                      alignItems: "flex-start",
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
                      {item.product}
                    </Text>
                    <Gap height={SPACE_4} />
                    <View
                      style={[
                        styles.badge,
                        { backgroundColor: status.bgColor },
                      ]}
                    >
                      <Text
                        style={[styles.badgeText, { color: status.color }]}
                      >
                        {status.label}
                      </Text>
                    </View>
                  </View>
                  <View style={{ width: "49%", alignItems: "flex-end" }}>
                    <Text
                      style={[
                        primaryTextStyle,
                        { fontFamily: FontFamily.satoshiBold },
                      ]}
                    >
                      {item.stock}
                    </Text>
                    <Gap height={SPACE_4} />
                    <Text style={[greyTextStyle, { fontSize: 12 }]}>
                      {item.unit}
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

export default OutletStockReportDetail;

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
  badge: {
    alignSelf: "flex-start",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 11,
    fontFamily: FontFamily.satoshiMedium,
  },
});
