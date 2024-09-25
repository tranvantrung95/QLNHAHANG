import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { LayoutComponent } from './layout/layout.component'; // Import LayoutComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent,RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'qlnhahang';
}

