import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-device-icon',
  templateUrl: './device-icon.component.html',
  styleUrls: ['./device-icon.component.css']
})
export class DeviceIconComponent implements OnInit {

  @Input() deviceNumber: number = 0

  constructor() { }

  ngOnInit() {
  }

}
