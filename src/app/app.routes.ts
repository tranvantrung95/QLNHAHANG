import { Routes } from '@angular/router';
import { QuanLyBanComponent } from './quan-ly-ban/quan-ly-ban.component'; // Import component Quản lý bàn
import { DashboardComponent } from './dashboard/dashboard.component'; // Import component Dashboard
import { OrderComponent } from './order/order.component';
import {QuanLyDatBanComponent} from './quan-ly-dat-ban/quan-ly-dat-ban.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'quan-ly-ban', component: QuanLyBanComponent }, // Định nghĩa đường dẫn cho Quản lý bàn
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Đường dẫn mặc định
  { path: 'order', component: OrderComponent }, // Đường dẫn đến OrderComponent
  {path: 'quan-ly-dat-ban', component:QuanLyDatBanComponent},
];
