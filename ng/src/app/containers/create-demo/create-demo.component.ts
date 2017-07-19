import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { UsersService } from '../../services/users.service';
import { PostPhotoContent } from '../../models/post-photo-content';
import { PostBlogContent } from '../../models/post-blog-content';

interface PostBody {
    title: string;
    type: string;
    author: {
      userId: string
    };
    tags: Array<string>;
    hearts: Array<string>;
    content: any;
}

@Component({
  selector: 'app-create-demo',
  templateUrl: './create-demo.component.html',
  styleUrls: ['./create-demo.component.css'],
  providers: [PostsService]
})
export class CreateDemoComponent implements OnInit {
public types: Array<string> = [
    'blog',
    'photo'
  ];
  private post: PostBody;
  private content: any;

  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.post = {
      title: '',
      type: '',
      author: {
        userId: '000'
      },
      tags: [''],
      hearts: [],
      content: {}
    };

    this.content = {

    };
  }

  contentFactory(type): any {
    if (type === 'photo') {
      return {
        photoUrl: this.content.photoUrl,
      };
    }
    if (type === 'blog') {
      return {
        excerpt: this.content.excerpt,
        html: this.content.html
      };
    }
  }

  onSelectType(type): void {
    this.post.type = type;
  }

  onPost(): void {
    this.post.content = this.contentFactory(this.post.type);
    console.log(this.post);
    this.postsService.createDemoPost(this.post)
    .then(post => {
      this.router.navigate([`/${post.type}/${post._id}`]);
    });
  }
}
