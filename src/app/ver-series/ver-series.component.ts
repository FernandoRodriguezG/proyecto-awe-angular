import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-ver-series',
  templateUrl: './ver-series.component.html',
  styleUrls: ['./ver-series.component.css']
})
export class VerSeriesComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  contentArray: Content[] = [];

  ngOnInit(): void {
  }

  showContent(){
    this.contentService.getContent()
    .subscribe(c => {this.contentArray = c})
  }

}
