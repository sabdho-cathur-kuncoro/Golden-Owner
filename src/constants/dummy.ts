const d = new Date();

export const CategoryApproval = [
  {
    id: 1,
    name: "Dibuat Customer",
    isSelected: true,
  },
  {
    id: 2,
    name: "Dibuat Sales",
    isSelected: false,
  },
];

export const CategoryTransaksi = [
  {
    id: 1,
    name: "Diproses SO",
    isSelected: true,
  },
  {
    id: 2,
    name: "Disiapkan Gudang",
    isSelected: false,
  },
  {
    id: 3,
    name: "Dikirim",
    isSelected: false,
  },
];

export const Order = [
  {
    id: "ORD-2026-001",
    customer_name: "Toko Maju Jaya",
    branch: "Batam",
    qty: 50,
    payment_method: "Transfer Bank",
    status_order_name: "Diproses SO",
    status_order: 2,
    created_at: "14 November 2026",
    subtotal: null,
  },
  {
    id: "ORD-2026-002",
    customer_name: "Toko Maju Jaya",
    branch: "Batam",
    qty: 50,
    payment_method: "Transfer Bank",
    status_order_name: "Disiapkan Gudang",
    status_order: 3,
    created_at: "14 November 2026",
    subtotal: null,
  },
  {
    id: "ORD-2026-003",
    customer_name: "Toko Maju Jaya",
    branch: "Batam",
    qty: 50,
    payment_method: "Transfer Bank",
    status_order_name: "Dikirim",
    status_order: 4,
    created_at: "14 November 2026",
    subtotal: null,
  },
  {
    id: "ORD-2026-004",
    customer_name: "Toko Maju Jaya",
    branch: "Batam",
    qty: 50,
    payment_method: "Transfer Bank",
    status_order_name: "Diproses Sales",
    status_order: 1,
    created_at: "14 November 2026",
    subtotal: null,
  },
  {
    id: "ORD-2026-005",
    customer_name: "Toko Maju Jaya",
    branch: "Batam",
    qty: 50,
    payment_method: "Transfer Bank",
    status_order_name: "Diproses Sales",
    status_order: 1,
    created_at: "14 November 2026",
    subtotal: null,
  },
  {
    id: "ORD-2026-006",
    customer_name: "Toko Maju Jaya",
    branch: "Batam",
    qty: 50,
    payment_method: "Transfer Bank",
    status_order_name: "Selesai",
    status_order: 5,
    created_at: "14 November 2026",
    subtotal: 1_800_000,
  },
  {
    id: "ORD-2026-007",
    customer_name: "Toko Maju Jaya",
    branch: "Batam",
    qty: 50,
    payment_method: "Transfer Bank",
    status_order_name: "Reject",
    status_order: 6,
    created_at: "14 November 2026",
    subtotal: 1_800_000,
  },
];

export const OrderDetail = {
  id: "ORD-2026-001",
  customer_name: "Toko Maju Jaya",
  branch: "Batam",
  product: [
    {
      id: 1,
      product_name: "Simpati Terbaik Untukmu",
      category: "Kartu Perdana",
      qty: 20,
      price: 35_000,
      sub_total_price: 700_000,
      customer_note: "-",
    },
    {
      id: 2,
      product_name: "Simpati TikTok",
      category: "Kartu Perdana",
      qty: 20,
      price: 55_000,
      sub_total_price: 1_100_000,
      customer_note: "-",
    },
  ],
  status_order: 4,
  status_order_name: "Dikirim",
  total_price: 1_800_000,
  payment_method: "Transfer Bank",
  bank_name: "BCA",
  status_payment_name: "Lunas",
};

