import { COMMA, ENTER, SEMICOLON } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import{DataService, SearchService}from '../../services';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';

import { Image } from '../../model/image';
import { MatChipInputEvent } from '@angular/material';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  images: Image[];
  title = 'Maria Barakat';
  joke:any;
update: boolean=false;
  constructor(private http:HttpClient,update:SwUpdate, private serviceData:DataService,private searchService:SearchService){

    update.available.subscribe(event=>{
      // this.update  = true;
      update.activateUpdate().then(()=> document.location.reload());
    })
  }

  ngOnInit(){
    this.serviceData.gimmeJokes().subscribe(res=>{
      this.joke = res;
    })

  }

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA, SEMICOLON];

  fruits :Fruits[ ]=[];

  paste(event: ClipboardEvent): void {
    event.preventDefault();
    event.clipboardData
    .getData('Text')
    .split(/;|,|\n/)
    .forEach(value => {
      if(value.trim()){
        this.fruits.push({ name: value.trim() });
      }
    })
  }
  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }    
    let keys:string='';
    for(let key in this.fruits ){
      if(keys!=''){
        keys = keys+','
      }
       keys=keys+'\''+this.fruits[key].name+'\''
    }
    
    console.log(keys)
    if(!(keys=='')){
      this.searchService.getIds(keys).subscribe(images=>  this.images=images);
    }


  }

  remove(fruit: any): void {
    let index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  pictures = [
    {
      id: 1,
      title: 'A natural view',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
    },
    {
      id: 2,
      title: 'Newspaper',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'
    },
    {
      id: 3,
      title: 'Favourite pizza',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'
    },
    {
      id: 4,
      title: 'Abstract design',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg'
    },
    {
      id: 5,
      title: 'Tech',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg'
    },
    {
      id: 6,
      title: 'Nightlife',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
    },
  ];


  
}

class Fruits{
  constructor(public name:string){}
}