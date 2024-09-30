import { Component, OnInit } from '@angular/core';
import { Tang } from '../models/tang'; // Import interface Tầng
import { duLieuGia } from '../models/mock-data'; // Import dữ liệu giả
import { CommonModule } from '@angular/common';
import {OrderComponent} from '../order/order.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-quan-ly-ban',
  standalone: true,
  imports: [CommonModule,OrderComponent],
  templateUrl: './quan-ly-ban.component.html',
  styleUrls: ['./quan-ly-ban.component.css'] // Sử dụng styleUrls (số nhiều)
})
export class QuanLyBanComponent implements OnInit {
  dsTang: Tang[] = []; // Sử dụng interface Tầng để định nghĩa danh sách tầng
  selectedTab: number = 0; // Khai báo biến selectedTab để quản lý tab
  selectedTang: number = -1;

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
    this.selectedTang = index;
  }

  // constructor(private router: Router) {}

  // // Hàm mở order của bàn khi nhấn vào bàn
  // openOrder(ban: any) {
  //   this.router.navigate(['/order'], { queryParams: { tenBan: ban.tenBan } });
  // }


  constructor(private dialog: MatDialog) {}

  // Hàm mở modal để hiển thị OrderComponent
openOrder(ban: any) {
  const dialogRef = this.dialog.open(OrderComponent, {
    panelClass: 'custom-dialog-container', // Áp dụng lớp tùy chỉnh
    data: { tenBan: ban.tenBan, danhSachDatMon: [] },
    autoFocus: false,
    disableClose: false
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Order đã xác nhận:', result);
    }
  });
}




}
