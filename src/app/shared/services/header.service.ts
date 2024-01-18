import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  header = new Subject<string>();
  constructor(private route: ActivatedRoute) {
    this.header.next(String(this.route.url));
    console.log(this.route.snapshot.url);
  }
}
