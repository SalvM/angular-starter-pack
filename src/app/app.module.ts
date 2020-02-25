import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

/* PIPES */

/* COMPONENTS */

/* PAGES */

/* LAYOUTS */
import {AppLayoutComponent} from './_layout/app-layout/app-layout.component';
import {AppHeaderComponent} from './_layout/app-header/app-header.component';

/* SERVICES */

const LAYOUTS = [AppLayoutComponent, AppHeaderComponent];
const PAGES = [];
const COMPONENTS = [];
const PIPES = [];
const SERVICES = [];

@NgModule({
  declarations: [
    AppComponent,
    ...LAYOUTS,
    ...PAGES,
    ...COMPONENTS,
    ...PIPES,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [...SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
