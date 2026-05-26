import { Gap, Header } from "@/components/ui";
import { NotifData } from "@/constants/dummy";
import {
  blackTextStyle,
  darkBlueColor,
  darkBlueRGBAColor,
  FontFamily,
  greenColor,
  greenRGBAColor,
  greyTextStyle,
  lineColor,
  mainContent,
  screen,
  SPACE_16,
  SPACE_8,
  whiteColor,
} from "@/constants/theme";
import { FontAwesome6 } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { BadgeCheck } from "lucide-react-native";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { formatDate } from "../../../utils/days";

const NotifikasiDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const data = NotifData.find((n) => n.id === Number(id));

  const isDelivery = data?.type === "delivery";

  return (
    <View style={[screen, { backgroundColor: whiteColor }]}>
      <Header title="Detail Notifikasi" onBack={() => router.back()} />
      <View style={mainContent}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          {data ? (
            <View style={styles.card}>
              {/* Icon + badge row */}
              <View style={styles.iconRow}>
                <View
                  style={[
                    styles.iconContainer,
                    {
                      backgroundColor: isDelivery
                        ? darkBlueRGBAColor
                        : greenRGBAColor,
                    },
                  ]}
                >
                  {isDelivery ? (
                    <FontAwesome6
                      name="truck-fast"
                      size={24}
                      color={darkBlueColor}
                    />
                  ) : (
                    <BadgeCheck size={28} color={greenColor} />
                  )}
                </View>
                <Gap height={0} />
                <View
                  style={[
                    styles.badge,
                    {
                      backgroundColor: isDelivery
                        ? darkBlueRGBAColor
                        : greenRGBAColor,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      { color: isDelivery ? darkBlueColor : greenColor },
                    ]}
                  >
                    {isDelivery ? "Pengiriman" : "Persetujuan"}
                  </Text>
                </View>
              </View>

              <Gap height={SPACE_16} />

              {/* Title */}
              <Text style={styles.title}>{data.title}</Text>

              <Gap height={SPACE_8} />

              {/* Snipet */}
              <Text style={[greyTextStyle, { fontSize: 14, lineHeight: 22 }]}>
                {data.snipet}
              </Text>

              <Gap height={SPACE_16} />
              <View style={styles.divider} />
              <Gap height={SPACE_16} />

              {/* Info rows */}
              <InfoRow label="No. Pesanan" value={data.order_id} />
              <Gap height={SPACE_8} />
              <InfoRow label="Sales" value={data.sales_name} />
              <Gap height={SPACE_8} />
              <InfoRow label="ID Sales" value={data.sales_id} />

              <Gap height={SPACE_16} />
              <View style={styles.divider} />
              <Gap height={SPACE_16} />

              {/* Date */}
              <Text style={[greyTextStyle, { fontSize: 12 }]}>
                {data.created_at ? formatDate(data.created_at) : "Hari ini"}
              </Text>
            </View>
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={greyTextStyle}>Notifikasi tidak ditemukan.</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoRow}>
    <Text style={[greyTextStyle, { fontSize: 13, flex: 1 }]}>{label}</Text>
    <Text
      style={[
        blackTextStyle,
        {
          fontSize: 13,
          fontFamily: FontFamily.satoshiMedium,
          flex: 1.2,
          textAlign: "right",
        },
      ]}
    >
      {value ?? "-"}
    </Text>
  </View>
);

export default NotifikasiDetail;

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: whiteColor,
    borderRadius: 10,
    padding: SPACE_16,
    borderWidth: 1,
    borderColor: lineColor,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 12,
    fontFamily: FontFamily.satoshiMedium,
  },
  title: {
    ...blackTextStyle,
    fontSize: 16,
    fontFamily: FontFamily.satoshiBold,
  },
  divider: {
    height: 1,
    backgroundColor: lineColor,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
});
