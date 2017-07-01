export interface Post {
    _id: number;
    title: string;
    type: string;
    author: {
      userId: {
        $oid: string;
      };
      displayName: string;
    };
    timestamp: string;
    tags?: string;
    hearts?: string;
    content: object;
}
