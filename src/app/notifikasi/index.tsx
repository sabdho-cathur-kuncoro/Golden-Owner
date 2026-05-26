import { Header, TileNotif } from "@/components/ui";
import { NotifData } from "@/constants/dummy";
import {
  FontFamily,
  mainContent,
  paddingScroll,
  primaryColor,
  screen,
  shadow,
  SPACE_48,
  whiteColor,
  whiteTextStyle,
} from "@/constants/theme";
import { router } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { wait } from "../../../utils/helper";

const Notifikasi = () => {
  const [dataView, setDataView] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [readIds, setReadIds] = useState<Set<number>>(
    () => new Set(NotifData.filter((n) => n.is_read).map((n) => n.id))
  );

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setDataView(NotifData);
    } catch (err) {
      if (__DEV__) {
        console.log(err);
      }
    }
  }

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    wait(1000).then(() => {
      setRefreshing(false);
    });
  }, []);

  const keyExtractor = useCallback(
    (item: any) => `${item.name}-${item.id}`,
    []
  );

  const hasUnread = dataView.some((item) => !readIds.has(item.id));

  const markAllRead = useCallback(() => {
    setReadIds(new Set(dataView.map((n) => n.id)));
  }, [dataView]);

  const renderItemFlatlist = useCallback(
    ({ item }: any) => {
      return (
        <TileNotif
          data={{ ...item, is_read: readIds.has(item.id) }}
          onPress={() => {
            setReadIds((prev) => new Set([...prev, item.id]));
            router.push(`/notifikasi/${item.id}`);
          }}
        />
      );
    },
    [readIds]
  );

  return (
    <View style={[screen, { backgroundColor: whiteColor }]}>
      <Header title={"Notifications"} onBack={() => router.back()} />
      <View style={[mainContent]}>
        <FlatList
          data={dataView}
          keyExtractor={keyExtractor}
          renderItem={renderItemFlatlist}
          onRefresh={onRefresh}
          refreshing={refreshing}
          contentContainerStyle={[paddingScroll]}
        />
        {hasUnread && (
          <TouchableOpacity
            style={styles.floatingBtn}
            onPress={markAllRead}
            activeOpacity={0.85}
          >
            <Text
              style={[
                whiteTextStyle,
                { fontFamily: FontFamily.satoshiMedium, fontSize: 13 },
              ]}
            >
              Read All
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Notifikasi;

const styles = StyleSheet.create({
  floatingBtn: {
    position: "absolute",
    bottom: SPACE_48,
    alignSelf: "center",
    backgroundColor: primaryColor,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
    ...shadow,
  },
});
