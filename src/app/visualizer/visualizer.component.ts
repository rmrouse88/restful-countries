import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

import { DataGetter } from "../core/data-getter.service";
import { flower } from "../models/flower.interface";
import * as d3 from 'd3';


@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit {

  constructor(private getter: DataGetter,
              private el: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() { 
    this.getter.get_Iris().subscribe(
      ((data: flower[]) => this.generateChart(data))
    )
  }

  generateChart(data: flower[]) {
    let svg = d3.select(this.el.nativeElement).append('svg')
      .style('width', 700)
      .style('height', 400)
      .style('background-color', 'white')

    function getRange (label:string): Array<number> {
      let xRangeArray = [];
      xRangeArray.push(d3.min(data, d => { return d[`${label}`]}));
      xRangeArray.push(d3.max(data, d => { return d[`${label}`]}));
      return xRangeArray;
    }

    let speciesSet = new Set<string>();
    
    data.map(flower => speciesSet.add(flower.species));

    const p12 = d3.scaleOrdinal(d3.schemePastel2).domain(['setosa', 'virginica', 'versicolor']);

    console.log(speciesSet)

    let scaleX = d3.scaleLinear().domain(getRange("sepalWidth")).range([50,650])
    let scaleY = d3.scaleLinear().domain(getRange("sepalLength")).range([50,350])

    let groups = svg.selectAll('g')
                      .data(data)
                      .enter()
                      .append('g')
                      .attr('transform', function (data) {
                        return "translate(" + scaleX(data.sepalWidth) + "," + scaleY(data.sepalLength) + ")";
                      })                      

    groups.append('circle').attr('r', '5px').attr('fill', data => p12(data.species))
            
  }
}
