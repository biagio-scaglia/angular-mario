import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mario-button',
  standalone: true,
  imports: [],
  templateUrl: './mario-button.component.html',
  styleUrls: ['./mario-button.component.css']
})
export class MyButtonComponent {
  @Input() cta: string = ''; 
  @Input() url: string = '';
}