import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  rows: number = 5; // Default rows
  cols: number = 5; // Default columns

  constructor() { }

  ngOnInit(): void {
    // Define your grid data here, for example, a 3x3 grid with numbers

  }

  // Generate an array based on the number of rows or columns
  generateRange(size: number): number[] {
    return Array(size).fill(0).map((x, i) => i);
  }
}
