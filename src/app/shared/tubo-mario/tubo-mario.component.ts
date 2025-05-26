import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tubo-mario',
  templateUrl: './tubo-mario.component.html',
  styleUrls: ['./tubo-mario.component.css']
})
export class TuboMarioComponent {
  @Input() link: string = 'music';
  isClicked: boolean = false;

  playSound() {
    this.isClicked = true;
    const audio = new Audio('pipe.mp3');
    audio.play();
    setTimeout(() => this.isClicked = false, 100);
  }
}