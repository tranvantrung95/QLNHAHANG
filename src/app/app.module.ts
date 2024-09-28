import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Import routes từ app.routes.ts
import { LayoutComponent } from './layout/layout.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Đặt RouterModule ở đây để cấu hình routing
  ],
  bootstrap: [],
})
export class AppModule {}
