import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { Post } from '../../models/post';
import { CardDirective } from '../../directives/card.directive';
import { CardService } from '../../services/card.service';
import { CardItem } from './card-item';


@Component({
  selector: 'app-card',
  template: '<ng-template appPostHost></ng-template>'
})
export class CardComponent implements AfterViewInit {
  @Input() post: Post;
  @ViewChild(CardDirective) appPostHost: CardDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cardService: CardService
  ) { }

  AfterViewInit() {
    const cardItem = this.cardService.renderCard(this.post.type, this.post);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(cardItem);

    const viewContainerRef = this.appPostHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

}
