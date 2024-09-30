import { Component, OnInit, Inject } from '@angular/core';
import { MonAn } from '../models/mon-an';  // Import interface từ thư mục models
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  tenBan: string = '';
  activeTab: string = 'monAn'; // Mặc định là tab danh sách món ăn

  // Khai báo kiểu MonAn cho danh sách món ăn
  danhSachMonAn: MonAn[] = [
    { tenMon: 'Phở bò', donGia: 50000, daChon: false },
    { tenMon: 'Bánh mì thịt', donGia: 30000, daChon: false },
    { tenMon: 'Bún chả', donGia: 60000, daChon: false },
    { tenMon: 'Cơm tấm', donGia: 70000, daChon: false },
    { tenMon: 'Gỏi cuốn', donGia: 25000, daChon: false },
    { tenMon: 'Cháo gà', donGia: 45000, daChon: false },
    { tenMon: 'Hủ tiếu', donGia: 55000, daChon: false },
    { tenMon: 'Mì xào hải sản', donGia: 80000, daChon: false },
    { tenMon: 'Gà quay', donGia: 95000, daChon: false },
    { tenMon: 'Tôm nướng', donGia: 120000, daChon: false },
    { tenMon: 'Sườn nướng', donGia: 110000, daChon: false },
    { tenMon: 'Lẩu thái', donGia: 200000, daChon: false },
    { tenMon: 'Bò lúc lắc', donGia: 180000, daChon: false },
    { tenMon: 'Kem dừa', donGia: 45000, daChon: false },
    { tenMon: 'Chè ba màu', donGia: 35000, daChon: false }
  ];

  // Danh sách món đã đặt
  danhSachDatMon: MonAn[] = [];

  constructor(
    private route: ActivatedRoute, 
    public dialogRef: MatDialogRef<OrderComponent>, // Để sử dụng MatDialog
    @Inject(MAT_DIALOG_DATA) public data: any // Lấy dữ liệu truyền từ dialog
  ) {}

  ngOnInit(): void {
    // Lấy tên bàn từ data nếu hiển thị qua dialog
    this.tenBan = this.data.tenBan || 'Chưa rõ bàn';

    // Nếu sử dụng queryParams để lấy tên bàn (nếu không dùng dialog)
    this.route.queryParams.subscribe(params => {
      if (!this.tenBan) {
        this.tenBan = params['tenBan'] || 'Chưa rõ bàn';
      }
    });
  }

  // Tính tổng tiền của các món đã đặt
  get tongTien(): number {
    return this.danhSachDatMon.reduce((total, mon) => total + (mon.soLuong || 1) * mon.donGia, 0);
  }

  // Chọn món ăn và thêm vào danh sách đặt món
  chonMon(monAn: MonAn) {
    monAn.daChon = true; // Đánh dấu món đã được chọn
    const datMon = { ...monAn, soLuong: 1 }; // Mặc định số lượng là 1
    this.danhSachDatMon.push(datMon); // Thêm vào danh sách đã đặt
  }

  // Tăng số lượng món ăn
  tangSoLuong(mon: any) {
    mon.soLuong += 1;
  }

  // Giảm số lượng món ăn
  giamSoLuong(mon: any) {
    if (mon.soLuong > 1) {
      mon.soLuong -= 1;
    }
  }

  // In bill (Thanh toán)
  inBill() {
    console.log('In hóa đơn:', this.danhSachDatMon);
    alert('In hóa đơn thành công!');
  }

  // Đóng dialog khi không muốn đặt nữa
  closeDialog(): void {
    this.dialogRef.close();
  }
}
