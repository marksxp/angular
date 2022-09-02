import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTexto]'
})
export class TextoDirective implements OnInit {

  @Input('appTexto') fontSize!: string;

  constructor(
    private elemento: ElementRef
  ) { }

  ngOnInit(): void {
    this.elemento.nativeElement.style.fontSize = this.fontSize;
  }
}
