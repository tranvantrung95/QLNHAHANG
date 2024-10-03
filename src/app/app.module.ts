import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Import routes từ app.routes.ts
import { LayoutComponent } from './layout/layout.component';
import { UserListComponent } from './user-list/user-list.component';
import { OrderComponent } from './order/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Thêm phần này
import { MatDialogModule } from '@angular/material/dialog'; // Thêm phần này
import { QRCodeModule } from 'angularx-qrcode';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { QuanLyDatBanComponent } from './quan-ly-dat-ban/quan-ly-dat-ban.component';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Đặt RouterModule ở đây để cấu hình routing
    RouterModule.forRoot([
      { path: 'order', component: OrderComponent }, // Định tuyến đến OrderComponent
    ]),
    BrowserAnimationsModule, // Đảm bảo đã thêm BrowserAnimationsModule
    MatDialogModule,
    QRCodeModule,
    FullCalendarModule,
    QuanLyDatBanComponent,
  ],
  bootstrap: [],
})
export class AppModule {}
