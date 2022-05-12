import { GetStaticProps } from "next/types";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import Image from "next/image";
import PortableText from "react-portable-text";
import CommentForm from "../../components/CommentForm";
import Comments from "../../components/Comments";

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  const { title, mainImage, author, _createdAt, comments, _id } = post;
  return (
    <div>
      <Image
        width={1500}
        height={500}
        alt={post.title}
        src={urlFor(mainImage.asset._ref).url()!}
      />

      <article className="max-w-3xl mx-auto p-5">
        <h1 className="text-3xl mb-3 ">{title}</h1>
        <div className="flex items-center mt-2 space-x-5 mb-5">
          <Image
            width="48"
            height="48"
            className="rounded-full"
            src={urlFor(author.image).url()!}
            alt={author.name}
          />
          <p className="font-extralight text-sm">
            Blog Post by {author.name} - Published at{" "}
            {new Date(_createdAt).toLocaleString()}
          </p>
        </div>
        <div>
          <PortableText
            className=""
            serializers={{
              h1: (props: any) => (
                <h1 className="text-5xl mb-3">{props.children}</h1>
              ),
              h2: (props: any) => (
                <h2 className="text-4xl mb-3">{props.children}</h2>
              ),
              h3: (props: any) => (
                <h3 className="text-3xl mb-3">{props.children}</h3>
              ),
              h4: (props: any) => (
                <h4 className="text-2xl mb-3">{props.children}</h4>
              ),

              link: (props: any) => (
                <a className="text-base mb-3" href={props.href}>
                  {props.children}
                </a>
              ),
              a: (props: any) => (
                <a className="mb-3 text-3xl" href={props.href}>
                  {props.children}
                </a>
              ),
              ul: (props: any) => <ul className="mt-xl">{props.children}</ul>,
              ol: (props: any) => <ol className="mt-xl">{props.children}</ol>,
              li: (props: any) => (
                <li className="text-base mb-3 list-disc">{props.children}</li>
              ),
            }}
            content={post.body}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          />
        </div>
      </article>
      <hr className=" max-w-lg my-5 mx-auto border border-yellow-500" />
      <CommentForm id={_id} />
      <Comments comments={comments} />
    </div>
  );
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
'comments': *[
          _type == "comment" &&
          post._ref == ^._id 
        ],
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
    revalidate: 10,
  };
};
