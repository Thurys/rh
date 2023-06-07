import { AfterContentInit, Component } from '@angular/core';

declare var dashjs: any;

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    let url: string = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";
    let player = dashjs.MediaPlayer().create();
    player.initialize(document.querySelector("#videoPlayer"), url, true);
    player.setAutoPlay(true);
    player.on('playbackEnded', () => {
      player.seek(0)
      player.attachSource("http://0.0.0.0:8000/Dash2/dash.mpd")
    })
  }
}
