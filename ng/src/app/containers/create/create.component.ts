import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { AuthService } from '../../services/auth.service';
import { PostPhotoContent } from '../../models/post-photo-content';
import { PostBlogContent } from '../../models/post-blog-content';

interface PostBody {
    title: string,
    type: string,
    author: {
      userId: string
    }
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
  private content: any;

  constructor(
    private postsService: PostsService,
    private auth: AuthService,
    private router: Router
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

    this.content = {

    }
  }
  
  contentFactory(type): any {
    if (type === 'photo') {
      return {
        photoUrl: this.content.photoUrl,
      }
    }
    if (type === 'blog') {
      return {
        excerpt: this.content.excerpt,
        html: this.content.html
      }
    }
  }

  onSelectType(type): void {
    this.post.type = type;
  }

  onPost(): void {
    this.post.content = this.contentFactory(this.post.type);
    this.postsService.createPost(this.post)
    .then(post => {
      this.router.navigate([`/${post.type}/${post._id}`]);
    })
  }
}
