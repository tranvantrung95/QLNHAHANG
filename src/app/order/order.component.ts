import { Component, OnInit, Inject } from '@angular/core';
import { MonAn } from '../models/mon-an';  // Import interface từ thư mục models
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms'; // Import FormsModule để sử dụng ngModel

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule, QRCodeModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  tenBan: string = '';
  activeTab: string = 'monAn'; // Mặc định là tab danh sách món ăn
  trangThaiBan: string = 'Trống'; // Giá trị mặc định
  trangThaiOptions: string[] = ['Trống', 'Đang sử dụng', 'Đặt trước'];

  // Thông tin đặt trước (chỉ áp dụng khi trạng thái là 'Đặt trước')
  thongTinDat = {
      hoTen: 'Nguyễn Văn A',
      soDienThoai: '0123456789',
      thoiGianDen: '18:00 01/10/2024',
      soNguoiLon: 2,
      soTreEm: 1
  };

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

  // Các biến cho QRCode
  qrData: string ='';
  bankCode: string = 'TECHCOMBANK'; // Mã ngân hàng Techcombank
  accountNumber: string = '0123456789';
  amount: number = 0;
  transferContent: string='';

  constructor(
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<OrderComponent>, // Để sử dụng MatDialog
    @Inject(MAT_DIALOG_DATA) public data: any // Lấy dữ liệu truyền từ dialog
  ) { }

  ngOnInit(): void {
    // Lấy tên bàn và trạng thái bàn từ data nếu hiển thị qua dialog
    this.tenBan = this.data.tenBan || '';
    this.trangThaiBan = this.data.trangThai || '';

    // Nếu sử dụng queryParams để lấy tên bàn và trạng thái bàn (nếu không dùng dialog)
    this.route.queryParams.subscribe(params => {
      if (!this.tenBan) {
        this.tenBan = params['tenBan'] || 'Chưa rõ bàn';
      }
      if (!this.trangThaiBan) {
        this.trangThaiBan = params['trangThai'] || 'Trống';
      }
    });

    // Khởi tạo dữ liệu QRCode
    this.generateQRCodeData();
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
    this.updateQRCode(); // Cập nhật QRCode
  }

  // Tăng số lượng món ăn
  tangSoLuong(mon: any) {
    mon.soLuong += 1;
    this.updateQRCode(); // Cập nhật QRCode
  }

  // Giảm số lượng món ăn
  giamSoLuong(mon: any) {
    if (mon.soLuong > 1) {
      mon.soLuong -= 1;
      this.updateQRCode(); // Cập nhật QRCode
    }
  }

  // Xóa món ăn khỏi danh sách đã đặt
  xoaMon(mon: MonAn) {
    // Loại bỏ món khỏi danh sách đặt món
    this.danhSachDatMon = this.danhSachDatMon.filter(m => m !== mon);

    // Tìm lại món trong danh sách món ăn và đặt trạng thái daChon = false để có thể chọn lại
    const monAn = this.danhSachMonAn.find(m => m.tenMon === mon.tenMon);
    if (monAn) {
      monAn.daChon = false;
    }
    this.updateQRCode(); // Cập nhật QRCode
  }

  // In bill (Thanh toán)
  inBill() {
    console.log('In hóa đơn:', this.danhSachDatMon);
    alert('In hóa đơn thành công! ' + JSON.stringify(this.danhSachDatMon));
  }

  // Đóng dialog khi không muốn đặt nữa
  closeDialog(): void {
    this.dialogRef.close();
  }

  // Hàm tạo dữ liệu QRCode
  generateQRCodeData() {
    this.amount = this.tongTien; // Tổng số tiền
    this.transferContent = `${this.tenBan} ${new Date().toLocaleString('vi-VN', { hour12: false })}`;

    // Tạo URL để lấy hình ảnh QRCode từ VietQR
    const bankCode = this.bankCode;
    const accountNumber = this.accountNumber;
    const accountName = encodeURIComponent('Nhà Hàng ABC'); // Thay bằng tên tài khoản của bạn
    const amount = this.amount;
    const memo = encodeURIComponent(this.transferContent);

    this.qrData = `https://img.vietqr.io/image/${bankCode}-${accountNumber}-compact.png?accountName=${accountName}&amount=${amount}&addInfo=${memo}`;
  }

  // Hàm cập nhật QRCode khi có thay đổi
  updateQRCode() {
    this.generateQRCodeData();
  }

  // Hàm thay đổi trạng thái bàn
  thayDoiTrangThaiBan(trangThaiMoi: string) {
    // Xử lý logic khi trạng thái bàn thay đổi
    console.log('Trạng thái bàn đã được thay đổi thành:', trangThaiMoi);
    // Nếu trạng thái mới là 'Đặt trước' thì có thể hiển thị hoặc cập nhật thông tin đặt chỗ
  }
}
