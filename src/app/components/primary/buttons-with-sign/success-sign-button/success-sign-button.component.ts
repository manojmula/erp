import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-success-sign-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './success-sign-button.component.html',
  styleUrl: './success-sign-button.component.css'
})
export class SuccessSignButtonComponent {
  isLoading:boolean = true;
  @Input() label:string = 'Click'
  @Output() onClick = new EventEmitter<Event>();

  buttonClick() {
    this.isLoading = !this.isLoading;
  }
}
