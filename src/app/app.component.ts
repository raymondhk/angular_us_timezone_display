import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time;
  on = false;
  on1 = false;
  on2 = false;
  on3 = false;
  on4 = false;
  click(btn) {
    if (btn === 'btn1') {
      this.on = true;
      this.on1 = true;
      this.on2 = false;
      this.on3 = false;
      this.on4 = false;
      this.time = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles'});
    }
    else if (btn === 'btn2') {
      this.on = true;
      this.on1 = false;
      this.on2 = true;
      this.on3 = false;
      this.on4 = false;
      this.time = new Date().toLocaleString('en-US', { timeZone: 'America/Denver'});
    }
    else if (btn === 'btn3') {
      this.on = true;
      this.on1 = false;
      this.on2 = false;
      this.on3 = true;
      this.on4 = false;
      this.time = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago'});
    }
    else if (btn === 'btn4') {
      this.on = true;
      this.on1 = false;
      this.on2 = false;
      this.on3 = false;
      this.on4 = true;
      this.time = new Date().toLocaleString('en-US', { timeZone: 'America/New_York'});
    }
    else {
      this.on = false;
      this.on1 = false;
      this.on2 = false;
      this.on3 = false;
      this.on4 = false;
    }
  }
}
