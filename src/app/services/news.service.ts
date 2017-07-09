import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as xml2js from 'xml2js';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { NewsItem } from "../models/news-item";

import { URL } from "../data/urls";

@Injectable()
export class NewsService {

  private rssUrlPrefx = "/rss/"; // see 'proxy.conf.json'
  private newsItems: NewsItem[] = [];

  constructor(private http: Http) { }

  getWeatherData(id: number): Observable<NewsItem[]> {
    // let url = "https://cors-anywhere.herokuapp.com/http://www.delfi.lt/rss/feeds/daily.xml";
    let url = this.rssUrlPrefx + URL[id].url;
    return this.http.get(url)
      .map((res: Response) => this.parseXml(res.text()));
  }

  private parseXml(str: string): NewsItem[] {
    xml2js.parseString(str, (err, result) => {
      let newsItesmXml = result.rss.channel[0].item;
      newsItesmXml.forEach(res => {
        this.newsItems.push({
          title: res['title'][0],
          description: res['description'][0],
          thumbnail: res['media:thumbnail'][0].$.url
        });
      });
    });
    return this.newsItems;
  }
}
