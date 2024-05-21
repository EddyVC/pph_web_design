import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.css'
})
export class SvgIconComponent {
  @Input() iconClass: string = '';
  @Input() iconWidth: string = '';
  @Input() iconHeight: string = '';
  @Input() iconPaths: string[] = [];
}
