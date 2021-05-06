import { Component, OnInit } from '@angular/core';
import { TataService } from '../tata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customQuery:any;
  class001="queries";
  class002="tweets1";
  info:any;
  resetDisable:any=true;

  constructor(public tweetService : TataService) { }

  ngOnInit(): void {
  }

  getData(){
    this.tweetService.gettwitterdata(this.customQuery).subscribe((data)=>{console.log(data);this.info=data}, err=>{console.log(err)})
}

 resetSearch(){
   this.customQuery="";
   this.class001= "queries";
  this.class002="tweets1";
  this.resetDisable=true;
 }

startSearch(){
  this.class001= "queries1";
  this.class002="tweets";
  this.getData();
  this.resetDisable=false;
}

onEnter(){
  this.class001= "queries1";
  this.class002="tweets";
  this.getData();
  this.resetDisable=false;
}

}
