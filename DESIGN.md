# Golden Owner — Design System

Single reference for design tokens, components, and UI conventions in the **Golden Owner** mobile app.

- **Platform**: React Native + Expo 55
- **Language**: Indonesian UI text
- **Router**: Expo Router (file-based)
- **Font**: Satoshi (Regular, Medium, Light, Bold)
- **Icons**: `lucide-react-native` + custom SVG assets in `assets/icons/`

---

## 1. Color System

All colors exported from `src/constants/theme.ts`.

### Brand

| Token            | Hex       | Role                                               |
| ---------------- | --------- | -------------------------------------------------- |
| `primaryColor`   | `#1C0867` | Brand deep purple — primary actions, active states |
| `secondaryColor` | `#B0A8BA` | Secondary muted purple                             |
| `darkBlueColor`  | `#0D042F` | Darkest brand tone                                 |

### Backgrounds

| Token                 | Hex       | Role                                   |
| --------------------- | --------- | -------------------------------------- |
| `bgColor`             | `#F2F3F5` | App/screen background                  |
| `bgSecondaryColor`    | `#F4F1FE` | Light purple tint — tab buttons, chips |
| `bgTertiaryColor`     | `#F0ECFE` | Lighter purple tint                    |
| `whiteColor`          | `#FFFFFF` | Cards, headers, inputs                 |
| `whiteSecondaryColor` | `#EEEEEE` | Subtle white dividers                  |
| `whiteThirdColor`     | `#F6F7F8` | Very light neutral fill                |
| `darkBlueRGBAColor`   | `#F7F6FE` | Notification icon bg                   |

### Text

| Token                | Hex       | Role                     |
| -------------------- | --------- | ------------------------ |
| `blackColor`         | `#202020` | Primary body text        |
| `greyColor`          | `#6C7278` | Secondary / helper text  |
| `greySecondaryColor` | `#606060` | Dates, meta labels       |
| `inactiveColor`      | `#B4BED4` | Disabled / inactive text |
| `tabBarColor`        | `#B0A8BA` | Inactive tab labels      |

### Semantic — Status & Feedback

| Token                     | Hex       | Usage                         |
| ------------------------- | --------- | ----------------------------- |
| `greenColor`              | `#0DB561` | Success, completed, profit    |
| `greenSecondaryColor`     | `#005245` | Order status: Selesai text    |
| `greenRGBAColor`          | `#F0FDF4` | Success icon bg               |
| `greenSecondaryRGBAColor` | `#E5FFFA` | Selesai badge bg              |
| `redColor`                | `#FD131F` | Error, reject, return rate    |
| `redRGBAColor`            | `#FFE2E2` | Reject badge bg               |
| `redStrokeColor`          | `#FFC9C9` | Reject badge border           |
| `orangeColor`             | `#F38A1A` | Warning, price highlight, qty |
| `orangeRGBAColor`         | `#FFEDD4` | Warning badge bg              |
| `orangeSecondaryColor`    | `#CA3500` | Darker orange text            |
| `orangeStrokeColor`       | `#FFD7A8` | Warning badge border          |
| `yellowColor`             | `#FFB34A` | Flash sale, highlight         |
| `yellowSecondaryColor`    | `#FFD499` | Yellow tint                   |

### Semantic — Informational

| Token                | Hex       | Usage                              |
| -------------------- | --------- | ---------------------------------- |
| `blueColor`          | `#003E97` | Dikirim (shipped) status text      |
| `blueRGBAColor`      | `#E6EEFF` | Dikirim badge bg                   |
| `blueSecondaryColor` | `#155DFC` | Active step indicator, Net Revenue |
| `blueStrokeColor`    | `#719DFF` | Blue badge border                  |
| `lightBlueColor`     | `#A4C0FE` | Active step circle border          |
| `purpleColor`        | `#7956BF` | Disiapkan Gudang status text       |
| `purpleRGBAColor`    | `#F0ECF9` | Gudang badge bg                    |
| `purpleStrokeColor`  | `#8B6DCF` | Gudang badge border                |
| `pinkColor`          | `#FE9F9F` | Chat icon accent                   |
| `pinkSecondaryColor` | `#FFF5F5` | Chat icon bg                       |

