export interface Post {
  // @TODO ID is a string
    _id: string;
    title: string;
    type: string;
    author: {
      userId: string;
      displayName: string;
    };
    timestamp: Date;
    tags?: string[];
    hearts?: string[];
    content: any;
}
