import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { HomeComponent } from './home/home.component';
import { LearningBuyFormComponent } from './learning-buy-form/learning-buy-form.component';
import { LearningCenterComponent } from './learning-center/learning-center.component';

const routes: Routes = [
  { path: 'book', component: HomeComponent },
  { path: '', redirectTo: '/book', pathMatch: 'full' },
  { path: 'learning-center', component: LearningCenterComponent },
  { path: 'learning/buy/:title', component: LearningBuyFormComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutinModule {}
