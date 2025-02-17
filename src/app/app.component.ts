import { Component } from '@angular/core';
import { SimpleComponent } from './simple/simple.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SimpleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular18-formio';
}
