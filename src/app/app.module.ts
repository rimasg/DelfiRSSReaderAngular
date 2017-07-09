import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { PanelModule } from "primeng/primeng";
import { DataListModule } from "primeng/primeng";

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';

import { NewsService } from "./services/news.service";
import { NewsItemComponent } from './components/news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    PanelModule,
    DataListModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
