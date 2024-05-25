import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-sign-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './primary-sign-button.component.html',
  styleUrl: './primary-sign-button.component.css'
})
export class PrimarySignButtonComponent {
  isLoading:boolean = true;
  @Input() label:string = 'Click'
  @Output() onClick = new EventEmitter<Event>();

  buttonClick() {
    this.isLoading = !this.isLoading;
  }
}
