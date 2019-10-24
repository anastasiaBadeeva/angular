import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "./../../services/articles.service"
import { from } from 'rxjs';

@Component({
  selector: 'app-article-preview-list',
  templateUrl: './article-preview-list.component.html',
  styleUrls: ['./article-preview-list.component.scss']
})
export class ArticlePreviewListComponent implements OnInit {
  list: any[];
  constructor( private articlesService :ArticlesService) { }

  ngOnInit() {
    this.list=this.articlesService.getArticles();
  }

}
