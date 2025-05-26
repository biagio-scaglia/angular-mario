import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from '../../shared/mario-button/mario-button.component';

@Component({
  selector: 'app-powerup-dettaglio',
  standalone: true,
  imports: [CommonModule, MyButtonComponent, RouterLink],
  templateUrl: './powerupdettaglio.component.html',
  styleUrls: ['./powerupdettaglio.component.css']
})
export class PowerupdettaglioComponent {
  private route = inject(ActivatedRoute);
  
  powerups = [
    {
      id: 'fungo',
      name: 'Fungo',
      image: 'fungo.png',
      type: 'Crescita',
      firstAppearance: 'Super Mario Bros. (1985)',
      effect: 'Raddoppia le dimensioni di Mario, gli concede un colpo in più prima di tornare piccolo e gli permette di rompere blocchi di mattoni.',
      trivia: 'Il Fungo è uno dei power-up più iconici della serie. Il design è ispirato ai funghi psichedelici.'
    },
    {
      id: 'fiore',
      name: 'Fiore di Fuoco',
      image: 'fiore.png',
      type: 'Attacco',
      firstAppearance: 'Super Mario Bros. (1985)',
      effect: 'Permette a Mario di lanciare palle di fuoco che possono sconfiggere la maggior parte dei nemici e sciogliere blocchi di ghiaccio.',
      trivia: 'Nella versione originale giapponese, il Fiore di Fuoco era chiamato "Fiamma Magica".'
    },
    {
      id: 'stella',
      name: 'Stella',
      image: 'stella.png',
      type: 'Invincibilità',
      firstAppearance: 'Super Mario Bros. (1985)',
      effect: 'Rende Mario invincibile per circa 10 secondi. Durante questo periodo, può sconfiggere qualsiasi nemico semplicemente toccandolo.',
      trivia: 'La musica che accompagna l\'invincibilità è una delle melodie più riconoscibili dei videogiochi.'
    },
    {
      id: 'piuma',
      name: 'Piuma',
      image: 'piuma.webp',
      type: 'Volo',
      firstAppearance: 'Super Mario Bros. 3 (1988)',
      effect: 'Concede a Mario un mantello che gli permette di planare, effettuare un attacco in picchiata e, con abbastanza spazio, volare brevemente.',
      trivia: 'La Piuma è stata sostituita dalla Foglia in Super Mario World, ma è riapparsa in molti giochi successivi.'
    },
    {
      id: 'foglia',
      name: 'Foglia',
      image: 'foglia.webp',
      type: 'Trasformazione',
      firstAppearance: 'Super Mario Bros. 3 (1988)',
      effect: 'Trasforma Mario in Raccoon Mario, permettendogli di planare sbattendo la coda e di attaccare i nemici con essa.',
      trivia: 'La Foglia è stata ispirata dal Tanuki, una creatura del folklore giapponese.'
    }
  ];

  powerup: any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const powerupId = params['id'];
      this.powerup = this.powerups.find(p => p.id === powerupId);
    });
  }
}