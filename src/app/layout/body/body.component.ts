import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
