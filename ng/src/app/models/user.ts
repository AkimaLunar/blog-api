export class User {
    _id: {
      $oid: string;
    };
    email: string;
    password: string;
    name: {
      firstName: string;
      lastName: string;
    };
    bio: string;
    collections: [
      {
        _id: string;
        collection: string;
        posts: number;
      }
    ];
    following: number;
}
