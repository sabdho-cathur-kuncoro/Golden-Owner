import { Gap, Header } from "@/components/ui";
import { OutletStockReportData } from "@/constants/dummy";
import {
  bgColor,
  blackColor,
  blackTextStyle,
  FontFamily,
  greyColor,
  greyTertiaryColor,
  greyTextStyle,
  paddingH,
  paddingScroll,
  primaryTextStyle,
  rowCenter,
  screen,
  SPACE_16,
  SPACE_4,
  whiteColor,
} from "@/constants/theme";
import { router } from "expo-router";
import { ChevronRight, Search } from "lucide-react-native";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const OutletStockReport = () => {
  return (
    <View style={[screen, { backgroundColor: whiteColor }]}>
      <Header title={"Outlet Stock Report"} onBack={() => router.back()} />
      <View
        style={[
          paddingH,
          { width: "100%", backgroundColor: bgColor, paddingTop: SPACE_16 },
        ]}
      >
        <View style={[rowCenter, styles.searchContainer]}>
          <View style={{ width: "8%" }}>
            <Search size={20} color={blackColor} />
          </View>
          <TextInput
            placeholder="Search outlet..."
            placeholderTextColor={greyColor}
            style={[blackTextStyle, { width: "91%" }]}
          />
        </View>
      </View>
      <ScrollView
        style={{ flex: 1, backgroundColor: bgColor }}
        contentContainerStyle={[paddingScroll]}
      >
        {OutletStockReportData.map((data: any) => {
          return (
            <Pressable
              key={data.id}
              style={[rowCenter, styles.tileContainer]}
              onPress={() =>
                router.push({
                  pathname: "/outlet-stock-report/[id]",
                  params: { id: data.id },
                })
              }
            >
              <View style={{ width: "89%" }}>
                <Text
                  style={[
                    primaryTextStyle,
                    { fontSize: 16, fontFamily: FontFamily.satoshiBold },
                  ]}
                >
                  {data.outlet}
                </Text>
                <Gap height={10} />
                <Text
                  style={[
                    greyTextStyle,
                    { fontSize: 12, fontFamily: FontFamily.satoshiMedium },
                  ]}
                >
                  {data.id}
                </Text>
              </View>
              <View style={{ width: "10%", alignItems: "flex-end" }}>
                <ChevronRight size={20} color={greyTertiaryColor} />
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default OutletStockReport;

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: SPACE_16,
    paddingVertical: SPACE_4,
    borderRadius: 12,
    backgroundColor: whiteColor,
  },
  tileContainer: {
    padding: SPACE_16,
    marginBottom: SPACE_16,
    backgroundColor: whiteColor,
    borderRadius: 8,
  },
});
