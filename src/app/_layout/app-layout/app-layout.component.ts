import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html'
})
export class AppLayoutComponent implements OnInit {
  title = '';
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // Reads data from the router
    this.activatedRoute.data.subscribe(data => {
      this.title = data.title ? data.title : '';
    });
  }

}
