import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { routeHeaderTextDictionary } from '../../constants/route-header-text-dictionary';
import { HeaderService } from '../../services/header.service';
import { filter, map, startWith } from 'rxjs';
import { NotificationModalComponent } from '../../../features/notification-modal/notification-modal.component';

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

    this.dialog.open(NotificationModalComponent, {
      panelClass: 'modal-notification',
      position: { top: '70px', right: '220px' },
    });
  }
}
