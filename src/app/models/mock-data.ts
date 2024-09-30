import { Tang } from './tang'; // Import interface Tầng

export const duLieuGia: Tang[] = [
  {
    maTang: 1,
    tenTang: 'Tầng 1',
    dsKhuVuc: [
      {
        maKhuVuc: 1,
        tenKhuVuc: 'Khu A',
        dsBan: [
          { maBan: 1, tenBan: 'Bàn 1', trangThai: 'Trống', maQr: 'https://example.com/order?ban=1' },
          { maBan: 2, tenBan: 'Bàn 2', trangThai: 'Đã đặt', maQr: 'https://example.com/order?ban=2' },
          { maBan: 7, tenBan: 'Bàn 7', trangThai: 'Đã đặt', maQr: 'https://example.com/order?ban=7' },
          { maBan: 8, tenBan: 'Bàn 8', trangThai: 'Đã đặt', maQr: 'https://example.com/order?ban=8' },
          { maBan: 9, tenBan: 'Bàn 9', trangThai: 'Đã đặt', maQr: 'https://example.com/order?ban=9' },
          { maBan: 1, tenBan: 'Bàn 1', trangThai: 'Trống', maQr: 'https://example.com/order?ban=1' },
          { maBan: 2, tenBan: 'Bàn 2', trangThai: 'Đã đặt', maQr: 'https://example.com/order?ban=2' },
          { maBan: 7, tenBan: 'Bàn 7', trangThai: 'Đã đặt', maQr: 'https://example.com/order?ban=7' },
          { maBan: 1, tenBan: 'Bàn 1', trangThai: 'Trống', maQr: 'https://example.com/order?ban=1' },
          { maBan: 2, tenBan: 'Bàn 2', trangThai: 'Đã đặt', maQr: 'https://example.com/order?ban=2' },
          { maBan: 7, tenBan: 'Bàn 7', trangThai: 'Đã đặt', maQr: 'https://example.com/order?ban=7' },
          { maBan: 8, tenBan: 'Bàn 8', trangThai: 'Đã đặt', maQr: 'https://example.com/order?ban=8' },
          { maBan: 9, tenBan: 'Bàn 9', trangThai: 'Đã đặt', maQr: 'https://example.com/order?ban=9' },
          { maBan: 1, tenBan: 'Bàn 1', trangThai: 'Trống', maQr: 'https://example.com/order?ban=1' },
          { maBan: 2, tenBan: 'Bàn 2', trangThai: 'Đã đặt', maQr: 'https://example.com/order?ban=2' },
          { maBan: 7, tenBan: 'Bàn 7', trangThai: 'Đã đặt', maQr: 'https://example.com/order?ban=7' },
        ]
      },
      {
        maKhuVuc: 2,
        tenKhuVuc: 'Khu B',
        dsBan: [
          { maBan: 3, tenBan: 'Bàn 3', trangThai: 'Đang sử dụng', maQr: 'https://example.com/order?ban=3' },
          { maBan: 4, tenBan: 'Bàn 4', trangThai: 'Cần dọn dẹp', maQr: 'https://example.com/order?ban=4' },
          { maBan: 3, tenBan: 'Bàn 3', trangThai: 'Đang sử dụng', maQr: 'https://example.com/order?ban=3' },
          { maBan: 4, tenBan: 'Bàn 4', trangThai: 'Cần dọn dẹp', maQr: 'https://example.com/order?ban=4' }
        ]
      }
    ]
  },
  {
    maTang: 2,
    tenTang: 'Tầng 2',
    dsKhuVuc: [
      {
        maKhuVuc: 3,
        tenKhuVuc: 'Khu C',
        dsBan: [
          { maBan: 5, tenBan: 'Bàn 5', trangThai: 'Trống', maQr: 'https://example.com/order?ban=5' },
          { maBan: 6, tenBan: 'Bàn 6', trangThai: 'Đã đặt', maQr: 'https://example.com/order?ban=6' },
          { maBan: 6, tenBan: 'Bàn 6', trangThai: 'Đã đặt', maQr: 'https://example.com/order?ban=6' },
          { maBan: 6, tenBan: 'Bàn 6', trangThai: 'Đã đặt', maQr: 'https://example.com/order?ban=6' },
          { maBan: 6, tenBan: 'Bàn 6', trangThai: 'Đã đặt', maQr: 'https://example.com/order?ban=6' }
        ]
      }
    ]
  },
    {
    maTang: 3,
    tenTang: 'Tầng 3',
    dsKhuVuc: [
      {
        maKhuVuc: 3,
        tenKhuVuc: 'Khu D',
        dsBan: [
          { maBan: 5, tenBan: 'Bàn 5', trangThai: 'Trống', maQr: 'https://example.com/order?ban=5' },
          { maBan: 6, tenBan: 'Bàn 6', trangThai: 'Đã đặt', maQr: 'https://example.com/order?ban=6' }
        ]
      }
    ]
  }
];
