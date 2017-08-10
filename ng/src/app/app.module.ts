import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routing } from './app.routes';

import { AppComponent } from './app.component';

import { UsersService } from './services/users.service';
import { PostsService } from './services/posts.service';
import { CardService } from './services/card.service';
import { AuthGuard } from './services/auth-guard.service';

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
import { CardDemoComponent } from './components/card-demo/card-demo.component';
import { ViewDemoComponent } from './containers/view-demo/view-demo.component';
import { CreateDemoComponent } from './containers/create-demo/create-demo.component';

import { QuillModule } from 'ngx-quill';
import { CardLoadingComponent } from './components/card-loading/card-loading.component';
import { ViewSearchComponent } from './containers/view-search/view-search.component'

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
    CardComponent,
    CardDemoComponent,
    ViewDemoComponent,
    CreateDemoComponent,
    CardLoadingComponent,
    ViewSearchComponent
  ],
  entryComponents: [ CardBlogComponent, CardPhotoComponent ],
  imports: [
    Routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    QuillModule
  ],
  providers: [
    CardService,
    AuthGuard,
    UsersService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
