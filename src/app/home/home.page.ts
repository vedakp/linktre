import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  links = [
    {name:'simplystart.in',link:'https://www.simplystart.in/'},
    {name:'facebook',link:'https://www.facebook.com/search/top?q=simplystart'},
    {name:'instagram',link:'https://www.instagram.com/simplystart.in/'},
  ]
  constructor() {}

}
