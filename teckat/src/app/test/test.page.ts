import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';

@Component({
  selector: "app-test",
  templateUrl: "test.page.html",
  styleUrls: ["test.page.scss"]
    
})
export class TestPage{

  constructor(private router: Router,private platform: Platform) {}  
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);}
  
}
