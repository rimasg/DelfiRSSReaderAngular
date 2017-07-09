import { Component, OnInit } from '@angular/core';
import { NewsService } from "app/services/news.service";
import { NewsItem } from "app/models/news-item";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  newsItems: NewsItem[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getWeatherData(0);
  }

  getWeatherData(id: number) {
    this.newsService.getWeatherData(id).subscribe(res => {
      this.newsItems = res;
    });
  }
}
