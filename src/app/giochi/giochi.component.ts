import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyButtonComponent } from '../shared/mario-button/mario-button.component';

@Component({
  selector: 'app-giochi',
  standalone: true,
  imports: [RouterLink, MyButtonComponent],
  templateUrl: './giochi.component.html',
  styleUrls: ['./giochi.component.css']
})
export class GiochiComponent {
  games = [
    {
      id: 'super-mario-bros',
      title: 'Super Mario Bros.',
      year: 1985,
      image: 'super1.jpg',
      shortDescription: 'Il gioco che ha rivoluzionato il platforming.',
      console: 'NES'
    },
    {
      id: 'super-mario-world',
      title: 'Super Mario World',
      year: 1990,
      image: 'smbw.jpg',
      shortDescription: 'Il debutto di Mario su Super Nintendo con Yoshi.',
      console: 'SNES'
    },
    {
      id: 'super-mario-64',
      title: 'Super Mario 64',
      year: 1996,
      image: 's64.jpg',
      shortDescription: 'Il primo Mario in 3D che ha definito il platforming 3D.',
      console: 'Nintendo 64'
    },
    {
      id: 'super-mario-galaxy',
      title: 'Super Mario Galaxy',
      year: 2007,
      image: 'smg.jpg',
      shortDescription: 'avventura spaziale con fisica gravitazionale.',
      console: 'Wii'
    },
    {
      id: 'super-mario-odyssey',
      title: 'Super Mario Odyssey',
      year: 2017,
      image: 'smo.jpg',
      shortDescription: 'Mario esplora regni diversi con l\'aiuto di Cappy.',
      console: 'Nintendo Switch'
    },
    {
      id: 'super-mario-wonder',
      title: 'Super Mario Bros. Wonder',
      year: 2023,
      image: 'wonder.jpg',
      shortDescription: 'Il ritorno al platforming 2D con effetti Wonder.',
      console: 'Nintendo Switch'
    }
  ];
}