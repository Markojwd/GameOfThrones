import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameOfThrones';

  loadedFeature = 'home';

  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
