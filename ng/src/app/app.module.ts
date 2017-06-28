import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routing } from './app.routes';

import { AppComponent } from './app.component';

import { CardService } from './services/card.service';

import { PostListComponent } from './containers/post-list/post-list.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { ViewBlogComponent } from './containers/view-blog/view-blog.component';
import { CreateComponent } from './containers/create/create.component';
import { CollectionComponent } from './containers/collection/collection.component';
import { ViewPhotoComponent } from './containers/view-photo/view-photo.component';

import { NavigationComponent } from './components/navigation/navigation.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { CardCollectionComponent } from './components/card-collection/card-collection.component';
import { CardBlogComponent } from './components/card-blog/card-blog.component';
import { CardPhotoComponent } from './components/card-photo/card-photo.component';
import { CardDirective } from './directives/card.directive';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BreadcrumbsComponent,
    CardBlogComponent,
    PostListComponent,
    UserProfileComponent,
    CreateComponent,
    PageNotFoundComponent,
    CollectionComponent,
    CardCollectionComponent,
    CardPhotoComponent,
    ViewPhotoComponent,
    ViewBlogComponent,
    CardDirective,
    CardComponent
  ],
  entryComponents: [ CardBlogComponent, CardPhotoComponent ],
  imports: [
    Routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
