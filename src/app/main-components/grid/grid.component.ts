import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceIconComponent } from '../../common-components/icons/device-icon/device-icon.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  rows: number = 10; // Default rows
  cols: number = 10; // Default columns

 public get getWhenDeviceCanBeHidden() : boolean {
  return true
 }


  constructor() { }

  ngOnInit(): void {
    // Define your grid data here, for example, a 3x3 grid with numbers

  }

  // Generate an array based on the number of rows or columns
  generateRange(size: number): number[] {
    return Array(size).fill(0).map((x, i) => i);
  }
}
