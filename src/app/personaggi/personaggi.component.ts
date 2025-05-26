import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyButtonComponent } from '../shared/mario-button/mario-button.component';

@Component({
  selector: 'app-personaggi',
  standalone: true,
  imports: [RouterLink, MyButtonComponent],
  templateUrl: './personaggi.component.html',
  styleUrls: ['./personaggi.component.css']
})
export class PersonaggiComponent {
  items = [
    {
      name: 'Mario',
      image: 'mario-pfp.jpg',
      description: 'Il famoso idraulico italiano che salva la Principessa Peach.',
      route: 'mario',
      role: 'Protagonista'
    },
    {
      name: 'Luigi',
      image: 'luigi-pfp.jpg',
      description: 'Il fratello più alto e timido di Mario.',
      route: 'luigi',
      role: 'Co-protagonista'
    },
    {
      name: 'Peach',
      image: 'peach-pfp.jpeg',
      description: 'La principessa del Regno dei Funghi, spesso rapita da Bowser.',
      route: 'peach',
      role: 'Principessa'
    },
    {
      name: 'Bowser',
      image: 'bowser-pfp.jpg',
      description: 'Il re dei Koopa e principale antagonista della serie.',
      route: 'bowser',
      role: 'Antagonista'
    },
     {
      name: 'Toad',
      image: 'toad.jpg',
      description: 'Fedele assistente della principessa, iconico nella serie.',
      route: 'toad',
      role: 'Assistente'
    },
     {
      name: 'Yoshi',
      image: 'yoshi.png',
      description: 'Fedele destriero di Mario, un dinosauro carino.',
      route: 'yoshi',
      role: 'Destriero'
    }
  ];
}