import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(i) {
    document.getElementById(i).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
