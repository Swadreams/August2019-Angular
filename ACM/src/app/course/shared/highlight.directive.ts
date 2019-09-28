import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  color;
  constructor(private el: ElementRef = null) { }

  @Input() appHighlight;

  @HostListener('mouseenter') onMouseEnter() {
    this.color = this.appHighlight ? this.appHighlight : 'red';
    this.highlight();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = null;
    this.highlight();
  }

  highlight() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }
}
