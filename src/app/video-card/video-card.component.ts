import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'; 

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
  standalone: true,
  imports: [MatCardModule]
})
export class VideoCardComponent {

}
