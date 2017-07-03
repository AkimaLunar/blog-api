export class User {
    _id: string;
    email: string;
    name: {
      firstName: string;
      lastName: string;
    };
    picture: string;
    bio: string;
    collections: [
      {
        _id: string;
        collection: string;
        posts: number[];
      }
    ];
    following: string[];
    followers: string[];
}
