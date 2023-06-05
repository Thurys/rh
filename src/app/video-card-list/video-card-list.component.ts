import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { VideoCardComponent } from '../video-card/video-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-card-list',
  templateUrl: './video-card-list.component.html',
  styleUrls: ['./video-card-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    VideoCardComponent
  ]
})
export class VideoCardListComponent {
}
