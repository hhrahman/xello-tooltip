import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xt-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  label: string = 'Submit';

  constructor() { }

  ngOnInit() {
  }

}
