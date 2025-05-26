import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gioco-dettaglio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './giocodettaglio.component.html',
  styleUrls: ['./giocodettaglio.component.css']
})
export class GiocoDettaglioComponent {
  private route = inject(ActivatedRoute);
  
  games = [
    {
      id: 'super-mario-bros',
      title: 'Super Mario Bros.',
      year: 1985,
      image: 'smb1.jpg',
      coverImage: 'super1.jpg',
      console: 'NES',
      developer: 'Nintendo R&D4',
      director: 'Shigeru Miyamoto',
      producer: 'Shigeru Miyamoto',
      description: 'Super Mario Bros. è un platform game a scorrimento laterale sviluppato e pubblicato da Nintendo nel 1985 per Nintendo Entertainment System. Il gioco ha stabilito molti standard per il genere platform.',
      longDescription: 'Super Mario Bros. ha rivoluzionato l\'industria dei videogiochi dopo la crisi del 1983. Presenta Mario che deve salvare la Principessa Peach dal malvagio Bowser attraversando il Regno dei Funghi. Il gioco introduce elementi come il salto sui nemici per sconfiggerli, i power-up come il Fungo e il Fiore di Fuoco, e mondi tematici con diversi tipi di terreno e ostacoli.'
    },
    {
      id: 'super-mario-world',
      title: 'Super Mario World',
      year: 1990,
      image: 'smbw1.jpg',
      coverImage: 'smbw.jpg',
      console: 'SNES',
      developer: 'Nintendo EAD',
      director: 'Takashi Tezuka',
      producer: 'Shigeru Miyamoto',
      description: 'Il primo titolo di Mario per Super Nintendo, che introduce Yoshi come cavalcatura.',
      longDescription: 'Super Mario World espande il gameplay di Super Mario Bros. 3 con nuove abilità come la Cape Feather che permette a Mario di planare, e l\'introduzione di Yoshi, il dinosauro amico di Mario che può mangiare nemici e ottenere abilità speciali mangiando gusci di Koopa colorati. Il gioco presenta una mappa non lineare con percorsi segreti e livelli bonus.'
    },
    {
  id: 'super-mario-64',
  title: 'Super Mario 64',
  year: 1996,
  image: 's65.jpg',
  coverImage: 's64.jpg',
  console: 'Nintendo 64',
  developer: 'Nintendo EAD',
  director: 'Shigeru Miyamoto',
  producer: 'Shigeru Miyamoto',
  description: 'Il primo platform 3D di Mario, che ha rivoluzionato il genere con libertà di esplorazione e controllo della telecamera.',
  longDescription: 'Super Mario 64 ha aperto la strada ai giochi 3D, permettendo a Mario di muoversi in ambienti vasti e aperti, raccogliere Stelle per progredire e affrontare sfide varie. Ha introdotto un sistema di controllo innovativo e una telecamera dinamica, creando un’esperienza di platform senza precedenti per il Nintendo 64.'
},
{
  id: 'super-mario-galaxy',
  title: 'Super Mario Galaxy',
  year: 2007,
  image: 'mario-galaxy.jpeg',
  coverImage: 'smg.jpg',
  console: 'Wii',
  developer: 'Nintendo EAD Tokyo',
  director: 'Yoshiaki Koizumi',
  producer: 'Shigeru Miyamoto',
  description: 'Un platform 3D che porta Mario nello spazio con pianeti sferici e meccaniche gravitazionali innovative.',
  longDescription: 'Super Mario Galaxy sfrutta la potenza del Wii per creare livelli ispirati a piccoli pianeti con gravità variabile, dove Mario deve saltare, correre e ruotare attorno a orbite insolite per raccogliere Stelle e salvare la Principessa Peach dalle grinfie di Bowser.'
},
{
  id: 'super-mario-odyssey',
  title: 'Super Mario Odyssey',
  year: 2017,
  image: 'mario-odyssey.jpg',
  coverImage: 'smo.jpg',
  console: 'Nintendo Switch',
  developer: 'Nintendo EPD',
  director: 'Kenta Motokura',
  producer: 'Yoshiaki Koizumi',
  description: 'Mario torna in un platform 3D open-world con il cappello magico Cappy, che offre nuove abilità uniche.',
  longDescription: 'Super Mario Odyssey è una celebrazione della libertà di esplorazione in ambienti vasti e diversificati. Cappy permette a Mario di prendere il controllo di nemici e oggetti, espandendo enormemente le possibilità di gameplay. Il gioco offre un mix di sfide classiche e nuove, con una narrativa leggera e divertente.'
},
{
  id: 'super-mario-wonder',
  title: 'Super Mario Bros. Wonder',
  year: 2023,
  image: 'smw.jpg',
  coverImage: 'wonder.jpg',
  console: 'Nintendo Switch',
  developer: 'Nintendo EPD',
  director: 'Yoshiaki Koizumi',
  producer: 'Takashi Tezuka',
  description: 'Il ritorno del platform 2D con nuovi power-up e meccaniche fresche, fedele allo stile classico ma innovativo.',
  longDescription: 'Super Mario Bros. Wonder rinnova la formula del platform a scorrimento laterale con livelli ricchi di dettagli, nuovi power-up che trasformano Mario in modi sorprendenti e modalità multiplayer cooperative. Il gioco mantiene il feeling classico di Mario ma lo spinge in avanti con design di livello creativo e meccaniche dinamiche.'
}
  ];

  game: any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const gameId = params['id'];
      this.game = this.games.find(g => g.id === gameId);
    });
  }
}