export interface Post {
  _id: string;
  _createdAt: Date;
  title: string;
  comments: Comment[];
  description: string;
  author: {
    name: string;
    image: string;
  };

  mainImage: {
    asset: {
      _ref: string;
    };
  };
  slug: {
    current: string;
  };
  body: object[];
}

export interface Comment {
  approved: boolean;
  comment: string;
  name: string;
  _id: string;
}

export interface CardProps {
  linkToPost: string;
  description: string;
  mainImage: string;
  postTitle: string;
  authorName: string;
  authorImage: string;
}

export interface FormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}
