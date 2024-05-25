import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-warning-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './warning-button.component.html',
  styleUrl: './warning-button.component.css'
})
export class WarningButtonComponent {
  isLoading:boolean = true;
  @Input() label:string = 'Click'
  @Output() onClick = new EventEmitter<Event>();

  buttonClick() {
    this.isLoading = !this.isLoading;
  }
}
