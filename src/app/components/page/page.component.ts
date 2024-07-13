import { Component } from '@angular/core';
import { InfoBlockComponent } from '../info-block/info-block.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ExternalLinkComponent } from '../external-link/external-link.component';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [InfoBlockComponent, ContactFormComponent, ExternalLinkComponent, SocialsComponent],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

}