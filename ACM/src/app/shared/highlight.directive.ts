import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color: string;

  constructor(private el: ElementRef = null) { }

  @HostListener('mouseenter') onMouseEnter() {
    let col = this.color ? this.color : 'red';
    this.highLight(col);
  }

  @HostListener('mouseleave') onMouseLeave() {
   this.highLight();
  }

  highLight(color: string = null) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