// NOTE: STATUS TRANSAKSI
export const StatusTransaksiSelesai = [
  {
    id: 1,
    status_name: "Order Dibuat",
    created_at: "14 April 2026, 08:10",
    is_reject: false,
    current_step: false,
    step_done: true,
  },
  {
    id: 2,
    status_name: "Diproses Sales",
    created_at: "14 April 2026, 08:25",
    is_reject: false,
    current_step: false,
    step_done: true,
  },
  {
    id: 3,
    status_name: "Diproses SO",
    created_at: "14 April 2026, 08:40",
    is_reject: false,
    current_step: false,
    step_done: true,
  },
  {
    id: 4,
    status_name: "Disiapkan Gudang",
    created_at: "14 April 2026, 09:15",
    is_reject: false,
    current_step: false,
    step_done: true,
  },
  {
    id: 5,
    status_name: "Dikirim",
    created_at: "14 April 2026, 09:30",
    is_reject: false,
    current_step: false,
    step_done: true,
  },
  {
    id: 6,
    status_name: "Selesai",
    created_at: "14 April 2026, 15:50",
    is_reject: false,
    current_step: false,
    step_done: true,
  },
];
export const StatusTransaksiDikirim = [
  {
    id: 1,
    status_name: "Order Dibuat",
    created_at: "14 April 2026, 08:10",
    is_reject: false,
    current_step: false,
    step_done: true,
  },
  {
    id: 2,
    status_name: "Diproses Sales",
    created_at: "14 April 2026, 08:25",
    is_reject: false,
    current_step: false,
    step_done: true,
  },
  {
    id: 3,
    status_name: "Diproses SO",
    created_at: "14 April 2026, 08:40",
    is_reject: false,
    current_step: false,
    step_done: true,
  },
  {
    id: 4,
    status_name: "Disiapkan Gudang",
    created_at: "14 April 2026, 09:15",
    is_reject: false,
    current_step: false,
    step_done: true,
  },
  {
    id: 5,
    status_name: "Dikirim",
    created_at: "14 April 2026, 09:30",
    is_reject: false,
    current_step: true,
    step_done: false,
  },
  {
    id: 6,
    status_name: "Selesai",
    created_at: "14 April 2026, 15:50",
    is_reject: false,
    current_step: false,
    step_done: false,
  },
];
export const StatusTransaksiReject = [
  {
    id: 1,
    status_name: "Order Dibuat",
    created_at: "14 April 2026, 08:10",
    is_reject: false,
    current_step: false,
    step_done: true,
  },
  {
    id: 2,
    status_name: "Diproses Sales",
    created_at: "14 April 2026, 08:25",
    is_reject: false,
    current_step: false,
    step_done: true,
  },
  {
    id: 3,
    status_name: "Ditolak SO",
    created_at: "14 April 2026, 08:40",
    is_reject: true,
    current_step: false,
    step_done: true,
  },
];

// NOTE: CATEGORY
export const CategoryData = [
  {
    id: 1,
    category_name: "Semua",
    isSelected: true,
  },
  {
    id: 2,
    category_name: "Kartu Perdana",
    isSelected: false,
  },
  {
    id: 3,
    category_name: "Voucher",
    isSelected: false,
  },
  {
    id: 4,
    category_name: "Telkomsel Orbit",
    isSelected: false,
  },
];

// NOTE: PRODUCT ITEM
export const ProductItemData = [
  {
    id: 1,
    name: "Simpati Terbaik Untukmu",
    price: 35_000,
    unit: "pcs",
    qty: 0,
    sub_total_price: 700_000,
  },
  {
    id: 2,
    name: "Simpati TikTok",
    price: 55_000,
    unit: "pcs",
    qty: 0,
    sub_total_price: 1_100_000,
  },
];

// NOTE: OUTLET
export const OutletData = [
  {
    id: 1,
    name: "Toko Maju Jaya",
    count_address: 2,
    list_address: [
      {
        id: "address-01",
        address:
          "Komplek Ruko Taman Niaga, Blk. M No.12B, Sukajadi, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29444",
        name: "Toko Utama",
      },
      {
        id: "address-02",
        address:
          "Komplek Ruko Mall Nagoya Hill, Blk. R3 No.J36-37, Nagoya, Batam City, Kepulauan Riau 29444",
        name: "Cabang Batam",
      },
      {
        id: "address-03",
        address:
          "Komplek Ruko Taman Niaga, Blk. M No.12B, Sukajadi, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29444",
        name: "Toko Utama",
      },
      {
        id: "address-04",
        address:
          "Komplek Ruko Mall Nagoya Hill, Blk. R3 No.J36-37, Nagoya, Batam City, Kepulauan Riau 29444",
        name: "Cabang Batam",
      },
      {
        id: "address-05",
        address:
          "Komplek Ruko Taman Niaga, Blk. M No.12B, Sukajadi, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29444",
        name: "Toko Utama",
      },
      {
        id: "address-06",
        address:
          "Komplek Ruko Mall Nagoya Hill, Blk. R3 No.J36-37, Nagoya, Batam City, Kepulauan Riau 29444",
        name: "Cabang Batam",
      },
    ],
  },
  {
    id: 2,
    name: "Berkah Cell",
    count_address: 1,
    list_address: [
      {
        id: "address-01",
        address:
          "Komplek Ruko Taman Niaga, Blk. M No.12B, Sukajadi, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29444",
        name: "Toko Utama",
      },
      {
        id: "address-02",
        address:
          "Komplek Ruko Mall Nagoya Hill, Blk. R3 No.J36-37, Nagoya, Batam City, Kepulauan Riau 29444",
        name: "Cabang Batam",
      },
    ],
  },
  {
    id: 3,
    name: "Sinar Abadi Jaya",
    count_address: 1,
    list_address: [
      {
        id: "address-01",
        address:
          "Komplek Ruko Taman Niaga, Blk. M No.12B, Sukajadi, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29444",
        name: "Toko Utama",
      },
    ],
  },
  {
    id: 4,
    name: "Makmur Abadi",
    count_address: 1,
    list_address: [
      {
        id: "address-01",
        address:
          "Komplek Ruko Mall Nagoya Hill, Blk. R3 No.J36-37, Nagoya, Batam City, Kepulauan Riau 29444",
        name: "Cabang Batam",
      },
    ],
  },
];

