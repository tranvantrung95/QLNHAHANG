import { Component, OnInit } from '@angular/core';
import { Tang } from '../models/tang'; // Import interface Tầng
import { duLieuGia } from '../models/mock-data'; // Import dữ liệu giả
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quan-ly-ban',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quan-ly-ban.component.html',
  styleUrls: ['./quan-ly-ban.component.css'] // Sử dụng styleUrls (số nhiều)
})
export class QuanLyBanComponent implements OnInit {
  dsTang: Tang[] = []; // Sử dụng interface Tầng để định nghĩa danh sách tầng
  selectedTab: number = 0; // Khai báo biến selectedTab để quản lý tab

  ngOnInit(): void {
    // Gán dữ liệu giả vào danh sách tầng
    this.dsTang = duLieuGia;
  }

  // Hàm để xác định class của trạng thái bàn
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

  // Hàm để thay đổi tab khi nhấn vào
  changeTab(index: number): void {
    this.selectedTab = index;
  }
}
