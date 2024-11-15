import { Component } from '@angular/core';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideNavComponent, HeaderNavComponent, BodyComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
