@AGENTS.md

# Project: Golden Owner

Owner-facing monitoring & reporting mobile app for a B2B telecom product distributor.

## Domain

- **Products**: Kartu Perdana (SIM cards), Voucher Fisik, Modem Orbit, Nomor Cantik, Indihome
- **Customers (Outlets)**: retail stores (Toko Maju Jaya, Berkah Cell, etc.) across branches (Batam, etc.)
- **Order flow**: Customer → Sales approval → SO processing → Gudang → Dikirim → Selesai / Reject
- **Language**: Indonesian (all UI text, dummy data, labels)
- **Currency**: IDR (Indonesian Rupiah), formatted as Rp XX.XXX

## Screen Breakdown

### Home Tab (`(tabs)/home/`)
- Sales this month — total revenue from completed orders
- Total orders — count for current period
- Return rate — Reject orders ÷ total orders (%)
- Gross profit — revenue minus COGS
- Weekly revenue trend — bar chart, Mon–Sun

### Report Tab (`(tabs)/report/`) — 3 sub-tabs
**Laporan Penjualan:**
- Summary cards: total value, net revenue, total profit, average margin
- Weekly revenue trend chart
- Revenue by outlet (list)
- Revenue by product (list)

**Stok Outlet:**
- Per-outlet stock levels with product breakdown

**Laporan Return:**
- Summary cards: total return value, return rate, top product, top outlet
- Weekly return trend chart
- Return reasons list with percentages

### Profile Tab (`(tabs)/profile/`)
- Profile picture + owner name + email
- Menu: FAQ, Manual Book, Ganti Password, Logout

## App Structure

- `(auth)/` — login flow
- `(tabs)/home/` — dashboard: KPI tiles + weekly trend
- `(tabs)/report/` — 3-tab report screen (penjualan, stok, return)
- `(tabs)/profile/` — owner profile + settings menu
- `src/features/` — feature-scoped logic (auth, catalog, shared)
- `src/components/ui/` — shared UI components (KpiCard, WeeklyBarChart, etc.)
- `src/constants/dummy.ts` — all mock data
- `src/constants/theme.ts` — design tokens

## Design System

Full reference: `DESIGN.md`. Key rules for code generation:

### Tokens — always import from `@/constants/theme`, never raw hex
- **Primary**: `#1C0867` (`primaryColor`)
- **Background**: `#F2F3F5` (`bgColor`), cards use `#FFFFFF` (`whiteColor`)
- **Spacing**: `SPACE_4/8/16/24/32/48/64` — screen padding = 16, scroll bottom = 100
- **Font**: Satoshi — `FontFamily.satoshiRegular/Medium/Light/Bold`
- **Text styles**: spread `blackTextStyle`, `greyTextStyle`, `primaryTextStyle`, etc. instead of re-declaring color+font

### Components — export from `@/components/ui`
Active exports: `AnimatedPressable`, `AppBottomSheet`, `Button`, `ChatBubble`, `Gap`, `Header`, `KpiCard`, `TileChat`, `TileNotif`, `Toast`, `WeeklyBarChart`

### Screen scaffold
```tsx
<SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
  {/* header: white bg, paddingH 16, paddingV 8 */}
  <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 24, paddingBottom: 100 }}>
    {/* content */}
  </ScrollView>
</SafeAreaView>
```

### Order status colors (`status_order` 1–6)
1/2 Diproses → orange · 3 Gudang → purple · 4 Dikirim → blue · 5 Selesai → dark green · 6 Reject → red
