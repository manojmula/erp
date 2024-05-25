import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-warning-sign-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './warning-sign-button.component.html',
  styleUrl: './warning-sign-button.component.css'
})
export class WarningSignButtonComponent {
  isLoading:boolean = true;
  @Input() label:string = 'Click'
  @Output() onClick = new EventEmitter<Event>();

  buttonClick() {
    this.isLoading = !this.isLoading;
  }
}
