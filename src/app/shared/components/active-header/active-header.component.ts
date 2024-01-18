import { Component, OnChanges, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-active-header',
  templateUrl: './active-header.component.html',
  styleUrl: './active-header.component.scss',
  standalone: true,
})
export class ActiveHeaderComponent implements OnChanges {
  header?: string;
  constructor(private headerService: HeaderService) {}

  ngOnChanges() {
    this.headerService.header.subscribe({
      next: (value) => {
        this.header = value;
        console.log(value);
      },
    });
    console.log(this.header);
  }

  // createTemplate() {
  //
  // }
}
