import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import videojs from 'video.js';
import Player from "video.js/dist/types/player";


@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent implements OnInit, OnDestroy {

  @ViewChild('target', {static: true}) target!: ElementRef;

  @Input() options!: {
    fluid: boolean,
    // aspectRatio: string,
    autoplay: boolean,
    controls: boolean,
    
    sources: {
      src: string,
      type: string
    }[]
  };

  player!: Player;

  constructor(private elementRef: ElementRef){}

  ngOnInit(): void {
      this.player = videojs(this.target.nativeElement, this.options,  ()=>{
        console.log('OnPlayerready');
        this.target.nativeElement.play();
        this.target.nativeElement.getVideoPlaybackQuality();
      })
  }

  ngOnDestroy(): void {
      if(this.player) {
        this.player.dispose();
      }
  }

}
