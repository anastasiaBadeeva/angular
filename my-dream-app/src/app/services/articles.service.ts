import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }
  article = [
    { 
      id :1,
      title :"art1",
      content :"some content 1",
      image :"https://fakeimg.pl/300/",
      date : "24.10.2019",
    },
    {
      id :2,
      title :"art2",
      content :"some content 2",
      image :"https://fakeimg.pl/250x100/",
      date : "24.10.2019",
    },
    {
      id :3,
      title :"art3",
      content :"some content 3",
      image : "https://fakeimg.pl/350x200/ff0000,128/000,255",
      date : "24.10.2019",
    },
  ]
  getArticles(){
  return this.article;
  }
}
