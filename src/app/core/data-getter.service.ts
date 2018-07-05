import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators';

import { flower } from '../models/flower.interface';


@Injectable()
export class DataGetter {

    constructor(private http: HttpClient){}

    get_Iris(): Observable<flower[]> {
        console.log('subscribed to iris')
        return this.http.get<flower[]>('https://raw.githubusercontent.com/domoritz/maps/master/data/iris.json')
    }
}

