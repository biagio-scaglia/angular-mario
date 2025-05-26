import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personaggio-dettaglio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personaggio-dettaglio.component.html',
  styleUrls: ['./personaggio-dettaglio.component.css']
})
export class PersonaggioDettaglioComponent {
  private route = inject(ActivatedRoute);
  
  personaggi = [
    {
      name: 'Mario',
      image: 'mario-pfp.jpg',
      description: 'Il famoso idraulico italiano che salva la Principessa Peach.',
      route: 'mario',
      role: 'Protagonista',
      fullDescription: 'Mario è il personaggio principale della serie di videogiochi Super Mario. È un idraulico italiano che vive nel Regno dei Funghi e che spesso deve salvare la Principessa Peach dalle grinfie di Bowser.'
    },
    {
      name: 'Luigi',
      image: 'luigi-pfp.jpg',
      description: 'Il fratello più alto e timido di Mario.',
      route: 'luigi',
      role: 'Co-protagonista',
      fullDescription: 'Luigi è il fratello più giovane e più alto di Mario. Nonostante sia spesso nella sua ombra, Luigi ha dimostrato più volte il suo valore in avventure come Luigi\'s Mansion.'
    },
    {
      name: 'Peach',
      image: 'peach-pfp.jpeg',
      description: 'La principessa del Regno dei Funghi, spesso rapita da Bowser.',
      route: 'peach',
      role: 'Principessa',
      fullDescription: 'La Principessa Peach è la sovrana del Regno dei Funghi. Nonostante sia spesso rapita, ha dimostrato di essere capace di difendersi da sola in giochi come Super Princess Peach.'
    },
    {
      name: 'Bowser',
      image: 'bowser-pfp.jpg',
      description: 'Il re dei Koopa e principale antagonista della serie.',
      route: 'bowser',
      role: 'Antagonista',
      fullDescription: 'Bowser, conosciuto anche come Re Koopa, è il principale antagonista della serie Mario. È il capo dei Koopa e il padre di Bowser Jr. Il suo obiettivo è conquistare il Regno dei Funghi.'
    
    },
    {
      name: 'toad',
      image: 'toad.jpg',
      description: 'Fedele assistente della principessa, iconico nella serie.',
      route: 'toad',
      role: 'assistente',
      fullDescription: 'Toad è uno dei più fedeli servitori della Principessa Peach e un abitante del Regno dei Funghi. Con il suo iconico cappello a pois, aiuta spesso Mario nelle sue avventure, offrendo supporto e informazioni preziose..'
    },
    {
      name: 'Yoshi',
      image: 'yoshi.png',
      description: 'Fedele destriero di Mario, un dinosauro carino.',
      route: 'yoshi',
      role: 'Destriero',
      fullDescription: 'Yoshi è un dinosauro gentile e coraggioso proveniente dall’Isola Yoshi. Alleato fidato di Mario, è noto per la sua lunga lingua e la capacità di ingoiare nemici. Ha un cuore d’oro e affronta ogni sfida per proteggere i suoi amici.'
    }
  ];

  personaggio: any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const nomePersonaggio = params['nome'];
      this.personaggio = this.personaggi.find(p => p.route === nomePersonaggio);
    });
  }
}