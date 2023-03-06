import { Component } from '@angular/core';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public readonly version = environment.version
  constructor() {

  }
}
