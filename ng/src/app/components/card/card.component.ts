import {
  Component,
  Input,
  AfterContentInit,
  ViewChild,
  ComponentFactoryResolver } from '@angular/core';

import { Post } from '../../models/post';
import { CardDirective } from '../../directives/card.directive';
import { CardService } from '../../services/card.service';
import { CardItem } from './card-item';

export interface PostComponent {
  post: Post;
}

@Component({
  selector: 'app-card',
  template: '<ng-template card-directive></ng-template>'
})
export class CardComponent implements AfterContentInit {
  @Input() post: Post;
  @ViewChild(CardDirective) cardDirective: CardDirective;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cardService: CardService
  ) { }

  ngAfterContentInit() {
    const cardItem = this.cardService.renderCard(this.post.type, this.post);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(cardItem.component);
    const viewContainerRef = this.cardDirective.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<PostComponent>componentRef.instance).post = this.post;

  }
}
