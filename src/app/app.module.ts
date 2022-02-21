import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstToDoComponent } from './first-to-do/first-to-do.component';
import { SecondToDoComponent } from './second-to-do/second-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstToDoComponent,
    SecondToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
