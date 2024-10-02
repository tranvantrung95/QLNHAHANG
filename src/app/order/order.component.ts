import { Component, OnInit, Inject } from '@angular/core';
import { MonAn } from '../models/mon-an';  // Import interface từ thư mục models
import { Order } from '../models/mon-an';
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
  { tenMon: 'Phở bò', donGia: 50000, daChon: false, imageUrl: 'monan1.webp', trangThaiMon:'' },
  { tenMon: 'Bánh mì thịt', donGia: 30000, daChon: false, imageUrl: 'nuoclau.webp',trangThaiMon:'' },
  { tenMon: 'Bún chả', donGia: 60000, daChon: false, imageUrl: 'raucu.webp' ,trangThaiMon:''},
  { tenMon: 'Cơm tấm', donGia: 70000, daChon: false, imageUrl: 'thitlon.webp',trangThaiMon:'' },
  { tenMon: 'Gỏi cuốn', donGia: 25000, daChon: false, imageUrl: 'nuoclau.webp',trangThaiMon:'' },
  { tenMon: 'Cháo gà', donGia: 45000, daChon: false, imageUrl: 'monan1.webp',trangThaiMon:'' },
  { tenMon: 'Hủ tiếu', donGia: 55000, daChon: false, imageUrl: 'raucu.webp' ,trangThaiMon:''},
  { tenMon: 'Mì xào hải sản', donGia: 80000, daChon: false, imageUrl: 'monan1.webp',trangThaiMon:'' },
  { tenMon: 'Gà quay', donGia: 95000, daChon: false, imageUrl: 'nuoclau.webp' ,trangThaiMon:''},
  { tenMon: 'Tôm nướng', donGia: 120000, daChon: false, imageUrl: 'thitlon.webp' ,trangThaiMon:''},
  { tenMon: 'Sườn nướng', donGia: 110000, daChon: false, imageUrl: 'nuoclau.webp' ,trangThaiMon:''},
  { tenMon: 'Lẩu thái', donGia: 200000, daChon: false, imageUrl: 'monan1.webp' ,trangThaiMon:''},
  { tenMon: 'Bò lúc lắc', donGia: 180000, daChon: false, imageUrl: 'raucu.webp',trangThaiMon:'' },
  { tenMon: 'Kem dừa', donGia: 45000, daChon: false, imageUrl: 'thitlon.webp' ,trangThaiMon:''},
  { tenMon: 'Chè ba màu', donGia: 35000, daChon: false, imageUrl: 'nuoclau.webp',trangThaiMon:'' }
];


  // // // Danh sách món đã đặt
  // danhSachDatMon: MonAn[] = [];

  // Danh sách order đã đặt
  danhSachDatMon: Order[] = [];


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

  // // Tính tổng tiền của các món đã đặt
  // get tongTien(): number {
  //   return this.danhSachDatMon.reduce((total, mon) => total + (mon.soLuong || 1) * mon.donGia, 0);
  // }

  get tongTien(): number {
  return this.danhSachDatMon.reduce((total, order) => total + (order.soLuong || 1) * order.donGia, 0);
}


  //Chọn món ăn và thêm vào danh sách đặt món
  // chonMon(monAn: MonAn) {
  //   monAn.daChon = true; // Đánh dấu món đã được chọn
  //   const datMon = { ...monAn, soLuong: 1, trangThaiMon: 'Chưa lên' }; // Mặc định số lượng là 1
  //   this.danhSachDatMon.push(datMon); // Thêm vào danh sách đã đặt
  //   this.updateQRCode(); // Cập nhật QRCode
  // }

chonMon(monAn: MonAn) {
  const newOrder: Order = {
    tenMon: monAn.tenMon,
    soLuong: 1, // Mặc định mỗi lần gọi là 1 phần
    donGia: monAn.donGia,
    trangThai: 'Chưa lên', // Trạng thái mặc định là 'Chưa lên'
    imageUrl: monAn.imageUrl
  };

  this.danhSachDatMon.push(newOrder); // Thêm order mới vào danh sách đặt món
  this.updateQRCode(); // Cập nhật QRCode nếu cần
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
  // xoaMon(mon: MonAn) {
  //   // Loại bỏ món khỏi danh sách đặt món
  //   this.danhSachDatMon = this.danhSachDatMon.filter(m => m !== mon);

  //   // Tìm lại món trong danh sách món ăn và đặt trạng thái daChon = false để có thể chọn lại
  //   const monAn = this.danhSachMonAn.find(m => m.tenMon === mon.tenMon);
  //   if (monAn) {
  //     monAn.daChon = false;
  //   }
  //   this.updateQRCode(); // Cập nhật QRCode
  // }

xoaMon(order: Order) {
  // Loại bỏ món khỏi danh sách đặt món dựa trên tên món (hoặc một đặc tính duy nhất khác nếu cần)
  this.danhSachDatMon = this.danhSachDatMon.filter(o => o !== order);

  // Tìm lại món trong danh sách món ăn và đặt trạng thái daChon = false để có thể chọn lại
  const monAnInDanhSach = this.danhSachMonAn.find(m => m.tenMon === order.tenMon);
  if (monAnInDanhSach) {
    monAnInDanhSach.daChon = false;
  }

  this.updateQRCode(); // Cập nhật QRCode
}



  // In bill (Thanh toán)
inBill() {
  // Tạo đối tượng để gộp các món theo tên
  const gopMon: { [tenMon: string]: { soLuong: number, donGia: number } } = {};
  let tongTien = 0; // Khởi tạo tổng tiền

  // Duyệt qua danh sách món đã đặt và gộp các món theo tên
  this.danhSachDatMon.forEach(mon => {
    if (gopMon[mon.tenMon]) {
      // Nếu món đã có, tăng số lượng
      gopMon[mon.tenMon].soLuong += mon.soLuong;
    } else {
      // Nếu món chưa có, thêm vào
      gopMon[mon.tenMon] = {
        soLuong: mon.soLuong,
        donGia: mon.donGia
      };
    }
  });

  // In hóa đơn gộp
  console.log('Hóa đơn:');
  Object.keys(gopMon).forEach(tenMon => {
    const mon = gopMon[tenMon];
    const thanhTien = mon.soLuong * mon.donGia; // Tính thành tiền cho từng món
    tongTien += thanhTien; // Cộng dồn thành tiền vào tổng tiền
    console.log(`${tenMon}: ${mon.soLuong} phần, Đơn giá: ${mon.donGia.toLocaleString('vi-VN')} VND, Thành tiền: ${thanhTien.toLocaleString('vi-VN')} VND`);
  });

  // In tổng tiền
  console.log(`Tổng tiền: ${tongTien.toLocaleString('vi-VN')} VND`);

  // Hiển thị thông báo thành công
  alert(`In hóa đơn thành công! Tổng tiền: ${tongTien.toLocaleString('vi-VN')} VND`);
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

  // Hàm cập nhật trạng thái món
capNhatTrangThaiMon(mon: MonAn) {
  if (mon.trangThaiMon === 'Chưa lên') {
    mon.trangThaiMon = 'Đã lên'; // Cập nhật trạng thái thành 'Đã lên'
  }
}

capNhatTrangThaiOrder(order: Order) {
  if (order.trangThai === 'Chưa lên') {
    order.trangThai = 'Đã lên'; // Cập nhật trạng thái thành 'Đã lên'
    this.updateQRCode(); // Cập nhật lại QRCode nếu cần
  }
}


}
