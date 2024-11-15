import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { MeetingComponent } from './meeting/meeting.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [HeaderComponent, TaskComponent, MeetingComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
