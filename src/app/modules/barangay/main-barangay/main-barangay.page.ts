import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-barangay',
  templateUrl: './main-barangay.page.html',
  styleUrls: ['./main-barangay.page.scss'],
})
export class MainBarangayPage implements OnInit {
  isMenuHide = false;
  public appPages = [
    {
      title: 'Dashboard',
      url: 'd',
      icon: 'home' 
    },  
    // {
    //   title: 'Report',
    //   url: 'h',
    //   icon: 'time' 
    // },  
    {
      title: 'Logout', 
      icon: 'exit' 
    } 
  ];  
  constructor(
    private router :Router
  ) { }

  ngOnInit() {  
    this.isMenuHide = true;
    setTimeout(() => {
      this.isMenuHide = false
    }, 600);
  }

  onClickMenu(page){
    if(page.title == "Logout"){
      this.router.navigateByUrl("/");
      return;
    }
    this.router.navigateByUrl("barangay/"+page.url);
  } 

  onActivate(componentReference) { 
    if(componentReference.onIsMenuHide){
      componentReference.onIsMenuHide.subscribe((data) => { 
        console.log("onIsMenuHide");
        this.isMenuHide = true;
        setTimeout(() => {
          this.isMenuHide = false
        }, 600);
      })
    }
 }
}
