import { Component, Input } from '@angular/core';
import { IBookingNotification } from '../../../models/entities/interfaces/IBookingNotification';

@Component({
  selector: 'app-cell-card',
  templateUrl: './cell-card.component.html',
  styleUrl: './cell-card.component.scss',
  standalone: true,
})
export class CellCardComponent {
  @Input() title?: string;
  @Input() value?: IBookingNotification[keyof IBookingNotification];
}
