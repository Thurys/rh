import { AfterContentInit, Component, inject } from '@angular/core';
import { StreamingService } from '../streaming.service';
import { VideoStream } from '../video-stream';

declare var dashjs: any;

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements AfterContentInit {
  videoStream: VideoStream | undefined;
  streamingService: StreamingService = inject(StreamingService);

  constructor() {
    this.updateStream();
  }

  ngAfterContentInit(): void {
    console.log(`Received data: ${this.videoStream}`);
    let url: string = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";
    let player = dashjs.MediaPlayer().create();
    player.initialize(document.querySelector("#videoPlayer"), url, true);
    player.setAutoPlay(true);
    player.on('playbackEnded', () => {
      player.seek(0)
      player.attachSource("http://0.0.0.0:8000/Dash2/dash.mpd")
    })
  }

  updateStream(): void {
    this.streamingService.getCurrentFile().then((videoStream) => {
      this.videoStream = videoStream;
    });
  }
}
