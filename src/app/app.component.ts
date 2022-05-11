import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hswebb';
  showProfile: boolean = false;

  clickProfile() {
    console.log("click")
    console.log(this.showProfile)
    this.showProfile = !this.showProfile
  }
  setActive(){

  }
}


let toggleButton = document.querySelector(".container");