### Borders & Lines

| Token               | Hex       | Role                             |
| ------------------- | --------- | -------------------------------- |
| `strokeColor`       | `#CCD7EB` | Tab bar border, card borders     |
| `lineColor`         | `#D4D7DE` | Horizontal dividers inside cards |
| `borderColor`       | `#B2C2FF` | Accent border (blue tint)        |
| `borderInputColor`  | `#EDF1F3` | Text input border                |
| `greyTertiaryColor` | `#E6E6E6` | Qty stepper button border        |

---

## 2. Typography

Font family: **Satoshi** (loaded via `expo-font` in `_layout.tsx`).

```ts
import { FontFamily } from "@/constants/theme";

FontFamily.satoshiLight; // "satoshiLight"
FontFamily.satoshiRegular; // "satoshiRegular"
FontFamily.satoshiMedium; // "satoshiMedium"
FontFamily.satoshiBold; // "satoshiBold"
```

### Pre-built text styles

Import and spread inline or combine with `StyleSheet`:

```ts
import {
  blackTextStyle,
  greyTextStyle,
  primaryTextStyle,
} from "@/constants/theme";
```

| Export              | fontFamily     | color     |
| ------------------- | -------------- | --------- |
| `blackTextStyle`    | satoshiRegular | `#202020` |
| `whiteTextStyle`    | satoshiRegular | `#FFFFFF` |
| `greyTextStyle`     | satoshiRegular | `#6C7278` |
| `primaryTextStyle`  | satoshiRegular | `#1C0867` |
| `inactiveTextStyle` | satoshiRegular | `#B4BED4` |
| `redTextStyle`      | satoshiRegular | `#FD131F` |
| `greenTextStyle`    | satoshiRegular | `#0DB561` |
| `greenSecTextStyle` | satoshiRegular | `#005245` |
| `yellowTextStyle`   | satoshiRegular | `#FFB34A` |
| `orangeTextStyle`   | satoshiRegular | `#F38A1A` |
| `blueTextStyle`     | satoshiRegular | `#003E97` |
| `purpleTextStyle`   | satoshiRegular | `#7956BF` |

### Font size conventions (from component usage)

| Use                     | Size  |
| ----------------------- | ----- |
| Screen title / greeting | 18–20 |
| Section header          | 15–16 |
| KPI value               | 18    |
| Body text               | 14    |
| Label / meta / badge    | 12    |
| Chart day label         | 11    |
| Error text              | 12    |

---

## 3. Spacing Scale

```ts
import {
  SPACE_4,
  SPACE_8,
  SPACE_16,
  SPACE_24,
  SPACE_32,
  SPACE_48,
  SPACE_64,
} from "@/constants/theme";
```

| Token      | Value | Common use                         |
| ---------- | ----- | ---------------------------------- |
| `SPACE_4`  | 4     | Tight gaps, icon-to-text           |
| `SPACE_8`  | 8     | Label margin, chip padding         |
| `SPACE_16` | 16    | Standard padding, card gap         |
| `SPACE_24` | 24    | Section top margin, footer padding |
| `SPACE_32` | 32    | Large section separation           |
| `SPACE_48` | 48    | Bottom sheet footer padding        |
| `SPACE_64` | 64    | Large vertical breathing room      |

Horizontal screen padding: **16** (`SPACE_16`). Scroll bottom padding: **100–120** (clears tab bar).

---

## 4. Border Radius

| Value | Where used                                    |
| ----- | --------------------------------------------- |
| `4`   | Bar chart rounded corners, qty stepper button |
| `5`   | Header icon container                         |
| `8`   | Modal button, input field, tag                |
| `10`  | Tile cards (TileChat, TileNotif, TileItem)    |
| `12`  | KpiCard, report chart card, profile menu card |
| `20`  | Report tab pill buttons                       |
| `40`  | Avatar circle (80px ÷ 2)                      |
| `57`  | Order status badge (pill)                     |

