export interface Post {
  // @TODO ID is a string
    _id: number;
    title: string;
    type: string;
    author: {
      userId: string;
      displayName: string;
    };
    timestamp: string;
    tags?: string;
    hearts?: string;
    content: object;
}
