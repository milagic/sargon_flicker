import {Component} from '@angular/core';
import {FlickerService} from './flicker/flicker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  results: any;

  constructor(private flickerService: FlickerService) {
  }

  handleSelection(result): void {
    this.results = [result];
  }

  handleSearch(results) {
    this.results = results;
  }
}
