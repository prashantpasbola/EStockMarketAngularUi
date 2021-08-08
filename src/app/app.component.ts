import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EStockMarket';

  ngOnInit() {
    if (environment.production) {
             if (location.protocol === 'http:') {
              window.location.href = location.href.replace('http', 'https');
             }
      }
     // this.titleService.init(0,0);
  }
}
