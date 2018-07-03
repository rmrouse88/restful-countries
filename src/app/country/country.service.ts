import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

import { ICountry } from "./interfaces/country.interface";

@Injectable()
export class CountryService implements OnInit{

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("Injecting the CountryService")
  }

  getCountries(country:string): Observable<ICountry[]> {
    country = country.toLocaleLowerCase();
    
    return this.http.get<ICountry[]>(`https://restcountries.eu/rest/v2/name/${country}`);
  }
}
