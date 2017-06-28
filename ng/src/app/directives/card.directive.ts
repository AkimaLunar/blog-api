import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[card-directive]'
})
export class CardDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
