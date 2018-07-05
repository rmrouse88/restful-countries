import { Component, OnInit } from '@angular/core';

import { DataGetter } from '../core/data-getter.service';
import { flower } from '../models/flower.interface';
import * as d3 from 'd3';


@Component({
  selector: 'app-iris-display',
  templateUrl: './iris-display.component.html',
  styleUrls: ['./iris-display.component.css']
})
export class IrisDisplayComponent implements OnInit {

  pageTitle: string = 'Iris Display Component'

  irisArray : flower[];

  constructor(private getter:DataGetter) { }

  ngOnInit() {
    this.getter.get_Iris().subscribe(
      (data: flower[]) => this.display(data),
      (err: any) => console.log(err)
    )
  }
  display(data): void {
    this.irisArray = data;    
    console.log(this.irisArray);
  }
}
