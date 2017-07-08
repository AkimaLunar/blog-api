import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { AuthService } from '../../services/auth.service';

interface PostBody {
    title: string,
    type: string,
    author: {
        userId: string
    },
    tags: Array<string>,
    hearts: Array<string>,
    content: any
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [PostsService, AuthService]
})
export class CreateComponent implements OnInit {
  public types: Array<string> = [
    'blog',
    'photo'
  ];
  private post: PostBody;

  constructor(
    private postsService: PostsService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.post = {
      title: '',
      type: '',
      author: {
        userId: this.auth.getCurrentUser()
      },
      tags: [''],
      hearts: [],
      content: {}
    };
  }

  onPost() {
    this.postsService.createPost(this.post);
  }

  onPostType(value) {
    this.post.type = value.type;
  }

}
