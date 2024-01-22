import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrl: './user-booking.component.scss',
  standalone: true,
})
export class UserBookingComponent {
  @Input() userName?: string;
}
