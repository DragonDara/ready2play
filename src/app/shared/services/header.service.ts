import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { listActiveHeader } from '../enums/list-active-header';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  header = new BehaviorSubject<string>('');
  constructor(private router: Router) {
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        this.header.next(String(listActiveHeader.get(value.url)));
      }
    });
  }
}
