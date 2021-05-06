import { Component, OnInit } from '@angular/core';
import { TataService } from '../tata.service';

@Component({
  selector: 'app-oxygen',
  templateUrl: './oxygen.component.html',
  styleUrls: ['./oxygen.component.css']
})
export class OxygenComponent implements OnInit {

  q = '#oxygen #ventilator #covidhelp since:2021-04-27';
  // textfield ="hyderabad"
  info: any;

  constructor(public tweetService : TataService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.tweetService.gettwitterdata(this.q).subscribe((data)=>{console.log(data);this.info=data}, err=>{console.log(err)})
}


}
