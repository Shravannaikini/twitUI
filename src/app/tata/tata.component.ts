import { Component, OnInit } from '@angular/core';
import { TataService } from '../tata.service';
@Component({
  selector: 'app-tata',
  templateUrl: './tata.component.html',
  styleUrls: ['./tata.component.css']
})
export class TataComponent implements OnInit {

  q = '#covidhelp #remdesivir #tocilizumab since:2021-04-27';
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
