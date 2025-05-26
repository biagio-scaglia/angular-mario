import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-music',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  isPlaying = false;
  statusMessage = 'Pronto a suonare!';
  currentFile: File | null = null;

  handleFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.currentFile = input.files[0];
      document.getElementById('fileName')!.textContent = this.currentFile.name;
      
      const audio = this.audioPlayer.nativeElement;
      audio.src = URL.createObjectURL(this.currentFile);
      this.statusMessage = 'File caricato! Premi Play';
    }
  }

  playMusic() {
    if (this.currentFile) {
      this.audioPlayer.nativeElement.play();
      this.isPlaying = true;
      this.statusMessage = 'In riproduzione...';
    }
  }

  pauseMusic() {
    this.audioPlayer.nativeElement.pause();
    this.isPlaying = false;
    this.statusMessage = 'In pausa';
  }

  stopMusic() {
    const audio = this.audioPlayer.nativeElement;
    audio.pause();
    audio.currentTime = 0;
    this.isPlaying = false;
    this.statusMessage = 'Fermato';
  }

  setVolume(event: Event) {
    const slider = event.target as HTMLInputElement;
    this.audioPlayer.nativeElement.volume = parseFloat(slider.value);
  }
}