// NOTE: CATEGORY REPORT
export const CategoryReportData = [
  {
    id: 1,
    name: "Selesai",
    is_selected: true,
  },
  {
    id: 2,
    name: "Reject",
    is_selected: false,
  },
];

// NOTE: NOTIF
export const NotifData = [
  {
    id: 1,
    title: "Barang Anda Sedang Dikirim",
    order_id: "ORD-2026-002",
    sales_name: "Ahmad Kurniawan",
    sales_id: "SLS-001",
    snipet: "Pesanan ORD-2026-002 sedan dalam perjalanan ke lokasi Anda.",
    type: "delivery",
    created_at: "",
  },
  {
    id: 2,
    title: "Pesanan Disetujui Sales",
    order_id: "ORD-2026-006",
    sales_name: "Ahmad Kurniawan",
    sales_id: "SLS-001",
    snipet:
      "Sales Ahmad Kurniawan telah menyetujui pesanan ORD-2026-006. Silakan pantau status selanjutnya di menu transaksi",
    type: "approval",
    created_at: "",
  },
];
export const NotifCategory = [
  {
    id: 1,
    title: "Notifikasi",
    isSelected: true,
  },
  {
    id: 2,
    title: "Chat",
    isSelected: false,
  },
];

// NOTE: CHAT
export const ChatData = [
  {
    id: 1,
    order_id: "ORD-2026-012",
    message: "Sedang disiapkan gudang pak. Estimasi sore ini sudah jalan.",
    time: "10:00",
    unread_message: 1,
    created_at: d,
  },
  {
    id: 2,
    order_id: "ORD-2026-011",
    message: "Sedang disiapkan gudang pak. Estimasi sore ini sudah jalan.",
    time: "09:00",
    unread_message: 1,
    created_at: d,
  },
  {
    id: 3,
    order_id: "ORD-2026-010",
    message: "Sama-sama pak, ditunggu order selanjutnya",
    time: "08:00",
    unread_message: 0,
    created_at: d,
  },
];
export const ChatMessage = [
  {
    id: 1,
    message: "Halo, ada yang bisa saya bantu?",
    sender_id: "SLS-001",
    recipient_id: "CST-001",
    time: "09:02",
    created_at: d,
  },
  {
    id: 2,
    message: "Pesanan saya kapan dikirim ya pak",
    sender_id: "CST-001",
    recipient_id: "SLS-001",
    time: "09:02",
    created_at: d,
  },
  {
    id: 3,
    message: "Sedang disiapkan gudang pak. Estimasi sore ini sudah jalan",
    sender_id: "SLS-001",
    recipient_id: "CST-001",
    time: "09:02",
    created_at: d,
  },
  {
    id: 4,
    message: "Sedang disiapkan gudang pak. Estimasi sore ini sudah jalan",
    sender_id: "SLS-001",
    recipient_id: "CST-001",
    time: "09:02",
    created_at: d,
  },
  {
    id: 5,
    message: "Sedang disiapkan gudang pak. Estimasi sore ini sudah jalan",
    sender_id: "SLS-001",
    recipient_id: "CST-001",
    time: "09:02",
    created_at: d,
  },
  {
    id: 6,
    message: "Sedang disiapkan gudang pak. Estimasi sore ini sudah jalan",
    sender_id: "SLS-001",
    recipient_id: "CST-001",
    time: "09:02",
    created_at: d,
  },
  {
    id: 7,
    message: "Sedang disiapkan gudang pak. Estimasi sore ini sudah jalan",
    sender_id: "SLS-001",
    recipient_id: "CST-001",
    time: "09:02",
    created_at: d,
  },
  {
    id: 8,
    message: "Sedang disiapkan gudang pak. Estimasi sore ini sudah jalan",
    sender_id: "SLS-001",
    recipient_id: "CST-001",
    time: "09:02",
    created_at: d,
  },
  {
    id: 9,
    message: "Sedang disiapkan gudang pak. Estimasi sore ini sudah jalan",
    sender_id: "SLS-001",
    recipient_id: "CST-001",
    time: "09:02",
    created_at: d,
  },
  {
    id: 10,
    message: "Sedang disiapkan gudang pak. Estimasi sore ini sudah jalan",
    sender_id: "SLS-001",
    recipient_id: "CST-001",
    time: "09:02",
    created_at: d,
  },
];

