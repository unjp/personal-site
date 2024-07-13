import { Component } from '@angular/core';
import { InfoBlockComponent } from '../info-block/info-block.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [InfoBlockComponent, ContactFormComponent],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

}