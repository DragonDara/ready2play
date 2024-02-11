import { Component } from '@angular/core';
import { TariffsService } from './shared/services/tariffs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'reverse-place-admin-panel-web';

  constructor(
    private tariffsService: TariffsService
  ){

  }

  ngOnInit(): void {
    this.tariffsService.getTariffsByGamingCenterId(1).subscribe({
      next: _ => _,
      error: err => console.error(err)
    })

  }
}
