import { Component, OnInit } from '@angular/core';
import { TataService } from '../tata.service';

@Component({
  selector: 'app-beds',
  templateUrl: './beds.component.html',
  styleUrls: ['./beds.component.css']
})
export class BedsComponent implements OnInit {

  q = '#beds #covidhelp since:2021-04-28';
  // textfield ="hyderabad"
  info: any;
  sentence = "#hyderabad has been flooded with #lokesh";

  constructor(public tweetService : TataService) { }

  ngOnInit(): void {
    this.getData();
    // console.log(this.filterSTR(this.sentence));
    
  }

  getData(){
    this.tweetService.gettwitterdata(this.q).subscribe((data)=>{console.log(data);this.info=data}, err=>{console.log(err)})
}



}
