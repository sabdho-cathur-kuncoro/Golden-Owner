import {
  bgTertiaryColor,
  blackTextStyle,
  darkBlueColor,
  darkBlueRGBAColor,
  FontFamily,
  greenColor,
  greenRGBAColor,
  greyTextStyle,
  lineColor,
  primaryColor,
  SPACE_16,
  whiteColor,
} from "@/constants/theme";
import { FontAwesome6 } from "@expo/vector-icons";
import { BadgeCheck } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatDate } from "../../../utils/days";
import AnimatedPressable from "./AnimatedPressable";
import Gap from "./Gap";

const TileNotif = React.memo(({ data, onPress }: any) => {
  const isDelivery = data?.type === "delivery";
  const isUnread = !data?.is_read;

  return (
    <AnimatedPressable onPress={onPress}>
      <View
        style={[
          styles.cardContainer,
          { backgroundColor: isUnread ? bgTertiaryColor : whiteColor },
        ]}
      >
        {isUnread && <View style={styles.unreadDot} />}
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: isDelivery ? darkBlueRGBAColor : greenRGBAColor,
            },
          ]}
        >
          {isDelivery ? (
            <FontAwesome6 name={"truck-fast"} size={24} color={darkBlueColor} />
          ) : (
            <BadgeCheck size={28} color={greenColor} />
          )}
        </View>
        <Gap height={SPACE_16} />
        <Text
          style={[
            blackTextStyle,
            {
              fontFamily: isUnread
                ? FontFamily.satoshiBold
                : FontFamily.satoshiMedium,
            },
          ]}
        >
          {data?.title ?? "-"}
        </Text>
        <Gap height={SPACE_16} />
        {isDelivery ? (
          <Text style={[greyTextStyle, { fontSize: 12 }]}>
            Pesanan{" "}
            <Text
              style={[blackTextStyle, { fontFamily: FontFamily.satoshiBold }]}
            >
              {data?.order_id ?? "-"}
            </Text>{" "}
            sedang dalam perjalanan ke lokasi.
          </Text>
        ) : (
          <Text style={[greyTextStyle, { fontSize: 12 }]}>
            Sales{" "}
            <Text
              style={[blackTextStyle, { fontFamily: FontFamily.satoshiBold }]}
            >
              {data?.sales_name ?? "-"}
            </Text>{" "}
            telah menyetujui pesanan{" "}
            <Text
              style={[blackTextStyle, { fontFamily: FontFamily.satoshiBold }]}
            >
              {data?.order_id ?? "-"}.
            </Text>{" "}
            Silakan pantau status selanjutnya di Menu Transaksi.
          </Text>
        )}
        <Gap height={SPACE_16} />
        <Text style={[greyTextStyle, { fontSize: 12 }]}>
          {formatDate(new Date())}
        </Text>
      </View>
    </AnimatedPressable>
  );
});

export default React.memo(TileNotif);

const styles = StyleSheet.create({
  cardContainer: {
    padding: SPACE_16,
    borderRadius: 10,
    marginBottom: SPACE_16,
    borderWidth: 1,
    borderColor: lineColor,
    overflow: "hidden",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  unreadDot: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: primaryColor,
  },
});
