import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoCardListComponent } from './video-card-list/video-card-list.component';
import { VideoCardComponent } from './video-card/video-card.component';

const routes: Routes = [
  { path: '', component: VideoCardListComponent },
  { path: 'card', component: VideoCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
