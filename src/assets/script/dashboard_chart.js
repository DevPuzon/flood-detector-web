var connection = "connectiwewon";

function _pieChartCon(container,title,series){
     
    var chart = Highcharts.chart(container,{
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: title
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: series,
        credits: {
            enabled: false
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    }
                }
            }]
        }
    });
    chart.setSize(400);
    setTimeout(() => {
        chart.setSize(null);
   }, 1500);
}

function _lineChartCon(container,title,yAxisTitle,category,series,exporting=true){
     
    var chart = Highcharts.chart(container,{
        chart: {
            type: 'line'
        },  
        exporting: {
            enabled: exporting
        },
        title: {
            text: title
        },
        subtitle: {
            text: null
        },
        legend:{
            enabled:false
        },
        yAxis: {
            min: 0,
            title: {
                text: yAxisTitle, 
            },
            labels: {
                overflow: 'justify'
            }
        }, 
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                },
                groupPadding: 0.1,
                pointWidth: 10,
                padding: 5,
            },
        }, 
        credits: {
            enabled: false
        },
        xAxis: {
            categories: category
        },
        series: series,
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    }
                }
            }]
        }
    });
    chart.setSize(400);
    setTimeout(() => {
        chart.setSize(null);
   }, 1500);
   return chart;
}

function _stackedColCon(container,title,categories,yTitle,series){
     
    var chart = Highcharts.chart(container,{
        chart: {
            type: 'column'
        },
        title: {
            text: title
        },
        xAxis: {
            categories: categories
        },
        yAxis: {
            min: 0,
            title: {
                text: yTitle
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: ( // theme
                        Highcharts.defaultOptions.title.style &&
                        Highcharts.defaultOptions.title.style.color
                    ) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series : series
        // series: [{
        //     name: 'John',
        //     data: [5, 3, 4, 7, 2]
        // }, {
        //     name: 'Jane',
        //     data: [2, 2, 3, 2, 1]
        // }, {
        //     name: 'Joe',
        //     data: [3, 4, 4, 2, 5]
        // }]
    });
    chart.setSize(400);
    setTimeout(() => {
        chart.setSize(null);
   }, 1500);
}


function _basicColChartCon(container,title,subtitle,yAxisTitle,categories,series){
     
    var chart = Highcharts.chart(container,{
        chart: {
            type: 'column'
        },
        title: {
            text: title
        }, 
        subtitle: {
            text: subtitle
        }, 
        xAxis: {
            categories: categories,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: yAxisTitle
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}: Scans</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        credits:{
            enabled:false
        },
        series: series,
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    }
                }
            }]
        }
    });
    chart.setSize(400);
    setTimeout(() => {
        chart.setSize(null);
   }, 1500);
}


function _negativBarChartCon(container,title,subtitle,yAxisTitle,categories,series){
     
    var chart = Highcharts.chart(container,{
        chart: {
            type: 'bar'
        },
        title: {
            text:  title
        },
        subtitle: {
            text: subtitle
        } ,
        xAxis: [{
            categories: categories,
            reversed: false,
            labels: {
                step: 1
            } 
        }, { // mirror axis on right side
            opposite: true,
            reversed: false,
            categories: categories,
            linkedTo: 0,
            labels: {
                step: 1
            } 
        }],
        yAxis: {
            title: {
                text: null
            },
            labels: {
                formatter: function () {
                    return Math.abs(this.value)  ;
                }
            } 
        },
    
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
                    'Scans: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1);
            }
        },
        series: series,
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    }
                }
            }]
        }
    });
    chart.setSize(400);
    setTimeout(() => {
        chart.setSize(null);
   }, 1500);
}








function _barChart(title,category,series){
    var options ={
        chart: {
            type: 'bar'
        }, 
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rates(percent)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' Percent'
        },
        credits: {
            enabled: false
        },
        series: series,
        xAxis: {
            title: {
                text: title
            },
            categories: category
        },
        legend: {
            verticalAlign: 'top',
        },
    };
    return options;
}
function _lineChart(title,category,series){
    var options ={
        chart: {
            type: 'line'
        }, 
        title: {
            text: title
        },
        subtitle: {
            text: null
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rates(percent)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        }, 
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                },
                groupPadding: 0.1,
                pointWidth: 10,
                padding: 5,
            },
        }, 
        credits: {
            enabled: false
        },
        xAxis: {
            categories: category
        },
        series: series
    };
    return options;
}
function _donutChart(data){
    var options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Other<br>Test',
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            name: 'Spicific test',
            innerSize: '50%',
            data: data
        }]
    }
    return options;
}