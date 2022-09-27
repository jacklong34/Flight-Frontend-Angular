import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'book', component: HomeComponent},
  {path: '', redirectTo: '/book', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutinModule { }
