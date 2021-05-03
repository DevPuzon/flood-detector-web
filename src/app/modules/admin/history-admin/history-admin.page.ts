import { Component, EventEmitter, OnInit, Output } from '@angular/core';
declare var $:any;
declare function _lineChartCon(container:string,title:string,yAxisTitle:string,category:any[],series:any[]):any; 
@Component({
  selector: 'app-history-admin',
  templateUrl: './history-admin.page.html',
  styleUrls: ['./history-admin.page.scss'],
})
export class HistoryAdminPage implements OnInit {
   // r = [{"label":153,"timestamp":1614948416},{"label":44,"timestamp":1615034816},{"label":87,"timestamp":1615034816},{"label":198,"timestamp":1615121216},{"label":130,"timestamp":1614948416},{"label":148,"timestamp":1615034816},{"label":95,"timestamp":1614948416},{"label":150,"timestamp":1614948416},{"label":186,"timestamp":1614948416},{"label":194,"timestamp":1614948416},{"label":68,"timestamp":1615034816},{"label":32,"timestamp":1615034816},{"label":184,"timestamp":1615121216},{"label":88,"timestamp":1615034816},{"label":33,"timestamp":1614948416},{"label":19,"timestamp":1614948416},{"label":10,"timestamp":1615121216},{"label":148,"timestamp":1615034816},{"label":41,"timestamp":1615034816},{"label":70,"timestamp":1614948416},{"label":146,"timestamp":1615034816},{"label":109,"timestamp":1614948416},{"label":106,"timestamp":1614948416},{"label":177,"timestamp":1615034816},{"label":145,"timestamp":1615034816},{"label":105,"timestamp":1615121216},{"label":40,"timestamp":1615034816},{"label":192,"timestamp":1615034816},{"label":198,"timestamp":1615121216},{"label":131,"timestamp":1614948416},{"label":44,"timestamp":1615121216},{"label":98,"timestamp":1615121216},{"label":131,"timestamp":1615121216},{"label":145,"timestamp":1615121216},{"label":20,"timestamp":1614948416},{"label":83,"timestamp":1615034816},{"label":132,"timestamp":1614948416},{"label":3,"timestamp":1615121216},{"label":139,"timestamp":1615121216},{"label":128,"timestamp":1615034816},{"label":59,"timestamp":1615034816},{"label":125,"timestamp":1615034816},{"label":51,"timestamp":1615034816},{"label":181,"timestamp":1615121216},{"label":122,"timestamp":1614948416}];
   isMenuHide = false;
   @Output() onIsMenuHide= new EventEmitter();
  data ={ 
    flmL:null,
    flL:null,
    sms:null,
    date:null
  }

