export type Post = {
  _id: string;
  _createdAt: Date;
  title: string;
  comments: Comment[];
  description: string;
  author: {
    name: string;
    image: string;
  };

  thumbnail: {
    asset: {
      _ref: string;
    };
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
};

export type Comments = {
  comments: Comment[];
};

export type Comment = {
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  _id: string;
  _updatedAt: Date;
};

export type CardProps = {
  linkToPost: string;
  description: string;
  thumbnail: string;
  postTitle: string;
  authorName: string;
  authorImage: string;
};

export type FormInput = {
  _id: string;
  name: string;
  email: string;
  comment: string;
};
