import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGetter } from './data-getter.service';

import { CountryService } from '../country/country.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [DataGetter, CountryService]
})
export class CoreModule { }
