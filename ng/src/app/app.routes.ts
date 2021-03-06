import { RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth-guard.service';

import { PostListComponent } from './containers/post-list/post-list.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { CollectionComponent } from './containers/collection/collection.component';
import { ViewBlogComponent } from './containers/view-blog/view-blog.component';
import { ViewDemoComponent } from './containers/view-demo/view-demo.component';
import { ViewSearchComponent } from './containers/view-search/view-search.component';
import { CreateComponent } from './containers/create/create.component';
import { CreateDemoComponent } from './containers/create-demo/create-demo.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';

import { ViewPhotoComponent } from './containers/view-photo/view-photo.component';


const routes = [
    { path: '', component: PostListComponent },
    { path: 'demo', component: ViewDemoComponent },
    { path: 'demo/create', component: CreateDemoComponent },
    { path: 'profile/:id', component: UserProfileComponent },
    { path: 'profile/:id/:collection', component: CollectionComponent },
    { path: 'blog/:id', component: ViewBlogComponent },
    { path: 'photo/:id', component: ViewPhotoComponent },
    {
        path: 'create',
        component: CreateComponent,
        canActivate: [AuthGuard]
    },
    { path: 'search', component: ViewSearchComponent},
    { path: '**', component: PageNotFoundComponent },
];

export const Routing = RouterModule.forRoot(routes);
