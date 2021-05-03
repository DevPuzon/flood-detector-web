import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public appPages = [
    {
      title: 'Dashboard',
      url: 'd',
      icon: 'home' 
    },  
    {
      title: 'History',
      url: 'h',
      icon: 'time' 
    },  
    {
      title: 'Logout', 
      icon: 'exit' 
    } 
  ];  
  constructor(
    private router :Router
  ) { }

  ngOnInit() {
  }

  onClickMenu(page){
    if(page.title == "Logout"){
      this.router.navigateByUrl("/");
      return;
    }
    this.router.navigateByUrl("dashboard/"+page.url);
  }
}
