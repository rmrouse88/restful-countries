import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CountryService } from './country/country.service';
import { CountryComponent } from './country/country.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "welcome", component: WelcomeComponent},
      {path: "countries" , component: CountryComponent },
      {path: "**", redirectTo: "welcome", pathMatch: 'full'}
    ])
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
