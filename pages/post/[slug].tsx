import { GetStaticProps } from "next/types";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  console.log(post);
  return <div>hello you are at {post.title}</div>;
};

export default Post;

export const getStaticPaths = async () => {
  const query = `
  *[_type == "post"]{
      _id,
      slug {
          current
        }   
    }`;

  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const url = `
    *[_type == "post" && slug.current == "${params?.slug}"][0]{
        _id,
        _createdAt,
        title,
        author->{
            name,
            image
        },
        description,
        mainImage,
        slug,
        body
      }`;
  const post = await sanityClient.fetch(url);
  return {
    props: {
      post,
    },
  };
};
