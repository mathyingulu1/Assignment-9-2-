import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() colour?: string;
  constructor(private elm: ElementRef) {
  }
  ngOnInit(): void {
    this.elm.nativeElement.style.backgroundColor = this.colour ?? "green";
  }
}
