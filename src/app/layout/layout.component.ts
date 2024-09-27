import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule
import {BodyComponent} from '../layout/body/body.component';
import {FooterComponent} from '../layout/footer/footer.component';
import {HeaderComponent} from '../layout/header/header.component';
import {NavigationComponent} from '../layout/navigation/navigation.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule,BodyComponent,FooterComponent,HeaderComponent,NavigationComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
