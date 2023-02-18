import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Measurement', url: '/measurement', icon: 'create' },
    { title: 'Stored Measurements', url: '/stored-measurements', icon: 'download' },
  ];
  constructor() {}
}
