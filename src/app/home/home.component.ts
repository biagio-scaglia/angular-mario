import { Component } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { GameComponent } from "../shared/game/game.component";
import { TuboMarioComponent } from "../shared/tubo-mario/tubo-mario.component";

@Component({
  selector: 'app-home',
  imports: [CardComponent, GameComponent, TuboMarioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
marioCharacters = [
  {
    name: 'Mario',
    image: 'assets/images/mario.png',
    description: 'The main hero of the Mushroom Kingdom!'
  },
  {
    name: 'Luigi',
    image: 'assets/images/luigi.png',
    description: 'Mario\'s taller, younger brother.'
  },
  {
    name: 'Peach',
    image: 'assets/images/peach.png',
    description: 'The princess of the Mushroom Kingdom.'
  }
];
}
