import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';

import { ICountry } from './interfaces/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent{

  countryList:ICountry[];

  constructor(private countryService:CountryService) { }

  _country: string;
  get country() {
    return this._country;
  }

  set country(country: string) {
    console.log(`original country: ${this.country}`)
    this._country = country;
    console.log(`changed country query param to: ${country}`)
  }

  get_Country() {
    this.countryService.getCountries(this._country)
      .subscribe((data: ICountry[]) => {
        console.log('subscription to service successful')
        this.countryList = data;
      }, 
      (err:any) => {
        console.log(err);
      })
    }
  }