// NOTE: CART
export const CartOrderDetail = [
  {
    id: "CAT-1",
    categoryName: "Kartu Perdana",
    subCategoryName: "Telkomsel",
    isCategorySelected: false,
    product: [
      {
        id: 1,
        name: "Simpati 3 GB",
        normalPrice: 30_000,
        discountPrice: 25_000,
        isProductSelected: false,
        note: "",
        qty: 10,
        unit: "pcs",
        voucher: ["THR2026"],
      },
      {
        id: 2,
        name: "by.U 3 GB",
        normalPrice: 30_000,
        discountPrice: null,
        isProductSelected: false,
        note: "",
        qty: 10,
        unit: "pcs",
        voucher: [],
      },
      {
        id: 3,
        name: "Simpati Segel Nol K",
        normalPrice: 11_000,
        discountPrice: null,
        isProductSelected: false,
        note: "",
        qty: 10,
        unit: "pcs",
        voucher: [],
      },
    ],
  },
  {
    id: "CAT-2",
    categoryName: "Voucher Fisik",
    subCategoryName: "by.U",
    isCategorySelected: false,
    product: [
      {
        id: 1,
        name: "Simpati 3 GB",
        normalPrice: 30_000,
        discountPrice: null,
        isProductSelected: false,
        note: "",
        qty: 10,
        unit: "pcs",
        voucher: [],
      },
    ],
  },
];

// NOTE: HOME KPI
export const HomeKpi = {
  sales_this_month: 187_500_000,
  total_orders: 142,
  return_rate: 4.2,
  gross_profit: 38_200_000,
};

export const HomeKpiTrend = {
  sales: { change: 8.2, trend: "up" as const },
  orders: { change: 5.0, trend: "up" as const },
  return_rate: { change: 0.3, trend: "down" as const },
  gross_profit: { change: 11.2, trend: "up" as const },
};

export const MonthlyChartData: Record<
  number,
  { day: string; value: number }[]
> = {
  0: [
    { day: "Mg 1", value: 28_000_000 },
    { day: "Mg 2", value: 24_000_000 },
    { day: "Mg 3", value: 32_000_000 },
    { day: "Mg 4", value: 38_000_000 },
  ],
  1: [
    { day: "Mg 1", value: 25_000_000 },
    { day: "Mg 2", value: 30_000_000 },
    { day: "Mg 3", value: 34_000_000 },
    { day: "Mg 4", value: 42_000_000 },
  ],
  2: [
    { day: "Mg 1", value: 34_000_000 },
    { day: "Mg 2", value: 30_000_000 },
    { day: "Mg 3", value: 40_000_000 },
    { day: "Mg 4", value: 48_000_000 },
  ],
  3: [
    { day: "Mg 1", value: 38_000_000 },
    { day: "Mg 2", value: 43_000_000 },
    { day: "Mg 3", value: 40_000_000 },
    { day: "Mg 4", value: 54_000_000 },
  ],
  4: [
    { day: "Mg 1", value: 40_000_000 },
    { day: "Mg 2", value: 48_000_000 },
    { day: "Mg 3", value: 44_000_000 },
    { day: "Mg 4", value: 65_000_000 },
  ],
  5: [
    { day: "Mg 1", value: 45_000_000 },
    { day: "Mg 2", value: 52_000_000 },
    { day: "Mg 3", value: 58_000_000 },
    { day: "Mg 4", value: 70_000_000 },
  ],
  6: [
    { day: "Mg 1", value: 52_000_000 },
    { day: "Mg 2", value: 48_000_000 },
    { day: "Mg 3", value: 62_000_000 },
    { day: "Mg 4", value: 75_000_000 },
  ],
  7: [
    { day: "Mg 1", value: 44_000_000 },
    { day: "Mg 2", value: 50_000_000 },
    { day: "Mg 3", value: 56_000_000 },
    { day: "Mg 4", value: 65_000_000 },
  ],
  8: [
    { day: "Mg 1", value: 50_000_000 },
    { day: "Mg 2", value: 58_000_000 },
    { day: "Mg 3", value: 64_000_000 },
    { day: "Mg 4", value: 74_000_000 },
  ],
  9: [
    { day: "Mg 1", value: 58_000_000 },
    { day: "Mg 2", value: 65_000_000 },
    { day: "Mg 3", value: 72_000_000 },
    { day: "Mg 4", value: 85_000_000 },
  ],
  10: [
    { day: "Mg 1", value: 56_000_000 },
    { day: "Mg 2", value: 62_000_000 },
    { day: "Mg 3", value: 70_000_000 },
    { day: "Mg 4", value: 82_000_000 },
  ],
  11: [
    { day: "Mg 1", value: 72_000_000 },
    { day: "Mg 2", value: 80_000_000 },
    { day: "Mg 3", value: 90_000_000 },
    { day: "Mg 4", value: 105_000_000 },
  ],
};

