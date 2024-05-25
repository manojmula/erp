import { Component } from '@angular/core';
import { TextInputComponent } from "../../primary/inputs/text-input/text-input.component";
import { PrimaryButtonComponent } from "../../primary/buttons/primary-button/primary-button.component";

@Component({
    selector: 'app-login-card',
    standalone: true,
    templateUrl: './login-card.component.html',
    styleUrl: './login-card.component.css',
    imports: [TextInputComponent, PrimaryButtonComponent]
})
export class LoginCardComponent {

}
