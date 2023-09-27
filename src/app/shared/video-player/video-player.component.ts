import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'metutors-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoSrc: string;

  constructor() {}

  ngOnInit(): void {}
}
