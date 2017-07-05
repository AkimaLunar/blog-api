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
      title: 'Hella Title!!',
      type: 'photo',
      author: {
        userId: '595acf8e1a6a85e333968bec'
      },
      tags: ['cats'],
      hearts: [],
      content: {
        photoUrl: 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg',
        description: 'What a great cat!'
      }
    }
    this.postsService.createPost(FAKEBOD);
  }

}
