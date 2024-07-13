import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-block',
  standalone: true,
  imports: [],
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})
export class InfoBlockComponent {
  @Input() text: string = '';
}