import { Gap, Header } from "@/components/ui";
import {
  bgColor,
  blueColor,
  blueRGBAColor,
  blueTextStyle,
  FontFamily,
  greyTertiaryColor,
  greyTextStyle,
  orangeColor,
  orangeRGBAColor,
  paddingScroll,
  redColor,
  redRGBAColor,
  rowCenter,
  screen,
  SPACE_16,
  SPACE_4,
  whiteColor,
} from "@/constants/theme";
import { router } from "expo-router";
import {
  ChartColumn,
  ChevronRight,
  Package,
  RotateCcw,
} from "lucide-react-native";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const MenuReport = [
  {
    id: 1,
    title: "Sales Report",
    subTitle: "Monitor revenue, profit, and sales trends accross outlets.",
    icon: () => <ChartColumn size={24} color={blueColor} />,
    bg: blueRGBAColor,
    route: "/sales-report",
  },
  {
    id: 2,
    title: "Outlet Stock Report",
    subTitle: "Realtime inventory levels and reorder recommendations.",
    icon: () => <Package size={24} color={orangeColor} />,
    bg: orangeRGBAColor,
    route: "/outlet-stock-report",
  },
  {
    id: 3,
    title: "Return Report",
    subTitle: "Analyze return rates, reasons, and damaged goods.",
    icon: () => <RotateCcw size={24} color={redColor} />,
    bg: redRGBAColor,
    route: "/return-report",
  },
];

const Report = () => {
  return (
    <View style={[screen, { backgroundColor: whiteColor }]}>
      <Header title={"Report"} isNotifVisible />
      <ScrollView
        style={{ flex: 1, backgroundColor: bgColor }}
        contentContainerStyle={[paddingScroll]}
      >
        {MenuReport.map((data: any) => {
          return (
            <Pressable
              onPress={() => router.push(data.route)}
              key={data.id}
              style={[rowCenter, styles.tileContainer]}
            >
              <View style={{ width: "15%" }}>
                <View
                  style={[
                    styles.iconTileContainer,
                    { backgroundColor: data.bg },
                  ]}
                >
                  {data.icon()}
                </View>
              </View>
              <View style={{ width: "70%" }}>
                <Text
                  style={[
                    blueTextStyle,
                    { fontFamily: FontFamily.satoshiBold },
                  ]}
                >
                  {data.title}
                </Text>
                <Gap height={SPACE_4} />
                <Text style={[greyTextStyle, { fontSize: 12 }]}>
                  {data.subTitle}
                </Text>
              </View>
              <View
                style={{
                  width: "10%",
                  alignItems: "flex-end",
                }}
              >
                <ChevronRight size={24} color={greyTertiaryColor} />
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  tileContainer: {
    width: "100%",
    padding: SPACE_16,
    borderRadius: SPACE_16,
    backgroundColor: whiteColor,
    marginBottom: SPACE_16,
  },
  iconTileContainer: {
    width: 52,
    height: 52,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