---

## 5. Shared Style Objects

Pre-built style objects for common layout patterns:

```ts
import {
  mainContent,
  shadow,
  screen,
  footerStyle,
  rowCenter,
  paddingH,
  dot,
  line,
  lineDash,
  paddingScroll,
} from "@/constants/theme";
```

| Export          | Description                                                              |
| --------------- | ------------------------------------------------------------------------ |
| `mainContent`   | `flex:1, backgroundColor: bgColor`                                       |
| `screen`        | `flex:1, bgColor, paddingTop:48` — for non-SafeArea screens              |
| `shadow`        | iOS + Android shadow (opacity 0.34, elevation 10)                        |
| `rowCenter`     | `flexDirection:row, alignItems:center, justifyContent:space-between`     |
| `footerStyle`   | Absolute bottom CTA bar, paddingBottom 24, minHeight 96                  |
| `paddingH`      | `paddingHorizontal: 16`                                                  |
| `line`          | 1px full-width horizontal divider (`lineColor`)                          |
| `lineDash`      | 1px dashed full-width divider                                            |
| `dot`           | 6×6 red notification dot                                                 |
| `paddingScroll` | `paddingTop:20, paddingBottom:120, paddingHorizontal:16` for ScrollViews |

---

## 6. Component Catalogue

All components exported from `src/components/ui/index.ts`.

---

### `AnimatedPressable`

```ts
<AnimatedPressable onPress={() => {}}>{children}</AnimatedPressable>
```

Wrapper for any tappable element. Applies 0.95 scale animation on press (100ms `withTiming`). `hitSlop={6}`. Use instead of raw `Pressable` for interactive icons and links.

---

### `AppBottomSheet`

Global bottom sheet powered by `@gorhom/bottom-sheet`. Controlled via `useBottomSheetStore`. Not rendered directly — mounted once in `_layout.tsx`.

**Usage via store:**

```ts
import { useBottomSheetStore } from "@/features/shared/store/bottomSheet.store";
const { open, close } = useBottomSheetStore();
open({ snapPoints: ["50%"], content: <MyContent /> });
```

Props via store: `snapPoints`, `header`, `content`, `footer`.

---

### `Button`

```ts
<Button title="Lanjut" onPress={fn} />
<Button title="Batal" bgColor={whiteColor} titleColor={primaryColor} border={1} />
<Button title="Kirim" isIconVisible />
```

| Prop            | Type         | Default                    |
| --------------- | ------------ | -------------------------- |
| `title`         | string       | required                   |
| `bgColor`       | string       | `primaryColor`             |
| `titleColor`    | string       | `whiteColor`               |
| `borderColor`   | string       | `primaryColor`             |
| `border`        | number       | `0`                        |
| `radius`        | number       | `10`                       |
| `isIconVisible` | boolean      | `false` — shows ArrowRight |
| `onPress`       | `() => void` | —                          |

Full-width, padding 14. Scale animation on press (0.95).

---

### `ChatBubble`

```ts
<ChatBubble data={message} />
```

Renders a chat message. Sender (`sender_id === "SLS-001"`) aligns right with dark blue (`#324971`) bg. Recipient aligns left with white bg and border. Pass `{ type: "day", date }` for date separator.

---

### `Gap`

```ts
<Gap height={16} />
<Gap width={8} />
```

Simple spacer `View`. Use instead of `marginTop`/`marginBottom` in flex layouts.

---

### `Header`

```ts
<Header title="Detail Order" onBack={() => router.back()} />
<Header title="Transaksi" isNotifVisible />        // shows bell with red dot
```

| Prop             | Type         | Default             |
| ---------------- | ------------ | ------------------- |
| `title`          | string       | required            |
| `onBack`         | `() => void` | —                   |
| `isIconVisible`  | boolean      | `false` — cart icon |
| `isNotifVisible` | boolean      | `false` — bell icon |

