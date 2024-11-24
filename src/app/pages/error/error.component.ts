import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
})
export class ErrorComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
