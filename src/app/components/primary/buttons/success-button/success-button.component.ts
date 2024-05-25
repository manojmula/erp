import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-success-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './success-button.component.html',
  styleUrl: './success-button.component.css'
})
export class SuccessButtonComponent {
  isLoading:boolean = true;
  @Input() label:string = 'Click'
  @Output() onClick = new EventEmitter<Event>();

  buttonClick() {
    this.isLoading = !this.isLoading;
  }
}
