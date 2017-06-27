import { RouterModule } from '@angular/router';

import { PostListComponent } from './containers/post-list/post-list.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { CollectionComponent } from './containers/collection/collection.component';
import { ViewBlogComponent } from './containers/view-blog/view-blog.component';
import { CreateComponent } from './containers/create/create.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';

import { ViewPhotoComponent } from './containers/view-photo/view-photo.component';


const routes = [
    { path: '', component: PostListComponent },
    { path: 'profile/:id', component: UserProfileComponent },
    { path: 'profile/:id/:collection', component: CollectionComponent },
    { path: 'post/:id', component: ViewBlogComponent },
    { path: 'create', component: CreateComponent },
    { path: 'photo', component: ViewPhotoComponent },
    { path: '**', component: PageNotFoundComponent },
];

export const Routing = RouterModule.forRoot(routes);
