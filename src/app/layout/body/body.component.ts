import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import {QuanLyBanComponent} from '../../quan-ly-ban/quan-ly-ban.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [DashboardComponent,QuanLyBanComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
