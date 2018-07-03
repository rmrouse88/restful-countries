import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CountryService } from './country/country.service';
import { CountryComponent } from './country/country.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
