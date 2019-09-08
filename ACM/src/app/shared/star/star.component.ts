import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating;
  @Output() starClicked = new EventEmitter();;

  starWidth: number = 0;

  constructor() { }

  ngOnInit() {
    this.starWidth = this.rating * 75 / 5;
  }

  starClick() {
    let message = `Selected rating is ${this.rating} stars.`;
    this.starClicked.emit(message);
  }

}
