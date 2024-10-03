import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import timeGridPlugin from '@fullcalendar/timegrid'; // Plugin timeGrid để hiển thị lịch theo tuần
import interactionPlugin from '@fullcalendar/interaction'; 
import { CalendarOptions } from '@fullcalendar/core';
import viLocale from '@fullcalendar/core/locales/vi';  // Để sử dụng ngôn ngữ tiếng Việt

@Component({
  selector: 'app-quan-ly-dat-ban',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './quan-ly-dat-ban.component.html',
  styleUrls: ['./quan-ly-dat-ban.component.css'],
})
export class QuanLyDatBanComponent {

calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin, interactionPlugin], // Sử dụng timeGrid để hiển thị tuần làm việc
    initialView: 'timeGridWeek',  // Hiển thị lịch theo tuần làm việc
    locale: viLocale,  // Hiển thị ngôn ngữ tiếng Việt
    slotMinTime: '08:00:00',  // Thiết lập giờ bắt đầu hiển thị (8h sáng)
    slotMaxTime: '21:00:00',  // Thiết lập giờ kết thúc hiển thị (21h tối)
    slotDuration: '00:30:00',  // Chia các slot thời gian thành 30 phút trong cột ngày
    slotLabelInterval: '01:00',  // Hiển thị giờ nguyên trong cột giờ bên trái mà không chia nhỏ
    nowIndicator: true,  // Hiển thị thời gian hiện tại (dòng đỏ)
    allDaySlot: false,  // Ẩn hiển thị "Cả ngày"
    editable: true,  // Cho phép kéo thả sự kiện
    selectable: true,  // Cho phép chọn slot
    headerToolbar: {
      left: 'today prev,next',  // Nút điều hướng
      center: 'title',  // Tiêu đề ở giữa
      right: 'timeGridWeek'  // Hiển thị nút để chọn chế độ tuần làm việc
    },
    events: [
      { title: 'Bàn 1', start: '2024-10-02T17:00:00', end: '2024-10-02T18:00:00' },
      { title: 'Bàn 2', start: '2024-10-03T19:00:00', end: '2024-10-03T20:00:00' }
    ]
  };

}
