import { Component, OnInit } from '@angular/core'; // Import OnInit từ @angular/core
import { Tang } from '../models/tang'; // Import interface Tầng
import { duLieuGia } from '../models/mock-data'; // Import dữ liệu giả
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quan-ly-ban',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quan-ly-ban.component.html',
  styleUrl: './quan-ly-ban.component.css'
})

// export class QuanLyBanComponent implements OnInit {
//   dsTang: any[] = [];

//   ngOnInit(): void {
//     this.dsTang = [
//       {
//         maTang: 1,
//         tenTang: 'Tầng 1',
//         dsKhuVuc: [
//           {
//             maKhuVuc: 1,
//             tenKhuVuc: 'Khu A',
//             dsBan: [
//               { maBan: 1, tenBan: 'Bàn 1', trangThai: 'Trống', maQr: 'https://example.com/qrcode1' },
//               { maBan: 2, tenBan: 'Bàn 2', trangThai: 'Đã đặt', maQr: 'https://example.com/qrcode2' }
//             ]
//           }
//         ]
//       }
//     ];
//   }
// }


export class QuanLyBanComponent implements OnInit { // Sử dụng OnInit ở đây
  dsTang: Tang[] = []; // Sử dụng interface Tầng để định nghĩa danh sách tầng

  ngOnInit(): void { // Hàm OnInit, được gọi khi component được khởi tạo
    // Gán dữ liệu giả vào danh sách tầng
    this.dsTang = duLieuGia;

    // this.dsTang = [
    //   {
    //     maTang: 1,
    //     tenTang: 'Tầng 1',
    //     dsKhuVuc: [
    //       {
    //         maKhuVuc: 1,
    //         tenKhuVuc: 'Khu A',
    //         dsBan: [
    //           { maBan: 1, tenBan: 'Bàn 1', trangThai: 'Trống', maQr: 'https://example.com/qrcode1' },
    //           { maBan: 2, tenBan: 'Bàn 2', trangThai: 'Đã đặt', maQr: 'https://example.com/qrcode2' }
    //         ]
    //       }
    //     ]
    //   }
    // ];
  }

  getTrangThaiClass(trangThai: string): string {
    switch (trangThai) {
      case 'Trống':
        return 'trang-thai-trong';
      case 'Đã đặt':
        return 'trang-thai-dat';
      case 'Đang sử dụng':
        return 'trang-thai-dang-su-dung';
      case 'Cần dọn dẹp':
        return 'trang-thai-can-don-dep';
      default:
        return '';
    }
  }
}
