import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';

@Component({
  selector: "app-test",
  templateUrl: "test.page.html",
  styleUrls: ["test.page.scss"]
    
})
export class TestPage{
  slideOpts = {
    initialSlide: 0,
    speed: 300
  };
  constructor(private router: Router,private platform: Platform) {}

  
  
  
}
