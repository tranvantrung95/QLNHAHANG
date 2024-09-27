import { Component } from '@angular/core'; 
import { ChartComponent } from '../dashboard/chart/chart.component';
import { HeaderComponent } from '../dashboard/header/header.component';
import { ProductListComponent } from '../dashboard/product-list/product-list.component';
import { StatisticsComponent } from '../dashboard/statistics/statistics.component';
import { UpgradePlanComponent } from '../dashboard/upgrade-plan/upgrade-plan.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ChartComponent,
    HeaderComponent,
    ProductListComponent,
    StatisticsComponent,
    UpgradePlanComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // Phải là styleUrls (số nhiều)
})
export class DashboardComponent {}
