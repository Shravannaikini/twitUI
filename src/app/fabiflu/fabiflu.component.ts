import { Component, OnInit } from '@angular/core';
import { TataService } from '../tata.service';

@Component({
  selector: 'app-fabiflu',
  templateUrl: './fabiflu.component.html',
  styleUrls: ['./fabiflu.component.css']
})
export class FabifluComponent implements OnInit {

  q = '#fabiflu #covidhelp since:2021-04-27';
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

