import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() colour?: string;

  constructor(private elm: ElementRef) {
    elm.nativeElement.style.cursor = "pointer";
  }
  ngOnInit(): void {
  }
  @HostListener("click") onClick(btn: any) {
    this.highlightFunction(this.colour);
  }
  private highlightFunction(colorValue?: string): void {
    this.elm.nativeElement.style.backgroundColor = colorValue ?? "green";
  }
}
