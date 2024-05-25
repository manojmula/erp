import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-danger-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './danger-button.component.html',
  styleUrl: './danger-button.component.css'
})
export class DangerButtonComponent {
  isLoading:boolean = true;
  @Input() label:string = 'Click'
  @Output() onClick = new EventEmitter<Event>();

  buttonClick() {
    this.isLoading = !this.isLoading;
  }
}
