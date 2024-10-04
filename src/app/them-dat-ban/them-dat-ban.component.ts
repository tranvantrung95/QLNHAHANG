import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuanLyDatBanComponent } from '../quan-ly-dat-ban/quan-ly-dat-ban.component';
import { RouterModule } from '@angular/router'; // Thêm router để định tuyến
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { NgModule } from '@angular/core';

registerLocaleData(localeVi, 'vi');

@Component({
  selector: 'app-them-dat-ban',
  standalone: true,
  imports: [QuanLyDatBanComponent, RouterModule],
  templateUrl: './them-dat-ban.component.html',
  styleUrl: './them-dat-ban.component.css'
})

export class ThemDatBanComponent {
  formattedStartTime: string = '';
  formattedEndTime: string = '';

  ngOnInit() {
    // Thiết lập thời gian mặc định
    this.setInitialTime();
  }

  // Hàm thiết lập thời gian ban đầu
  setInitialTime() {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setHours(startDate.getHours() + 1);

    const options = { 
      hour: '2-digit' as '2-digit', 
      minute: '2-digit' as '2-digit', 
      hour12: false };

    this.formattedStartTime = new Intl.DateTimeFormat('vi-VN', options).format(startDate);
    this.formattedEndTime = new Intl.DateTimeFormat('vi-VN', options).format(endDate);
  }

  // Hàm xử lý khi thời gian thay đổi
  onTimeChange(event: any, isStartTime: boolean) {
    const timeValue = event.target.value; // Lấy giá trị giờ mà người dùng chọn
    const [hour, minute] = timeValue.split(':');
    const date = new Date();
    date.setHours(+hour);
    date.setMinutes(+minute);

    const options = { 
      hour: '2-digit' as '2-digit', 
      minute: '2-digit' as '2-digit', 
      hour12: false };
    const formattedTime = new Intl.DateTimeFormat('vi-VN', options).format(date);

    if (isStartTime) {
      this.formattedStartTime = formattedTime; // Cập nhật thời gian bắt đầu
    } else {
      this.formattedEndTime = formattedTime; // Cập nhật thời gian kết thúc
    }
  }
}