White bg, 16px paddingH, min height 42. Bell navigates to `/notifikasi`, cart to `/cart`.

---

### `KpiCard`

```ts
<KpiCard label="Sales Bulan Ini" value="Rp 187,5 Jt" />
<KpiCard label="Return Rate" value="4.2%" valueColor={redColor} />
```

| Prop         | Type   | Default        |
| ------------ | ------ | -------------- |
| `label`      | string | required       |
| `value`      | string | required       |
| `valueColor` | string | `primaryColor` |
| `flex`       | number | `1`            |

White card, radius 12, elevation 2. Label 12px grey, value 18px bold. Auto-shrinks value text to `minimumFontScale={0.7}`. Use in 2-column rows with `<View style={{ width: SPACE_16 }} />` gap.

---

### `StatusRow`

```ts
<StatusRow data={step} isLast={i === steps.length - 1} />
```

Order status timeline step. `data` shape:

```ts
{
  id: number;
  status_name: string;
  created_at: string;
  is_reject: boolean;
  current_step: boolean;
  step_done: boolean;
}
```

Icons: `CircleCheck` (green, done) → `CircleX` (red, reject) → filled blue circle (current) → `Circle` (inactive). Vertical connector line between steps (green if done, inactive grey otherwise).

---

### `TileChat`

```ts
<TileChat data={chatItem} onPress={fn} />
```

Chat list row. Shows order ID, last message (truncated), time, unread count badge (primaryColor circle). Pink message icon on pink bg. Pass `{ type: "day", date }` for date separator.

---

### `TileItem`

```ts
<TileItem data={product} onPress={fn} />
<TileItem data={service} isService onPress={fn} />
```

Product catalog item. Shows name, price/unit in orange, and optional meta (value, expiry) with SVG icons. `isService` shows only the data value row.

---

### `TileNotif`

```ts
<TileNotif data={notif} onPress={fn} />
```

Notification card. Two types:

- `type: "delivery"` — truck icon, dark blue bg
- `type: "approval"` — check icon, green bg

Body text uses bold spans for order ID and sales name.

---

### `Toast`

Global toast notification mounted in `_layout.tsx`. Controlled via `useToastStore`. Displays at top-right, stacked, with gradient bg. Spring-in / timing-out animation.

**Usage via store:**

```ts
import { useToastStore } from "@/features/shared/store/toast.store";
const { showToast } = useToastStore();
showToast({
  title: "Berhasil",
  message: "Order telah dikirim.",
  type: "success",
});
```

---

### `WeeklyBarChart`

```ts
<WeeklyBarChart data={WeeklyRevenueData} color={primaryColor} height={160} />
<WeeklyBarChart data={WeeklyReturnData} color={redColor} height={120} />
```

| Prop     | Type                               | Default   |
| -------- | ---------------------------------- | --------- |
| `data`   | `{ day: string; value: number }[]` | required  |
| `color`  | string                             | `#1C0867` |
| `height` | number                             | `160`     |

SVG bar chart using `react-native-svg`. Width auto-detected via `onLayout`. Max bar = full opacity, others = 0.45 opacity. Bottom 24px reserved for day labels.

---

## 7. Form Components

From `src/components/form/`.

### `FormInput`

```ts
<FormInput label="Email" value={val} onChangeText={fn} error={errors.email} />
```

Label (12px, satoshiBold, grey) + input (border `#EDF1F3`, radius 10, padding 14) + optional red error text below.

### `FormPassword`

Same as `FormInput` but with eye/eye-off toggle for `secureTextEntry`. Eye icon: `lucide-react-native` Eye/EyeOff in grey.

---

## 8. Modal Components

From `src/components/modal/`. Both mounted globally in `_layout.tsx`.

### `GlobalConfirmModal`

Controlled via `useConfirmStore`. Animated fade modal with title, message, cancel (grey text), and confirm button.

```ts
const { show } = useConfirmStore();
show({
  title: "Hapus Order",
  message: "Order akan dihapus permanen.",
  type: "danger",           // "danger" → red btn | default → blue btn
  onConfirm: async () => { ... },
});
```

