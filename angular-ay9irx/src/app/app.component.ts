import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular session';
  myColor='blue';
  myUrl="https://angular.io/start";

  shouldDisplay = true;

  myList = ["one","two","three"]

show(){
  this.shouldDisplay = this.shouldDisplay;
}

// data = {
//     tricon : "https://www.triconinfotech.com/",
//     isro : "https://www.isro.gov.in/",
//     youtube : "https://www.youtube.com/"
//   }

// }

data = [
  {
    n : "tricon",
    link : "https://www.triconinfotech.com/",
    desc : "tricon infotech"
  },
  {
    n : "isro",
    link : "https://www.isro.gov.in/",
    desc : "space"
  },
  {
    n : "youtube",
    link : "https://www.youtube.com/",
    desc : "entertainment"
  }
]

}