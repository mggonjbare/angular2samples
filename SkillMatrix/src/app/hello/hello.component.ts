import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <p>
     {{title}}
    </p>
  `,
  styles: []
})
export class HelloComponent implements OnInit {
  title = '';
  constructor() {}

  ngOnInit() {
    this.title = ' hello works!';
  }

}
