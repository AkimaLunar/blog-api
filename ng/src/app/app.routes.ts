import { RouterModule } from '@angular/router';

import { PostListComponent } from './containers/post-list/post-list.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { CollectionComponent } from './containers/collection/collection.component';
import { BlogViewComponent } from './containers/blog-view/blog-view.component';
import { CreateComponent } from './containers/create/create.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';



const routes = [
    { path: '', component: PostListComponent },
    { path: 'profile/:id', component: UserProfileComponent },
    { path: 'profile/:id/:collection', component: CollectionComponent },
    { path: 'post/:id', component: BlogViewComponent },
    { path: 'create', component: CreateComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const Routing = RouterModule.forRoot(routes);
