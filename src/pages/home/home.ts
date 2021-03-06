import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tracks: any[];
  playing: boolean = true;
  currentTrack: any;
  progressInterval: any;

  constructor(public navCtrl: NavController) {
    this.tracks = [
            {title: 'Something About You', artist: 'ODESZA', playing: false, progress: 0},
            {title: 'Run', artist: 'Allison Wonderland', playing: false, progress: 0},
            {title: 'Breathe', artist: 'Seeb Neev', playing: false, progress: 0},
            {title: 'HyperParadise', artist: 'Hermitude', playing: false, progress: 0},
            {title: 'Lifespan', artist: 'Vaults', playing: false, progress: 0},
            {title: 'Stay High', artist: 'Tove Lo', playing: false, progress: 0},
            {title: 'Lean On', artist: 'Major Lazer', playing: false, progress: 0},
            {title: 'They Say', artist: 'Kilter', playing: false, progress: 0}
        ];
    this.currentTrack = this.tracks[0];
  }

  playTrack(track){
    // first stop any currently playing track
    for(let track of this.tracks){
      if(track.playing){
        this.pauseTrack(track);
      }
    }

    track.playing = true;
    this.currentTrack = track;

    // simulate track playing
    this.progressInterval = setInterval(()=>{
      track.progress < 100 ? track.progress++ : track.progress = 0;
    },1000);
  }

  pauseTrack(track){
    track.playing = false;
    clearInterval(this.progressInterval);
  }

  nextTrack(){
    let index = this.tracks.indexOf(this.currentTrack);
    index >=this.tracks.length -1 ? index=0: index++;
    
    this.playTrack(this.tracks[index]);
  }

  preTrack(){
    let index = this.tracks.indexOf(this.currentTrack);
    index > 0 ? index-- : index = this.tracks.length -1;

    this.playTrack(this.tracks[index]);
  }

}
