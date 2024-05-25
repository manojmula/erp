import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-f-layout',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './f-layout.component.html',
  styleUrl: './f-layout.component.css'
})
export class FLayoutComponent {

  // @Input() contentRefs!: TemplateRef<any>[];

}
