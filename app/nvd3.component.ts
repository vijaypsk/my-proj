import {Component, Input, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {nvD3} from 'ng2-nvd3';
//import {nvD3} from '//cdn.rawgit.com/krispo/ng2-nvd3/v1.1.0/lib/ng2-nvd3.ts';
import { Observable }       from 'rxjs/Observable';


//import {nvD3} from 'ng2-nvd3';
declare let d3: any;
 
@Component({
  selector: 'main',
  directives: [nvD3],
  providers: [DataService],
  template: `
    <div>
      <nvd3 [options]="options" [data]="data"></nvd3>

      
    </div>
  `
})
 
export class Main implements OnInit{
  @Input() options:any;
    data:any;
  mode = 'Observable';

  constructor(private dataService: DataService){}
  ngOnInit() {
      this.dataService.getData().subscribe(d => this.data = [d]);
              
 
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d:any){return d.label;},
        y: function(d:any){return d.value;},
        showValues: true,
        valueFormat: function(d:any){
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    }
    
    console.log('output.....'+this.data);
    
  }
  }
 
