import { OwnerProfile } from "@/constants/dummy";
import {
  bgColor,
  blackColor,
  blueColor,
  FontFamily,
  greyColor,
  greyTextStyle,
  orangeColor,
  primaryColor,
  purpleColor,
  redColor,
  SPACE_16,
  SPACE_24,
  SPACE_8,
  strokeColor,
  whiteColor,
} from "@/constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { ChevronRight, Lock, LogOut } from "lucide-react-native";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MENU_ITEMS = [
  {
    label: "FAQ",
    subtitle: "Frequently asked questions",
    icon: <AntDesign name="question-circle" size={18} color={blueColor} />,
  },
  {
    label: "Manual Book",
    subtitle: "Comprehensive user guide (PDF)",
    icon: <AntDesign name="book" size={18} color={purpleColor} />,
  },
  {
    label: "Ganti Password",
    subtitle: "Update your login password",
    icon: <Lock size={18} color={orangeColor} />,
  },
];

export default function Profile() {
  const initials = OwnerProfile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.initials}>{initials}</Text>
          </View>
          <Text style={styles.name}>{OwnerProfile.name}</Text>
          <Text style={styles.email}>{OwnerProfile.email}</Text>
          {/* <Pressable style={styles.editBtn} onPress={() => {}}>
            <Pencil size={14} color={primaryColor} />
            <Text style={styles.editBtnText}>Edit Profil</Text>
          </Pressable> */}
        </View>

        <View style={styles.menuGroup}>
          {MENU_ITEMS.map((item) => (
            <Pressable
              key={item.label}
              style={styles.menuCard}
              onPress={() => {}}
            >
              <View style={styles.menuLeft}>
                <View style={styles.iconBg}>{item.icon}</View>
                <View>
                  <Text style={styles.menuLabel}>{item.label}</Text>
                  <Text style={[greyTextStyle, { fontSize: 12 }]}>
                    {item.subtitle}
                  </Text>
                </View>
              </View>
              <ChevronRight size={18} color={greyColor} />
            </Pressable>
          ))}
        </View>

        <Pressable
          style={[styles.menuCard, { marginTop: SPACE_8 }]}
          onPress={() => router.replace("/(auth)/login")}
        >
          <View style={styles.menuLeft}>
            <View style={[styles.iconBg, styles.iconBgRed]}>
              <LogOut size={18} color={redColor} />
            </View>
            <View>
              <Text style={[styles.menuLabel, { color: redColor }]}>
                Keluar
              </Text>
              <Text style={[greyTextStyle, { fontSize: 12 }]}>
                Safely logout from session
              </Text>
            </View>
          </View>
          <ChevronRight size={18} color={redColor} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: bgColor },
  scroll: {
    paddingHorizontal: SPACE_16,
    paddingTop: SPACE_24,
    paddingBottom: 100,
  },
  avatarSection: {
    alignItems: "center",
    marginBottom: SPACE_24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: primaryColor,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACE_16,
  },
  initials: {
    fontSize: 28,
    fontFamily: FontFamily.satoshiBold,
    color: whiteColor,
  },
  name: {
    fontSize: 20,
    fontFamily: FontFamily.satoshiBold,
    color: blackColor,
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    fontFamily: FontFamily.satoshiRegular,
    color: greyColor,
  },
  editBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: strokeColor,
    borderRadius: 8,
    paddingHorizontal: SPACE_16,
    paddingVertical: 8,
    marginTop: SPACE_16,
  },
  editBtnText: {
    fontSize: 13,
    fontFamily: FontFamily.satoshiMedium,
    color: primaryColor,
  },
  menuGroup: {
    gap: SPACE_8,
  },
  menuCard: {
    backgroundColor: whiteColor,
    borderRadius: 12,
    paddingHorizontal: SPACE_16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconBg: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#F9FAFB",
    alignItems: "center",
    justifyContent: "center",
  },
  iconBgRed: {
    backgroundColor: "#FFF1F2",
  },
  menuLabel: {
    fontSize: 15,
    fontFamily: FontFamily.satoshiMedium,
    color: blackColor,
  },
});
