import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonaggiComponent } from './personaggi/personaggi.component';
import { PersonaggioDettaglioComponent } from './personaggi/personaggio-dettaglio/personaggio-dettaglio.component';
import { GiochiComponent } from './giochi/giochi.component';
import { GiocoDettaglioComponent } from './giochi/giocodettaglio/giocodettaglio.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PowerupsComponent } from './powerups/powerups.component';
import { PowerupdettaglioComponent } from './powerups/powerupdettaglio/powerupdettaglio.component';
import { FormDataComponent } from './form-data/form-data.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MusicComponent } from './music/music.component';
import { DemoComponent } from './demo/demo.component';
import { GamesListComponent } from './games-list/games-list.component';

export const routes: Routes = [
    {path: '', redirectTo:"home", pathMatch:'full'},
    {path:'home', component:HomeComponent},
    { path: 'personaggi', component: PersonaggiComponent },
    { path: 'personaggi/:nome', component: PersonaggioDettaglioComponent },
    { path: 'giochi', component: GiochiComponent },
    { path: 'giochi/:id', component: GiocoDettaglioComponent },
    { path: 'powerups', component: PowerupsComponent },
    { path: 'powerups/:id', component: PowerupdettaglioComponent },
    { path: 'contatti', component: FormDataComponent},
    { path: 'dashboard', component: UserDashboardComponent},
    { path: 'music', component: MusicComponent},
    { path: 'demo', component: DemoComponent},
    { path: 'lista', component: GamesListComponent},
    { path: '**', component: NotfoundComponent }, 


];
