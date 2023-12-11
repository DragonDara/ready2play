import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceIconComponent } from '../../common-components/icons/device-icon/device-icon.component';
import { Device } from '../../models/device.enum';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  public deviceType: typeof Device = Device;
  rows: number = 10; // Default rows
  cols: number = 10; // Default columns

  constructor() { }

  ngOnInit(): void {
    // Define your grid data here, for example, a 3x3 grid with numbers

  }

  // Generate an array based on the number of rows or columns
  generateRange(size: number): number[] {
    return Array(size).fill(0).map((x, i) => i);
  }
}
