import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-sign-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './secondary-sign-button.component.html',
  styleUrl: './secondary-sign-button.component.css'
})
export class SecondarySignButtonComponent {
  isLoading:boolean = true;
  @Input() label:string = 'Click'
  @Output() onClick = new EventEmitter<Event>();

  buttonClick() {
    this.isLoading = !this.isLoading;
  }

}
