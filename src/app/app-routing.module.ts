import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoCardListComponent } from './video-card-list/video-card-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

const routes: Routes = [
  { path: '', component: VideoPlayerComponent },
  { path: 'list', component: VideoCardListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
