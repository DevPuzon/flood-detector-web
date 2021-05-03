import { Component, OnInit } from '@angular/core'; 
import { AngularFireDatabase } from '@angular/fire/database'; 
import { Observable } from 'rxjs';
declare function _lineChartCon(container:string,title:string,yAxisTitle:string,category:any[],series:any[]):any; 

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.page.html',
  styleUrls: ['./dashboard-admin.page.scss'],
})
export class DashboardAdminPage implements OnInit {

  otherdatas = new Array();
  data ={
    distance:null,
    flRate:null,
    water_level:null,
    isdanger:null,
    water_status:null,
    flmL:null,
    flL:null,
    sms:null 
  };
  constructor(private db: AngularFireDatabase) { }
  chart_water_level:any;
  chart_water_distance:any;
  chart_water_flow:any;
  isRot = true
  ngOnInit() { 
    this.db.object('/').snapshotChanges()
    .subscribe(async res =>{
      this.data =  JSON.parse(JSON.stringify(res.payload.toJSON()));
      
      let distances = new Array();
      let water_levels = new Array();
      let flRate = new Array();
      this.otherdatas = localStorage.getItem('otherdatas') ? JSON.parse(localStorage.getItem('otherdatas')) :[];
      distances = localStorage.getItem('distances') ? JSON.parse(localStorage.getItem('distances')) :[];
      water_levels = localStorage.getItem('water_levels') ? JSON.parse(localStorage.getItem('water_levels')):[];
      flRate = localStorage.getItem('flRate') ? JSON.parse(localStorage.getItem('flRate')) :[];

      let distances$ = distances.slice(Math.max(distances.length - 45, 0))
      distances$ =distances$.map(function(d) { return d[`label`]; })
      let  water_levels$ = water_levels.slice(Math.max(water_levels.length - 45, 0))
      water_levels$ =water_levels$.map(function(d) { return d[`label`]; })
      let   flRate$ = flRate.slice(Math.max(flRate.length - 45, 0))
      flRate$ =flRate$.map(function(d) { return d[`label`]; })
      
      console.log(this.data);
      console.log(this.data.distance);
      console.log(distances);
      const o_d_i = this.otherdatas.findIndex(o=>{ return o.date === new Date().toLocaleDateString()});
      if(o_d_i == -1){
        this.otherdatas.push({
          flmL:this.data.flmL,
          flL:this.data.flL,
          sms:this.data.sms,
          date:new Date().toLocaleDateString()
        });
      }else{
        this.otherdatas[o_d_i] = {
          flmL:this.data.flmL,
          flL:this.data.flL,
          sms:this.data.sms,
          date:new Date().toLocaleDateString()
        };
      }
      localStorage.setItem("otherdatas",JSON.stringify(this.otherdatas));
      if(this.isRot){ 
        this.chart_water_level = _lineChartCon("chart_water_level"," ", " ",[],[{
          name: '',
          data: water_levels$
        }]);
        this.chart_water_distance =  _lineChartCon("chart_water_distance"," ", " ",[],[{
          name: ' ',
          data: distances$
        }]);
        this.chart_water_flow =  _lineChartCon("chart_water_flow_rate"," ", " ",[],[{
          name: ' ',
          data: flRate$
        }]); 
      }else{ 
        console.log(distances[distances.length-1] != this.data.distance);
        if (distances[distances.length-1] != this.data.distance) {
          // if(distances.length  < 45){ distances.push({label:this.data.distance,timestamp:new Date()})}
          // else{distances.shift(); distances.push({label:this.data.distance,timestamp:new Date()})}
          distances.push({label:this.data.distance,timestamp:new Date()});
        }
          
        if(water_levels[water_levels.length-1] != this.data.water_level) { 
          // if(water_levels.length  < 45){ water_levels.push({label:this.data.water_level,timestamp:new Date()})}
          // else{water_levels.shift(); water_levels.push({label:this.data.water_level,timestamp:new Date()})}
          water_levels.push({label:this.data.water_level,timestamp:new Date()});
        }
        
        if(flRate[flRate.length-1] != this.data.flRate) { 
          // if(flRate.length  < 45){ flRate.push({label:this.data.flRate,timestamp:new Date()})}
          // else{flRate.shift(); flRate.push({label:this.data.flRate,timestamp:new Date()})}
          flRate.push({label:this.data.flRate,timestamp:new Date()});
        }
        
        console.log(distances);
  
        //distance water_level flow
        distances$ = distances.slice(Math.max(distances.length - 45, 0))
        distances$ =distances$.map(function(d) { return d[`label`]; })
        water_levels$ = water_levels.slice(Math.max(water_levels.length - 45, 0))
        water_levels$ =water_levels$.map(function(d) { return d[`label`]; })
        flRate$ = flRate.slice(Math.max(flRate.length - 45, 0))
        flRate$ =flRate$.map(function(d) { return d[`label`]; })
        
        this.chart_water_distance.series[0].setData(distances$);
        this.chart_water_level.series[0].setData(water_levels$);
        this.chart_water_flow.series[0].setData(flRate$);
      }

      this.isRot = false;
      localStorage.setItem('distances',JSON.stringify(distances));
      localStorage.setItem('water_levels',JSON.stringify(water_levels));
      localStorage.setItem('flRate',JSON.stringify(flRate)); 
    })
  }

}
