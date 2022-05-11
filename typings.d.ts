export interface Post {
  _id: string;
  _createdAt: Date;
  title: string;
  description: string;
  author: {
    name: string;
    image: string;
  };
  body: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
}

export interface cardProps {
  linkToPost: string;
  description: string;
  mainImage: string;
  postTitle: string;
  authorName: string;
  authorImage: string;
}
