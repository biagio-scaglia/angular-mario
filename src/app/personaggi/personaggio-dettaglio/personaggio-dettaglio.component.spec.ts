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
      image: 'assets/images/mario.png',
      description: 'Il famoso idraulico italiano che salva la Principessa Peach.',
      route: 'mario',
      role: 'Protagonista',
      fullDescription: 'Mario è il personaggio principale della serie di videogiochi Super Mario. È un idraulico italiano che vive nel Regno dei Funghi e che spesso deve salvare la Principessa Peach dalle grinfie di Bowser.'
    },
    {
      name: 'Luigi',
      image: 'assets/images/luigi.png',
      description: 'Il fratello più alto e timido di Mario.',
      route: 'luigi',
      role: 'Co-protagonista',
      fullDescription: 'Luigi è il fratello più giovane e più alto di Mario. Nonostante sia spesso nella sua ombra, Luigi ha dimostrato più volte il suo valore in avventure come Luigi\'s Mansion.'
    },
    {
      name: 'Peach',
      image: 'assets/images/peach.png',
      description: 'La principessa del Regno dei Funghi, spesso rapita da Bowser.',
      route: 'peach',
      role: 'Principessa',
      fullDescription: 'La Principessa Peach è la sovrana del Regno dei Funghi. Nonostante sia spesso rapita, ha dimostrato di essere capace di difendersi da sola in giochi come Super Princess Peach.'
    },
    {
      name: 'Bowser',
      image: 'assets/images/bowser.png',
      description: 'Il re dei Koopa e principale antagonista della serie.',
      route: 'bowser',
      role: 'Antagonista',
      fullDescription: 'Bowser, conosciuto anche come Re Koopa, è il principale antagonista della serie Mario. È il capo dei Koopa e il padre di Bowser Jr. Il suo obiettivo è conquistare il Regno dei Funghi.'
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