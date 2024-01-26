import { Component, Input } from '@angular/core';
import { IBookingNotification } from '../../../models/entities/interfaces/IBookingNotification';
import { IDevice } from '../../../models/entities/interfaces/IDevice';

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
