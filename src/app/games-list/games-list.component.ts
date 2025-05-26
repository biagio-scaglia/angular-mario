import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Game {
  id: number;
  name: string;
  year: number;
  console: string;
  description: string;
}

@Component({
  selector: 'app-game-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  games: Game[] = [];
  loading = true;
  error: string | null = null;
  
  newGame: Omit<Game, 'id'> = { 
    name: '', 
    year: 0, 
    console: '', 
    description: '' 
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.loading = true;
    this.http.get<Game[]>('http://localhost/api.php')
      .subscribe({
        next: (data) => {
          this.games = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Errore nel caricamento dei giochi';
          this.loading = false;
        }
      });
  }

  addGame(): void {
    const duplicate = this.games.some(game => 
      game.name === this.newGame.name && 
      game.console === this.newGame.console
    );

    if (duplicate) {
      this.error = 'Un gioco con lo stesso nome e console esiste già';
      return;
    }

    this.http.post<any>('http://localhost/api.php', this.newGame)
      .subscribe({
        next: () => {
          this.loadGames();
          this.resetForm();
          this.error = null;
        },
        error: (err) => {
          this.error = err.error?.message || 'Errore nell\'aggiunta del gioco';
        }
      });
  }

  deleteGame(id: number): void {
    if (confirm('Sei sicuro di voler eliminare questo gioco?')) {
      this.http.delete<any>('http://localhost/api.php', {
        body: { id: id }
      }).subscribe({
        next: () => {
          this.loadGames();
          this.error = null;
        },
        error: (err) => {
          this.error = err.error?.message || 'Errore nell\'eliminazione del gioco';
        }
      });
    }
  }

  resetForm(): void {
    this.newGame = { 
      name: '', 
      year: 0, 
      console: '', 
      description: '' 
    };
    this.error = null;
  }
}