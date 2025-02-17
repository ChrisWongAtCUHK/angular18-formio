import { Component } from '@angular/core';
import { FormioModule } from '@formio/angular';

@Component({
  standalone: true,
  selector: 'app-simple',
  imports: [FormioModule],
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent {
  constructor() {}
}
