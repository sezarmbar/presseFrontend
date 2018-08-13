import { COMMA, ENTER, SEMICOLON } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';

import{DataService}from '../../services/data.service';
import { MatChipInputEvent } from '@angular/material';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  title = 'Maria Barakat';
  joke:any;
update: boolean=false;
  constructor(update:SwUpdate, private serviceData:DataService){
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

  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];

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
  }

  remove(fruit: any): void {
    let index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
