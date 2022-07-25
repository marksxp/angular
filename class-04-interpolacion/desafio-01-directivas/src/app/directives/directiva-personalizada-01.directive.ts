import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectivaPersonalizada01]'
})
export class DirectivaPersonalizada01Directive {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
      renderer.setStyle(elementRef.nativeElement, 'background-color', '#95c799');
    }

}
