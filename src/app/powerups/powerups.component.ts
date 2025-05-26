import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyButtonComponent } from '../shared/mario-button/mario-button.component';

@Component({
  selector: 'app-powerups',
  standalone: true,
  imports: [RouterLink, MyButtonComponent],
  templateUrl: './powerups.component.html',
  styleUrls: ['./powerups.component.css']
})
export class PowerupsComponent {
  powerups = [
    {
      id: 'fungo',
      name: 'Fungo ',
      image: 'fungo.png ',
      shortDescription: 'Rende Mario più grande e gli permette di rompere blocchi di mattoni.',
      type: 'Crescita'
    },
    {
      id: 'fiore',
      name: 'Fiore di Fuoco',
      image: 'fiore.png',
      shortDescription: 'Permette a Mario di lanciare palle di fuoco per sconfiggere i nemici.',
      type: 'Attacco'
    },
    {
      id: 'stella',
      name: 'Stella',
      image: 'stella.png',
      shortDescription: 'Rende Mario invincibile per un breve periodo di tempo.',
      type: 'Invincibilità'
    },
    {
      id: 'piuma',
      name: 'Piuma',
      image: 'piuma.webp',
      shortDescription: 'Concede a Mario un mantello che gli permette di planare e attaccare in picchiata.',
      type: 'Volo'
    },
    {
      id: 'foglia',
      name: 'Foglia',
      image: 'foglia.webp',
      shortDescription: 'Trasforma Mario in Raccoon Mario, permettendogli di volare brevemente.',
      type: 'Trasformazione'
    }
  ];
}