import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.html'
})
export class AppHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() avatar = '';
  @Input() subTitle = '';
  canGoBack: boolean = !this._location.isCurrentPathEqualTo('/');
  constructor(private activatedRoute: ActivatedRoute, private _location: Location) {
  }

  ngOnInit() {
    const {fragment}: any = this.activatedRoute.snapshot;
    if(fragment) { // take all profile infos
      const {photo, first_name, last_name} = fragment;
      this.avatar = photo ? photo : '';
      this.subTitle = first_name ? `${first_name} ${last_name}` : '';
    }
  }

  back() {
    if(this.canGoBack) this._location.back();
  }

}
