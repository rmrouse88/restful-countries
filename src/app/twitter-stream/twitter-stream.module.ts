import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { TwitterStreamComponent } from './twitter-stream.component';

@NgModule({
    declarations: [TwitterStreamComponent],
    imports:[HttpClientModule],
    providers:[],
    exports:[]
})

export class TwitterStream{}