import { ParseTreeResult } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appname = 'blog app';
  name ="bruce" 
  getname()
  {
    return this.name   
  }
  obj={
    name:'kelly',
    age:20
  }
  arr=['bruce', 'tony', 'peter'];
  siteurl= window.location.href
  
}