// NOTE: WEEKLY REVENUE (Mon–Sun)
export const WeeklyRevenueData = [
  { day: "Sen", value: 24_000_000 },
  { day: "Sel", value: 31_500_000 },
  { day: "Rab", value: 18_000_000 },
  { day: "Kam", value: 42_000_000 },
  { day: "Jum", value: 27_500_000 },
  { day: "Sab", value: 35_000_000 },
  { day: "Min", value: 9_500_000 },
];

// NOTE: SALES REPORT
export const SalesReportSummary = {
  total_value: 187_500_000,
  net_revenue: 162_300_000,
  total_profit: 38_200_000,
  average_margin: 23.5,
};
export const RevenueByOutlet = [
  { id: 1, name: "Batam Center", revenue: 120_000_000, orders: 48 },
  { id: 2, name: "Toko Maju Jaya", revenue: 72_000_000, orders: 48 },
  { id: 3, name: "Berkah Cell", revenue: 54_500_000, orders: 36 },
  { id: 4, name: "Sinar Abadi Jaya", revenue: 38_000_000, orders: 34 },
  { id: 5, name: "Makmur Abadi", revenue: 23_000_000, orders: 24 },
];
export const RevenueByProduct = [
  {
    id: 1,
    name: "Simpati 3 GB",
    category: "Kartu Perdana",
    revenue: 62_000_000,
    qty: 2480,
  },
  {
    id: 2,
    name: "by.U 3 GB",
    category: "Kartu Perdana",
    revenue: 45_000_000,
    qty: 1500,
  },
  {
    id: 3,
    name: "JITU 1 Internet 50M",
    category: "Internet",
    revenue: 38_400_000,
    qty: 160,
  },
  {
    id: 4,
    name: "Simpati Segel Nol K",
    category: "Kartu Perdana",
    revenue: 22_000_000,
    qty: 2000,
  },
  {
    id: 5,
    name: "Voucher Internet",
    category: "Voucher",
    revenue: 20_100_000,
    qty: 670,
  },
];

// NOTE: OUTLET STOCK REPORT
export const OutletStockReportData = [
  {
    id: "OTLT-001",
    outlet: "Toko Maju Jaya",
    items: [
      { product: "Simpati 3 GB", stock: 320, unit: "pcs" },
      { product: "by.U 3 GB", stock: 180, unit: "pcs" },
      { product: "Simpati Segel Nol K", stock: 500, unit: "pcs" },
    ],
  },
  {
    id: "OTLT-002",
    outlet: "Berkah Cell",
    items: [
      { product: "Simpati 3 GB", stock: 210, unit: "pcs" },
      { product: "Voucher Internet", stock: 90, unit: "pcs" },
    ],
  },
  {
    id: "OTLT-003",
    outlet: "Sinar Abadi Jaya",
    items: [
      { product: "JITU 1 Internet 50M", stock: 40, unit: "unit" },
      { product: "Simpati 3 GB", stock: 150, unit: "pcs" },
    ],
  },
  {
    id: "OTLT-004",
    outlet: "Makmur Abadi",
    items: [
      { product: "JITU 1 Internet 50M", stock: 40, unit: "unit" },
      { product: "Simpati 3 GB", stock: 150, unit: "pcs" },
    ],
  },
  {
    id: "OTLT-005",
    outlet: "Batam Center",
    items: [
      { product: "JITU 1 Internet 50M", stock: 40, unit: "unit" },
      { product: "Simpati 3 GB", stock: 150, unit: "pcs" },
    ],
  },
];

