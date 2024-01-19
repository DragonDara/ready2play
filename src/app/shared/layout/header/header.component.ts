import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingNotificationComponent } from '../../components/booking-notification/booking-notification.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { routeHeaderTextDictionary } from '../../constants/route-header-text-dictionary';
import { HeaderService } from '../../services/header.service';
import { filter, map, startWith } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hidden = false;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private headerService: HeaderService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((value) => value instanceof NavigationEnd),
        map((value) => (value as NavigationEnd).url),
        startWith(this.router.url),
        map((value: string) => routeHeaderTextDictionary.get(value)),
        filter((value) => Boolean(value)),
      )
      .subscribe((headerText) => {
        this.headerService.header.next(headerText as string);
      });
  }

  openDialog() {
    this.hidden = !this.hidden;

    this.dialog.open(BookingNotificationComponent, {
      minWidth: '400px',
      maxWidth: '400px',
      position: { top: '90px', right: '5px' },
    });
  }
}
