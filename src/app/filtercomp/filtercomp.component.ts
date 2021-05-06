import { Component, OnInit } from '@angular/core';
import { TataService } from '../tata.service';

@Component({
  selector: 'app-filtercomp',
  templateUrl: './filtercomp.component.html',
  styleUrls: ['./filtercomp.component.css']
})
export class FiltercompComponent implements OnInit {

  q = '#hyderabad #beds #covid #covidhelp since:2021-04-28';
  // textfield ="hyderabad"
  info: any;
  sentence = "#hyderabad has been flooded with #lokesh";

  constructor(public tweetService : TataService) { }

  ngOnInit(): void {
  }


}
