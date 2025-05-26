import { Component } from '@angular/core';
import { MyButtonComponent } from '../mario-button/mario-button.component'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [MyButtonComponent, RouterLink],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  games = [
    {
      title: "Mario Odyssey",
      coverImage: "mario-odyssey.jpg",
      year: 2017,
      description: "Explore incredible places far from the Mushroom Kingdom."
    },
    {
      title: "Mario Kart 8",
      coverImage: "mk-wiiu.jpeg",
      year: 2014,
      description: "Race with friends in the ultimate Mario Kart experience."
    },
    {
      title: "Mario Galaxy",
      coverImage: "mario-galaxy.jpeg",
      year: 2007,
      description: "Launch into space for cosmic platforming adventures."
    }
  ];
}