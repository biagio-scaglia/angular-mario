import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyButtonComponent } from '../shared/mario-button/mario-button.component';

@Component({
  selector: 'app-notfound',
  imports: [RouterLink, MyButtonComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {

}
