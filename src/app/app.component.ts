import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageComponent } from './components/page/page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageComponent],
  template: `
    <app-page></app-page>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
}
