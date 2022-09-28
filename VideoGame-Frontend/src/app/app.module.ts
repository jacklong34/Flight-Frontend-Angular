import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { AppRoutinModule } from './app-routin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightService } from './shared/flight.service';
import { LearningCenterComponent } from './learning-center/learning-center.component';
import { LearningBuyFormComponent } from './learning-buy-form/learning-buy-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    BookFlightComponent,
    LearningCenterComponent,
    LearningBuyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutinModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
