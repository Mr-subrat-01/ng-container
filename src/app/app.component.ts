import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Toggle: boolean = true;
  onToggle() {
    this.Toggle = !this.Toggle;
  }
  title = 'NgContainer';
}
