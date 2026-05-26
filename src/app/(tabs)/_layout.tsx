import HomeIcon from "@/assets/icons/ic-home.svg";
import ProfileIcon from "@/assets/icons/ic-profile.svg";
import ReportIcon from "@/assets/icons/ic-report.svg";
import {
  FontFamily,
  primaryColor,
  SPACE_16,
  SPACE_8,
  strokeColor,
  tabBarColor,
  whiteColor,
} from "@/constants/theme";
import { Tabs, usePathname } from "expo-router";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

type TabButtonProps = {
  icon: string;
  label: string;
  focused: boolean;
} & PressableProps;

function TabButton({ icon, label, focused, ...props }: TabButtonProps) {
  return (
    <Pressable {...props} style={styles.buttonWrapper}>
      {icon === "home" && (
        <HomeIcon
          width={24}
          height={24}
          color={focused ? primaryColor : tabBarColor}
        />
      )}

      {icon === "report" && (
        <ReportIcon
          width={24}
          height={24}
          color={focused ? primaryColor : tabBarColor}
        />
      )}

      {icon === "profile" && (
        <ProfileIcon
          width={24}
          height={24}
          color={focused ? primaryColor : tabBarColor}
        />
      )}

      <Text style={[styles.label, focused && styles.labelActive]}>{label}</Text>
    </Pressable>
  );
}

export default function TabsLayout() {
  const pathname = usePathname();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.tabBar, { minHeight: 96 }],
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarButton: (props) => (
            <TabButton
              {...props}
              icon="home"
              label="Home"
              focused={pathname === "/home"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          tabBarButton: (props) => (
            <TabButton
              {...props}
              icon="report"
              label="Report"
              focused={pathname === "/report"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarButton: (props) => (
            <TabButton
              {...props}
              icon="profile"
              label="Profile"
              focused={pathname === "/profile"}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: whiteColor,
    borderTopColor: strokeColor,
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonWrapper: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: SPACE_16,
    paddingBottom: SPACE_8,
  },
  label: {
    fontSize: 12,
    fontFamily: FontFamily.satoshiMedium,
    color: tabBarColor,
    marginTop: SPACE_8,
  },
  labelActive: {
    color: primaryColor,
  },
});