   chart_water_level:any;
   chart_water_distance:any;
   chart_water_flow:any;
   startDt =  new Date().setDate(new Date().getDate()-1);
   endDt  = new Date().setDate(new Date().getDate()+1);
   constructor() {
 
   } 
   distances = new Array();
   water_levels = new Array();
   flRate = new Array();
   ngOnInit() { 
     console.log(this.endDt);
     this.initUIDate();
     this.distances = new Array();
     this.water_levels = new Array();
     this.flRate = new Array();
   
     this.distances = localStorage.getItem('distances') ? JSON.parse(localStorage.getItem('distances')) :[];
     this.water_levels = localStorage.getItem('water_levels') ? JSON.parse(localStorage.getItem('water_levels')):[];
     this.flRate =  localStorage.getItem('flRate') ? JSON.parse(localStorage.getItem('flRate')) :[]; 
   
     // distances = [{"label":31,"timestamp":1615034816},{"label":82,"timestamp":1614948416},{"label":75,"timestamp":1615121216},{"label":35,"timestamp":1615034816},{"label":144,"timestamp":1615034816},{"label":67,"timestamp":1614948416},{"label":61,"timestamp":1615034816},{"label":165,"timestamp":1615034816},{"label":33,"timestamp":1615034816},{"label":123,"timestamp":1614948416},{"label":144,"timestamp":1614948416},{"label":150,"timestamp":1614948416},{"label":191,"timestamp":1615034816},{"label":32,"timestamp":1615034816},{"label":171,"timestamp":1615034816},{"label":196,"timestamp":1615034816},{"label":42,"timestamp":1615034816},{"label":140,"timestamp":1614948416},{"label":119,"timestamp":1615121216},{"label":33,"timestamp":1615034816},{"label":30,"timestamp":1615034816},{"label":118,"timestamp":1614948416},{"label":120,"timestamp":1614948416},{"label":191,"timestamp":1615121216},{"label":135,"timestamp":1615121216},{"label":58,"timestamp":1615034816},{"label":36,"timestamp":1615034816},{"label":37,"timestamp":1614948416},{"label":175,"timestamp":1614948416},{"label":9,"timestamp":1615034816},{"label":151,"timestamp":1614948416},{"label":15,"timestamp":1615034816},{"label":42,"timestamp":1614948416},{"label":185,"timestamp":1615034816},{"label":123,"timestamp":1614948416},{"label":62,"timestamp":1615034816},{"label":2,"timestamp":1615034816},{"label":67,"timestamp":1614948416},{"label":40,"timestamp":1614948416},{"label":37,"timestamp":1614948416},{"label":163,"timestamp":1614948416},{"label":55,"timestamp":1615034816},{"label":116,"timestamp":1614948416},{"label":21,"timestamp":1614948416},{"label":185,"timestamp":1614948416},{"label":184,"timestamp":1615034816},{"label":104,"timestamp":1615034816},{"label":75,"timestamp":1615034816},{"label":3,"timestamp":1614948416},{"label":16,"timestamp":1615121216},{"label":126,"timestamp":1614948416},{"label":68,"timestamp":1615121216},{"label":69,"timestamp":1614948416},{"label":122,"timestamp":1615034816},{"label":159,"timestamp":1615121216},{"label":59,"timestamp":1615121216},{"label":122,"timestamp":1614948416},{"label":64,"timestamp":1615034816},{"label":188,"timestamp":1615034816},{"label":12,"timestamp":1614948416},{"label":190,"timestamp":1615121216},{"label":10,"timestamp":1614948416},{"label":6,"timestamp":1614948416},{"label":94,"timestamp":1615121216},{"label":140,"timestamp":1614948416},{"label":124,"timestamp":1614948416},{"label":10,"timestamp":1615121216},{"label":141,"timestamp":1614948416},{"label":164,"timestamp":1615121216},{"label":43,"timestamp":1615121216},{"label":18,"timestamp":1614948416},{"label":29,"timestamp":1614948416},{"label":169,"timestamp":1615034816},{"label":19,"timestamp":1615121216},{"label":154,"timestamp":1615121216},{"label":54,"timestamp":1615121216},{"label":20,"timestamp":1615121216},{"label":56,"timestamp":1614948416},{"label":72,"timestamp":1615034816},{"label":196,"timestamp":1615034816},{"label":130,"timestamp":1615121216},{"label":161,"timestamp":1615121216},{"label":39,"timestamp":1615034816},{"label":145,"timestamp":1615034816},{"label":111,"timestamp":1615034816},{"label":51,"timestamp":1614948416},{"label":55,"timestamp":1615121216},{"label":127,"timestamp":1614948416},{"label":52,"timestamp":1615121216},{"label":82,"timestamp":1615034816},{"label":128,"timestamp":1615121216},{"label":56,"timestamp":1614948416},{"label":135,"timestamp":1615121216},{"label":79,"timestamp":1614948416},{"label":114,"timestamp":1614948416},{"label":79,"timestamp":1615034816},{"label":24,"timestamp":1614948416},{"label":115,"timestamp":1614948416},{"label":148,"timestamp":1615034816},{"label":130,"timestamp":1614948416},{"label":58,"timestamp":1615034816},{"label":52,"timestamp":1615034816},{"label":45,"timestamp":1615121216},{"label":30,"timestamp":1614948416},{"label":133,"timestamp":1614948416},{"label":127,"timestamp":1614948416},{"label":151,"timestamp":1614948416},{"label":58,"timestamp":1615121216},{"label":142,"timestamp":1615034816},{"label":170,"timestamp":1615121216},{"label":153,"timestamp":1615034816},{"label":62,"timestamp":1615034816},{"label":91,"timestamp":1615121216},{"label":63,"timestamp":1615121216},{"label":69,"timestamp":1615034816},{"label":152,"timestamp":1614948416},{"label":50,"timestamp":1614948416},{"label":143,"timestamp":1614948416},{"label":23,"timestamp":1614948416},{"label":17,"timestamp":1615034816},{"label":43,"timestamp":1615121216},{"label":89,"timestamp":1614948416},{"label":79,"timestamp":1615121216},{"label":156,"timestamp":1615034816},{"label":79,"timestamp":1615121216},{"label":116,"timestamp":1615034816},{"label":159,"timestamp":1615034816},{"label":65,"timestamp":1614948416},{"label":124,"timestamp":1615034816},{"label":58,"timestamp":1615121216},{"label":47,"timestamp":1615034816},{"label":4,"timestamp":1615121216},{"label":157,"timestamp":1615121216},{"label":112,"timestamp":1615034816},{"label":108,"timestamp":1615121216},{"label":85,"timestamp":1614948416},{"label":195,"timestamp":1614948416},{"label":136,"timestamp":1615121216},{"label":148,"timestamp":1615034816},{"label":5,"timestamp":1615121216},{"label":145,"timestamp":1615121216},{"label":159,"timestamp":1615121216},{"label":47,"timestamp":1614948416},{"label":29,"timestamp":1614948416},{"label":82,"timestamp":1614948416}];
     // water_levels = [{"label":47,"timestamp":1615121216},{"label":63,"timestamp":1615121216},{"label":10,"timestamp":1614948416},{"label":165,"timestamp":1615034816},{"label":101,"timestamp":1614948416},{"label":116,"timestamp":1615121216},{"label":136,"timestamp":1614948416},{"label":198,"timestamp":1615034816},{"label":71,"timestamp":1615121216},{"label":77,"timestamp":1614948416},{"label":110,"timestamp":1614948416},{"label":134,"timestamp":1614948416},{"label":54,"timestamp":1614948416},{"label":33,"timestamp":1614948416},{"label":114,"timestamp":1615121216},{"label":188,"timestamp":1615121216},{"label":36,"timestamp":1615121216},{"label":33,"timestamp":1615121216},{"label":49,"timestamp":1615121216},{"label":82,"timestamp":1615034816},{"label":180,"timestamp":1615121216},{"label":84,"timestamp":1615121216},{"label":12,"timestamp":1614948416},{"label":162,"timestamp":1615121216},{"label":22,"timestamp":1615034816},{"label":48,"timestamp":1614948416},{"label":11,"timestamp":1614948416},{"label":157,"timestamp":1614948416},{"label":71,"timestamp":1614948416},{"label":87,"timestamp":1615034816},{"label":194,"timestamp":1615034816},{"label":59,"timestamp":1614948416},{"label":77,"timestamp":1615034816},{"label":156,"timestamp":1615034816},{"label":170,"timestamp":1615034816},{"label":35,"timestamp":1614948416},{"label":156,"timestamp":1615034816},{"label":175,"timestamp":1615034816},{"label":26,"timestamp":1615121216},{"label":144,"timestamp":1615034816},{"label":91,"timestamp":1615121216},{"label":145,"timestamp":1615121216},{"label":60,"timestamp":1614948416},{"label":99,"timestamp":1615034816},{"label":158,"timestamp":1615121216},{"label":111,"timestamp":1615121216},{"label":126,"timestamp":1615034816},{"label":23,"timestamp":1615034816},{"label":57,"timestamp":1615034816},{"label":31,"timestamp":1615034816},{"label":175,"timestamp":1614948416},{"label":75,"timestamp":1615034816},{"label":151,"timestamp":1615034816},{"label":102,"timestamp":1615034816},{"label":33,"timestamp":1614948416},{"label":92,"timestamp":1614948416},{"label":40,"timestamp":1614948416},{"label":163,"timestamp":1615034816},{"label":58,"timestamp":1615121216},{"label":26,"timestamp":1615034816},{"label":38,"timestamp":1615121216},{"label":80,"timestamp":1614948416},{"label":193,"timestamp":1615034816},{"label":89,"timestamp":1615034816},{"label":124,"timestamp":1615121216},{"label":196,"timestamp":1615034816},{"label":61,"timestamp":1615121216},{"label":79,"timestamp":1615121216},{"label":94,"timestamp":1615121216},{"label":173,"timestamp":1614948416},{"label":53,"timestamp":1615121216},{"label":68,"timestamp":1614948416},{"label":39,"timestamp":1615034816},{"label":118,"timestamp":1615034816},{"label":153,"timestamp":1614948416},{"label":10,"timestamp":1615034816},{"label":16,"timestamp":1615121216},{"label":14,"timestamp":1615034816},{"label":190,"timestamp":1615034816},{"label":156,"timestamp":1615034816},{"label":23,"timestamp":1615034816},{"label":155,"timestamp":1615034816},{"label":113,"timestamp":1615121216},{"label":126,"timestamp":1615121216},{"label":193,"timestamp":1615034816},{"label":82,"timestamp":1615034816},{"label":111,"timestamp":1615121216},{"label":138,"timestamp":1615034816},{"label":65,"timestamp":1615034816},{"label":65,"timestamp":1614948416},{"label":110,"timestamp":1615034816},{"label":177,"timestamp":1615121216},{"label":73,"timestamp":1614948416},{"label":151,"timestamp":1615121216},{"label":193,"timestamp":1615121216},{"label":163,"timestamp":1614948416},{"label":183,"timestamp":1614948416},{"label":149,"timestamp":1615121216},{"label":88,"timestamp":1614948416},{"label":3,"timestamp":1614948416},{"label":90,"timestamp":1615121216},{"label":43,"timestamp":1614948416},{"label":185,"timestamp":1614948416},{"label":149,"timestamp":1615034816},{"label":22,"timestamp":1615121216},{"label":26,"timestamp":1614948416},{"label":27,"timestamp":1615121216},{"label":172,"timestamp":1614948416},{"label":13,"timestamp":1615121216},{"label":118,"timestamp":1614948416},{"label":137,"timestamp":1614948416},{"label":10,"timestamp":1614948416},{"label":28,"timestamp":1615121216},{"label":138,"timestamp":1615121216},{"label":44,"timestamp":1615121216},{"label":3,"timestamp":1615034816},{"label":101,"timestamp":1615034816},{"label":184,"timestamp":1614948416},{"label":94,"timestamp":1614948416},{"label":24,"timestamp":1615121216},{"label":94,"timestamp":1615034816},{"label":157,"timestamp":1614948416},{"label":163,"timestamp":1614948416},{"label":126,"timestamp":1615034816},{"label":141,"timestamp":1615034816},{"label":118,"timestamp":1614948416},{"label":64,"timestamp":1615121216},{"label":133,"timestamp":1614948416},{"label":73,"timestamp":1615034816},{"label":61,"timestamp":1615121216},{"label":44,"timestamp":1614948416},{"label":128,"timestamp":1615034816},{"label":127,"timestamp":1615034816},{"label":35,"timestamp":1615034816},{"label":111,"timestamp":1614948416},{"label":6,"timestamp":1614948416},{"label":182,"timestamp":1614948416},{"label":85,"timestamp":1615121216},{"label":90,"timestamp":1615034816},{"label":198,"timestamp":1614948416},{"label":136,"timestamp":1615121216},{"label":1,"timestamp":1615121216},{"label":130,"timestamp":1614948416},{"label":101,"timestamp":1615034816},{"label":119,"timestamp":1615121216}];
     // flRate = [{"label":136,"timestamp":1615121216},{"label":159,"timestamp":1615121216},{"label":197,"timestamp":1615034816},{"label":54,"timestamp":1615034816},{"label":159,"timestamp":1614948416},{"label":198,"timestamp":1614948416},{"label":158,"timestamp":1615034816},{"label":109,"timestamp":1615034816},{"label":198,"timestamp":1615121216},{"label":160,"timestamp":1614948416},{"label":157,"timestamp":1615121216},{"label":28,"timestamp":1615121216},{"label":114,"timestamp":1615121216},{"label":83,"timestamp":1615034816},{"label":182,"timestamp":1615121216},{"label":158,"timestamp":1614948416},{"label":185,"timestamp":1615121216},{"label":72,"timestamp":1615034816},{"label":182,"timestamp":1614948416},{"label":36,"timestamp":1615121216},{"label":193,"timestamp":1615121216},{"label":98,"timestamp":1615121216},{"label":195,"timestamp":1615034816},{"label":66,"timestamp":1615121216},{"label":158,"timestamp":1614948416},{"label":149,"timestamp":1615121216},{"label":23,"timestamp":1615034816},{"label":57,"timestamp":1615121216},{"label":144,"timestamp":1615121216},{"label":77,"timestamp":1615034816},{"label":121,"timestamp":1615121216},{"label":44,"timestamp":1614948416},{"label":71,"timestamp":1615034816},{"label":23,"timestamp":1614948416},{"label":89,"timestamp":1615034816},{"label":164,"timestamp":1615034816},{"label":103,"timestamp":1615034816},{"label":84,"timestamp":1615034816},{"label":12,"timestamp":1614948416},{"label":109,"timestamp":1615121216},{"label":170,"timestamp":1615121216},{"label":129,"timestamp":1615121216},{"label":141,"timestamp":1614948416},{"label":150,"timestamp":1615034816},{"label":54,"timestamp":1615121216},{"label":182,"timestamp":1615034816},{"label":70,"timestamp":1615121216},{"label":10,"timestamp":1615034816},{"label":184,"timestamp":1615034816},{"label":198,"timestamp":1615034816},{"label":21,"timestamp":1615034816},{"label":159,"timestamp":1615034816},{"label":111,"timestamp":1615034816},{"label":138,"timestamp":1615121216},{"label":191,"timestamp":1615034816},{"label":62,"timestamp":1615121216},{"label":55,"timestamp":1615121216},{"label":87,"timestamp":1615121216},{"label":80,"timestamp":1615121216},{"label":66,"timestamp":1615121216},{"label":19,"timestamp":1614948416},{"label":163,"timestamp":1614948416},{"label":142,"timestamp":1614948416},{"label":117,"timestamp":1615034816},{"label":95,"timestamp":1615121216},{"label":181,"timestamp":1615121216},{"label":90,"timestamp":1615121216},{"label":128,"timestamp":1614948416},{"label":54,"timestamp":1615034816},{"label":96,"timestamp":1615034816},{"label":41,"timestamp":1615034816},{"label":196,"timestamp":1614948416},{"label":153,"timestamp":1615034816},{"label":162,"timestamp":1614948416},{"label":141,"timestamp":1615034816},{"label":31,"timestamp":1615034816},{"label":31,"timestamp":1615121216},{"label":146,"timestamp":1615121216},{"label":58,"timestamp":1615121216},{"label":196,"timestamp":1615034816},{"label":55,"timestamp":1615034816},{"label":103,"timestamp":1615034816},{"label":33,"timestamp":1615121216},{"label":148,"timestamp":1615034816},{"label":62,"timestamp":1615034816},{"label":185,"timestamp":1615034816},{"label":70,"timestamp":1615034816},{"label":128,"timestamp":1615121216},{"label":147,"timestamp":1614948416},{"label":144,"timestamp":1614948416},{"label":92,"timestamp":1615034816},{"label":122,"timestamp":1614948416},{"label":36,"timestamp":1614948416},{"label":48,"timestamp":1615034816},{"label":151,"timestamp":1615034816},{"label":129,"timestamp":1615121216},{"label":137,"timestamp":1614948416},{"label":143,"timestamp":1614948416},{"label":171,"timestamp":1615121216},{"label":137,"timestamp":1614948416},{"label":158,"timestamp":1615121216},{"label":79,"timestamp":1615121216},{"label":191,"timestamp":1615121216},{"label":144,"timestamp":1615121216},{"label":39,"timestamp":1614948416},{"label":53,"timestamp":1615121216},{"label":6,"timestamp":1614948416},{"label":115,"timestamp":1615034816},{"label":27,"timestamp":1614948416},{"label":51,"timestamp":1614948416},{"label":47,"timestamp":1614948416},{"label":37,"timestamp":1615034816},{"label":144,"timestamp":1615121216},{"label":27,"timestamp":1615121216},{"label":190,"timestamp":1615121216},{"label":89,"timestamp":1614948416},{"label":33,"timestamp":1614948416},{"label":76,"timestamp":1615121216},{"label":181,"timestamp":1615034816},{"label":151,"timestamp":1614948416},{"label":124,"timestamp":1614948416},{"label":54,"timestamp":1615121216},{"label":3,"timestamp":1615121216},{"label":27,"timestamp":1615121216},{"label":177,"timestamp":1614948416},{"label":143,"timestamp":1614948416},{"label":135,"timestamp":1615121216},{"label":121,"timestamp":1615121216},{"label":108,"timestamp":1615121216},{"label":81,"timestamp":1615121216},{"label":49,"timestamp":1615034816},{"label":79,"timestamp":1615034816},{"label":199,"timestamp":1615121216},{"label":149,"timestamp":1615121216},{"label":152,"timestamp":1615034816},{"label":130,"timestamp":1615121216},{"label":143,"timestamp":1615121216},{"label":127,"timestamp":1615034816},{"label":126,"timestamp":1615034816},{"label":31,"timestamp":1615034816},{"label":147,"timestamp":1614948416},{"label":183,"timestamp":1615034816},{"label":127,"timestamp":1614948416},{"label":180,"timestamp":1615121216},{"label":103,"timestamp":1615034816}];
     
   
     let distances$ = this.distances.slice(Math.max(this.distances.length - 45, 0))   
     let water_levels$ = this.water_levels.slice(Math.max(this.water_levels.length - 45, 0))
     let flRate$ = this.flRate.slice(Math.max(this.flRate.length - 45, 0))
     console.log(distances$) 
     
     distances$ = distances$.filter(o=>{
       const timestamp = new Date(o.timestamp).getTime(); 
       return this.startDt <= timestamp && this.endDt >= timestamp
     })
     water_levels$ = water_levels$.filter(o=>{
       const timestamp = new Date(o.timestamp).getTime();
       return this.startDt <= timestamp && this.endDt >= timestamp
     })
     flRate$= flRate$.filter(o=>{
       const timestamp = new Date(o.timestamp).getTime(); 
       return this.startDt <= timestamp && this.endDt >= timestamp
     })   
     
     
     let otherdatas = localStorage.getItem('otherdatas') ? JSON.parse(localStorage.getItem('otherdatas')) :[]; 
     const data = otherdatas.filter(o=>{
       const date = new Date(o.date).getTime(); 
       return this.startDt <= date && this.endDt >= date
      });
     if(!!data){
      this.data = data;
      console.log(this.data); 
     }else{
      this.data ={ 
        flmL:null,
        flL:null,
        sms:null,
        date:null
      }
     }

     console.log(distances$)
     distances$ =this.distances= distances$.map(function(d) { return d[`label`]; })
     flRate$ =this.flRate= flRate$.map(function(d) { return d[`label`]; })
     water_levels$ =this.water_levels= water_levels$.map(function(d) { return d[`label`]; })
     console.log(distances$)
 
     this.chart_water_level = _lineChartCon("h_chart_water_level"," ", " ",[],[{
       name: '',
       data: water_levels$
     }]);
     this.chart_water_distance =  _lineChartCon("h_chart_water_distance"," ", " ",[],[{
       name: ' ',
       data: distances$
     }]);
     this.chart_water_flow =  _lineChartCon("h_chart_water_flow_rate"," ", " ",[],[{
       name: ' ',
       data: flRate$
     }]); 
     this.reChart();
   } 
   initUIDate() {
     const _this = this;
     const a  = new Date();
     const b = new Date();
     b.setDate(new Date().getDate()+1);
     const currentDt=`${a.getMonth()+1}/${a.getDate()}/${a.getFullYear()}`; 
     const current2Dt=`${b.getMonth()+1}/${b.getDate()}/${b.getFullYear()}`; 
     $("#txtFrom").val(currentDt);
     $("#txtTo").val(current2Dt);
     $(function () {
       $("#txtFrom").datepicker({
           numberOfMonths: 2,
           onSelect: function (selected) {
             console.log(selected);
             var dt = new Date(selected);
             _this.startDt= new Date(selected).getTime();
             _this.reChart();
             console.log(dt.getTime());
             dt.setDate(dt.getDate() + 1);
             $("#txtTo").datepicker("option", "minDate", dt);
           }
       });
       $("#txtTo").datepicker({
           numberOfMonths: 2,
           onSelect: function (selected) {
             console.log(selected);
             var dt = new Date(selected);
             _this.endDt= new Date(selected).getTime();
             _this.reChart();
             console.log(dt.getTime());
             dt.setDate(dt.getDate() - 1);
             $("#txtFrom").datepicker("option", "maxDate", dt);
           }
       });
     });
   }
 
 
   reChart(){
      this.distances = new Array();
      this.water_levels = new Array();
      this.flRate = new Array();

     this.distances = localStorage.getItem('distances') ? JSON.parse(localStorage.getItem('distances')) :[];
     this.water_levels = localStorage.getItem('water_levels') ? JSON.parse(localStorage.getItem('water_levels')):[];
     this.flRate =  localStorage.getItem('flRate') ? JSON.parse(localStorage.getItem('flRate')) :[];
     
 
     let distances$ = this.distances.slice(Math.max(this.distances.length - 45, 0))   
     let water_levels$ = this.water_levels.slice(Math.max(this.water_levels.length - 45, 0))
     let flRate$ =this.flRate.slice(Math.max(this.flRate.length - 45, 0))
     console.log(distances$)
     
     distances$ = distances$.filter(o=>{
       const timestamp = new Date(o.timestamp).getTime(); 
       return this.startDt <= timestamp && this.endDt >= timestamp
     })
     water_levels$ = water_levels$.filter(o=>{
       const timestamp = new Date(o.timestamp).getTime();
       return this.startDt <= timestamp && this.endDt >= timestamp
     })
     flRate$= flRate$.filter(o=>{
       const timestamp = new Date(o.timestamp).getTime(); 
       return this.startDt <= timestamp && this.endDt >= timestamp
     }) 
   
     let otherdatas = localStorage.getItem('otherdatas') ? JSON.parse(localStorage.getItem('otherdatas')) :[]; 
     const data = otherdatas.filter(o=>{
       const date = new Date(o.date).getTime(); 
       return this.startDt <= date && this.endDt >= date
      });
     if(!!data){
      this.data = data;
      console.log(this.data); 
      }else{
        this.data ={ 
          flmL:null,
          flL:null,
          sms:null,
          date:null
        }
      }

 
     distances$ =this.distances= distances$.map(function(d) { return d[`label`]; })
     flRate$ =this.flRate=flRate$.map(function(d) { return d[`label`]; })
     water_levels$ =this.water_levels=water_levels$.map(function(d) { return d[`label`]; })
     console.log(this.distances)
 
     this.chart_water_distance.series[0].setData(distances$);
     this.chart_water_level.series[0].setData(water_levels$);
     this.chart_water_flow.series[0].setData(flRate$);
   }
   onPrint(){
     console.log("print");
     this.onIsMenuHide.emit();
     this.isMenuHide = true;
     setTimeout(() => {
       window.print(); 
       setTimeout(() => {
         this.isMenuHide = false
       }, 200);
     }, 500);
   }
 }
 