import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoodboardComponent } from './moodboard/moodboard.component';

const routes: Routes = [
  { path: 'moodboard', component: MoodboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
