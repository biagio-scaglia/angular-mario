import { Component } from '@angular/core';
import { MyButtonComponent } from '../mario-button/mario-button.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [MyButtonComponent, RouterOutlet, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  characters = [
    {
      name: 'Mario ‎ ',
      role: 'Protagonista',
      description: 'Idraulico italiano che salva la Principessa Peach dal malvagio Bowser.',
      image: 'mario-pfp.jpg',
      link: "mario",
    },
    {
      name: 'Luigi ‎ ',
      role: 'Fratello di Mario',
      description: 'Fratello più alto e timido di Mario, spesso coinvolto in avventure spaventose.',
      image: 'luigi-pfp.jpg',
      route: 'luigi'
    },
    {
      name: 'Peach ‎ ',
      role: 'Principessa',
      description: 'Principessa del Regno dei Funghi, spesso rapita da Bowser ma capace di difendersi.',
      image: 'peach-pfp.jpeg',
      route: 'peach'
    },
    {
      name: 'Bowser ‎ ',
      role: 'Antagonista',
      description: 'Re dei Koopa che cerca costantemente di conquistare il Regno dei Funghi.',
      image: 'bowser-pfp.jpg',
      route: 'bowser'
    }
  ];
}