import { Component } from '@angular/core';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { MatProgressBarModule }  from '@angular/material/progress-bar';

@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [CalendarModule, MatProgressBarModule],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})
export class MeetingComponent {

}
