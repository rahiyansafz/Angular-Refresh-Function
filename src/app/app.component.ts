import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) {}

  refresh():void {
    this._document.defaultView.location.reload();
  }
}
