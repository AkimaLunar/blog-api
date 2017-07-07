import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service'
import { AuthService } from '../../services/auth.service'
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [PostsService, AuthService]
})
export class CreateComponent implements OnInit {

  constructor(
    private postsService: PostsService,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  post(){
    const FAKEBOD = {
      title: 'Have you seen this cat yet?',
      type: 'photo',
      author: {
        userId: this.auth.getCurrentUser()
      },
      tags: ['cats'],
      hearts: [],
      content: {
        photoUrl: 'https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg',
        description: 'Another great cat'
      }
    }
    this.postsService.createPost(FAKEBOD);
  }

}
