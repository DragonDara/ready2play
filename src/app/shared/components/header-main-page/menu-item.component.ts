import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  imports: [MatButtonModule, MatIconModule, MatBadgeModule],
  standalone: true,
})
export class MenuItem implements OnInit {
  @Input() pathIcon?: string;
  @Input() nameIcon?: string;
  @Input() text?: string;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {}
  ngOnInit() {
    if (this.pathIcon && this.nameIcon) {
      this.matIconRegistry.addSvgIcon(
        this.nameIcon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(this.pathIcon),
      );
    }
  }
}
