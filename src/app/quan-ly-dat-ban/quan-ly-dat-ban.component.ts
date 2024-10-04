import { Component, ViewChild, TemplateRef,ViewEncapsulation  } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid';  // Plugin hiển thị lịch tháng
import timeGridPlugin from '@fullcalendar/timegrid'; // Plugin timeGrid để hiển thị lịch theo tuần
import interactionPlugin from '@fullcalendar/interaction'; 
import { CalendarOptions } from '@fullcalendar/core';
import viLocale from '@fullcalendar/core/locales/vi';  // Để sử dụng ngôn ngữ tiếng Việt
import {ThemDatBanComponent} from '../them-dat-ban/them-dat-ban.component';
import { RouterModule } from '@angular/router'; //Thêm router mới định tuyến được

@Component({
  selector: 'app-quan-ly-dat-ban',
  standalone: true,
  imports: [FullCalendarModule, ThemDatBanComponent,RouterModule],
  templateUrl: './quan-ly-dat-ban.component.html',
  styleUrls: ['./quan-ly-dat-ban.component.css'],
})
export class QuanLyDatBanComponent {

  @ViewChild('eventContent', { static: true }) eventContent!: TemplateRef<any>;  // Tham chiếu tới ng-template

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin,timeGridPlugin, interactionPlugin],  // Sử dụng các plugin cần thiết
    initialView: 'timeGridWeek',
    locale: viLocale,  // Sử dụng ngôn ngữ tiếng Việt
    slotMinTime: '08:00:00',  // Thiết lập giờ bắt đầu hiển thị (8h sáng)
    slotMaxTime: '21:00:00',  // Thiết lập giờ kết thúc hiển thị (21h tối)
    slotDuration: '00:30:00',  // Chia các slot thời gian thành 30 phút trong cột ngày
    slotLabelInterval: '01:00',  // Hiển thị giờ nguyên trong cột giờ bên trái mà không chia nhỏ
    nowIndicator: true,  // Hiển thị thời gian hiện tại (dòng đỏ)
    allDaySlot: false,  // Ẩn hiển thị "Cả ngày"
    editable: true,  // Cho phép kéo thả sự kiện
    selectable: true,  // Cho phép chọn slot
    height: '100%',  // FullCalendar sẽ tự động điều chỉnh chiều cao theo nội dung
    stickyHeaderDates: true,  // Giữ cố định tên cột ngày khi cuộn
    headerToolbar: {
      left: 'prev,next today',  // Nút điều hướng
      center: 'title',  // Tiêu đề ở giữa
      right: 'dayGridMonth,timeGridWeek,timeGridDay'  // Nút chuyển đổi giữa tháng, tuần, ngày
    },
    events: [
      { title: 'Bàn 1', start: '2024-10-04T17:00:00', end: '2024-10-04T17:30:00' },
      { title: 'Bàn 2', start: '2024-10-03T19:00:00', end: '2024-10-03T20:00:00' }
    ],
    eventContent: (arg: any) => {  // Tùy chỉnh nội dung sự kiện bằng template
      const template = this.eventContent.createEmbeddedView(arg);
      return { domNodes: [template.rootNodes[0]] };
    }
  };

}
