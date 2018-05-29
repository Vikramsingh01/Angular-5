import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAppBold]'
})
export class AppBoldDirective {

  @Input() bgColor: string;
  constructor(private elementRef?: ElementRef) { }

  @HostListener('mouseenter')mouseEnter() {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
    this.elementRef.nativeElement.style.background = this.bgColor;
  }

  @HostListener('mouseleave')mouseLeave() {
    this.elementRef.nativeElement.style.fontWeight = 'normal';
    this.elementRef.nativeElement.style.background = '';
  }
}
