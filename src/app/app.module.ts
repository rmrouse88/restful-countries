import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { CountryService } from './country/country.service';
import { CountryComponent } from './country/country.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { IrisDisplayComponent } from './iris-display/iris-display.component';
import { CoreModule } from './core/core.module';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { TwitterStreamComponent } from './twitter-stream/twitter-stream.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    WelcomeComponent,
    GraphicsComponent,
    IrisDisplayComponent,
    VisualizerComponent,
    TwitterStreamComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "welcome", component: WelcomeComponent},
      {path: "countries" , component: CountryComponent },
      {path: "iris", component: IrisDisplayComponent},
      {path: "visualizer", component: VisualizerComponent},
      {path: "**", redirectTo: "welcome", pathMatch: 'full'}
    ])
  ],
  // providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