// NOTE: RETURN REPORT
export const MonthlyReturnReasonsData: Record<number, number[]> = {
  // [Damaged%, Expired%, WrongItem%, Other%]
  0: [40, 25, 20, 15],
  1: [35, 30, 20, 15],
  2: [45, 20, 20, 15],
  3: [38, 27, 20, 15],
  4: [42, 23, 22, 13],
  5: [45, 25, 15, 15],
  6: [50, 20, 18, 12],
  7: [43, 26, 19, 12],
  8: [40, 28, 18, 14],
  9: [45, 25, 15, 15],
  10: [48, 22, 17, 13],
  11: [45, 25, 15, 15],
};

export const MonthlyReturnChartData: Record<
  number,
  { day: string; value: number }[]
> = {
  0: [
    { day: "Mg 1", value: 2 },
    { day: "Mg 2", value: 1 },
    { day: "Mg 3", value: 3 },
    { day: "Mg 4", value: 2 },
  ],
  1: [
    { day: "Mg 1", value: 1 },
    { day: "Mg 2", value: 2 },
    { day: "Mg 3", value: 1 },
    { day: "Mg 4", value: 3 },
  ],
  2: [
    { day: "Mg 1", value: 3 },
    { day: "Mg 2", value: 2 },
    { day: "Mg 3", value: 4 },
    { day: "Mg 4", value: 2 },
  ],
  3: [
    { day: "Mg 1", value: 2 },
    { day: "Mg 2", value: 3 },
    { day: "Mg 3", value: 2 },
    { day: "Mg 4", value: 5 },
  ],
  4: [
    { day: "Mg 1", value: 4 },
    { day: "Mg 2", value: 3 },
    { day: "Mg 3", value: 5 },
    { day: "Mg 4", value: 4 },
  ],
  5: [
    { day: "Mg 1", value: 3 },
    { day: "Mg 2", value: 5 },
    { day: "Mg 3", value: 4 },
    { day: "Mg 4", value: 6 },
  ],
  6: [
    { day: "Mg 1", value: 5 },
    { day: "Mg 2", value: 4 },
    { day: "Mg 3", value: 6 },
    { day: "Mg 4", value: 5 },
  ],
  7: [
    { day: "Mg 1", value: 4 },
    { day: "Mg 2", value: 3 },
    { day: "Mg 3", value: 5 },
    { day: "Mg 4", value: 4 },
  ],
  8: [
    { day: "Mg 1", value: 3 },
    { day: "Mg 2", value: 4 },
    { day: "Mg 3", value: 6 },
    { day: "Mg 4", value: 5 },
  ],
  9: [
    { day: "Mg 1", value: 5 },
    { day: "Mg 2", value: 6 },
    { day: "Mg 3", value: 4 },
    { day: "Mg 4", value: 7 },
  ],
  10: [
    { day: "Mg 1", value: 4 },
    { day: "Mg 2", value: 5 },
    { day: "Mg 3", value: 6 },
    { day: "Mg 4", value: 5 },
  ],
  11: [
    { day: "Mg 1", value: 6 },
    { day: "Mg 2", value: 7 },
    { day: "Mg 3", value: 5 },
    { day: "Mg 4", value: 8 },
  ],
};

export const ReturnReportSummary = {
  total_return_value: 7_875_000,
  return_rate: 4.2,
  top_product: "Simpati 3 GB",
  top_outlet: "Toko Maju Jaya",
};
export const WeeklyReturnData = [
  { day: "Sen", value: 1 },
  { day: "Sel", value: 3 },
  { day: "Rab", value: 0 },
  { day: "Kam", value: 2 },
  { day: "Jum", value: 1 },
  { day: "Sab", value: 2 },
  { day: "Min", value: 0 },
];
export const ReturnReasons = [
  { id: 1, reason: "Produk rusak", count: 3, percent: 33 },
  { id: 2, reason: "Salah kirim", count: 3, percent: 33 },
  { id: 3, reason: "Tidak sesuai pesanan", count: 2, percent: 22 },
  { id: 4, reason: "Lainnya", count: 1, percent: 11 },
];

// NOTE: OWNER PROFILE
export const OwnerProfile = {
  name: "Budi Santoso",
  email: "budi.santoso@golden.id",
  phone: "+62 812-3456-7890",
  avatar: null,
};
