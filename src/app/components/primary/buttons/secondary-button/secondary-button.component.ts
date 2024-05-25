import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.css'
})
export class SecondaryButtonComponent {

  isLoading:boolean = true;
  @Input() label:string = 'Click'
  @Output() onClick = new EventEmitter<Event>();

  buttonClick() {
    this.isLoading = !this.isLoading;
  }

}
