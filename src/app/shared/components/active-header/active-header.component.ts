import { Component, OnChanges, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-header',
  templateUrl: './active-header.component.html',
  styleUrl: './active-header.component.scss',
  standalone: true,
})
export class ActiveHeaderComponent implements OnInit {
  header?: string;
  countUser?: string;
  constructor(
    private headerService: HeaderService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.headerService.header.subscribe({
      next: (value) => {
        this.header = value;
        this.countUser = '';
        if (this.header === 'Карта зала') {
          this.countUser = 'Заполненно (временно)';
        }
      },
    });
  }
}