### `GlobalInputModal`

Controlled via `useInputModalStore`. Modal with title, single `TextInput`, and Save/Cancel buttons. Confirm disabled until input non-empty.

```ts
const { showInput } = useInputModalStore();
showInput({
  title: "Catatan Produk",
  placeholder: "Masukkan catatan...",
  onConfirm: async (text) => { ... },
});
```

---

## 9. Layout Component

### `Screen` (`src/components/layout/Screen.tsx`)

```ts
<Screen>{children}</Screen>
```

`SafeAreaView` wrapper with `flex:1`, `paddingHorizontal:16`, `backgroundColor: bgColor`. Use as root container for tab screens that don't need a custom header.

---

## 10. Screen Layout Pattern

Standard structure for a new tab/stack screen:

```tsx
<SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
  {/* Optional page header */}
  <View
    style={{
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: whiteColor,
    }}
  >
    <Text
      style={{
        fontSize: 18,
        fontFamily: FontFamily.satoshiBold,
        color: blackColor,
      }}
    >
      Page Title
    </Text>
  </View>

  <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 16,
      paddingTop: 24,
      paddingBottom: 100, // clears tab bar
    }}
    showsVerticalScrollIndicator={false}
  >
    {/* content */}
  </ScrollView>
</SafeAreaView>
```

**Stack screen with back button**: use `<Header title="..." onBack={() => router.back()} />` below `SafeAreaView`, no padding needed (Header handles its own padding).

**Footer CTA**: use `footerStyle` from theme — absolutely positioned, full-width, holds one or two `<Button>` components.

---

## 11. Animation Patterns

### Press scale (interactive elements)

Applied via `AnimatedPressable` or `Button`:

- Scale to `0.95` on `pressIn` — `withTiming(0.95, { duration: 100 })`
- Scale to `1.0` on `pressOut` — `withTiming(1, { duration: 100 })`

### Toast notifications

- **Enter**: `withSpring(0)` translateY + `withSpring(1)` opacity
- **Exit**: `withTiming(-20, { duration: 200 })` translateY + `withTiming(0, { duration: 200 })` opacity
- Auto-dismiss after configurable duration (default from store)
- Positioned `top: 56`, right-aligned, `zIndex: 999`

### Bottom sheet

- `@gorhom/bottom-sheet` with custom backdrop (`opacity: 0.5`, `pressBehavior: "close"`)
- `enablePanDownToClose`, hardware back button closes on Android

---

## 12. Order Status System

`status_order` integer → color mapping (used in `StatusRow`):

| Code | Label            | Text color                      | Badge bg                  | Badge border          |
| ---- | ---------------- | ------------------------------- | ------------------------- | --------------------- |
| `1`  | Diproses Sales   | `orangeColor` `#F38A1A`         | `orangeRGBAColor`         | `orangeColor`         |
| `2`  | Diproses SO      | `orangeColor` `#F38A1A`         | `orangeRGBAColor`         | `orangeColor`         |
| `3`  | Disiapkan Gudang | `purpleColor` `#7956BF`         | `purpleRGBAColor`         | `purpleColor`         |
| `4`  | Dikirim          | `blueColor` `#003E97`           | `blueRGBAColor`           | `blueColor`           |
| `5`  | Selesai          | `greenSecondaryColor` `#005245` | `greenSecondaryRGBAColor` | `greenSecondaryColor` |
| `6`  | Reject           | `redColor` `#FD131F`            | `redRGBAColor`            | `redColor`            |

Badge shape: `borderRadius: 57` (pill), `paddingHorizontal: 10`, `paddingVertical: 6`, `borderWidth: 1`, font `satoshiMedium` 12px.

**Timeline step states** (`StatusRow`):

- Done: `CircleCheck` green icon + green connector line
- Current: filled blue circle (`blueSecondaryColor`) with `lightBlueColor` border
- Pending: `Circle` grey icon + grey connector
- Reject: `CircleX` red icon (no connector)
