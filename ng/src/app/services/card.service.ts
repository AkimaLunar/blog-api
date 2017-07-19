import { Injectable } from '@angular/core';

import { CardBlogComponent } from '../components/card-blog/card-blog.component';
import { CardPhotoComponent } from '../components/card-photo/card-photo.component';

import { CardItem } from '../components/card/card-item';

@Injectable()
export class CardService {

  renderCard(type, post) {
    if (type === 'blog') {
      return new CardItem(CardBlogComponent, post);
    }
    if (type === 'photo') {
      return new CardItem(CardPhotoComponent, post);
    }
  }

}


