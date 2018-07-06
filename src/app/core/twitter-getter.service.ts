import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { tap } from 'rxjs/operators';

import * as Twitter from 'twitter';


@Injectable()
export class TwitterGetter{
    
    constructor() {
        private http:HttpClient
    }

    getTweets(): Observable<any> {
        return this.http.get<any>("/tweetstream")
    }

    const twitter = new Twitter({
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token_key: process.env.ACCESS_TOKEN_KEY,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    })

    



}