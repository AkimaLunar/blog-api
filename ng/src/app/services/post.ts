export class Post {
    title: string;
    type: string;
    author: {
      userId: {
        $oid: string;
      };
      displayName: string;
    };
    timestamp: string;
    tags: string;
    hearts: string;
    content: string;
}
