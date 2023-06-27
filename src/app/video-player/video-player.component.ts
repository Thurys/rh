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
  streamingService: StreamingService = inject(StreamingService);
  videoStream: VideoStream | undefined;
  player = dashjs.MediaPlayer().create();

  constructor() {
  }

  ngAfterContentInit(): void {
    console.log('initialized');
    this.updateStream();
  }

  updateStream(): void {
    this.streamingService.getCurrentFile().then((videoStream) => {
      this.videoStream = videoStream;
      this.setPlayer();
    });
  }

  setPlayer(): void {
    console.log(`Received data: ${this.videoStream}`);
    let url = new URL(this.videoStream?.current_file ?? '', window.location.origin);
    console.log(`URL: ${url}`);
    this.player.initialize(document.querySelector("#videoPlayer"), url.toString(), true);
    this.player.seek(100);
    console.log(`Seek to position ${this.videoStream?.current_time_in_s ?? 0}`);
    this.player.setAutoPlay(true);
    this.player.on('playbackEnded', () => {
      this.player.seek(0);
      let url = new URL(this.videoStream?.next_file ?? '', window.location.origin)
      this.player.attachSource(url.toString());
      this.updateStream();
    })
  }
}
