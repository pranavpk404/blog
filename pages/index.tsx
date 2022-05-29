import Head from "next/head";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import Card from "../components/Card";
import { GetStaticProps } from "next/types";

type Props = {
  posts: [Post];
};

const Home = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog By Pranav" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="flex flex-wrap jsustify-evenly flex-col sm:flex-row">
        {posts.map((post) => (
          <Card
            key={post._id}
            linkToPost={`/post/${post.slug.current}`}
            description={post.description}
            thumbnail={urlFor(post.thumbnail.asset._ref).url()!}
            postTitle={post.title}
            authorName={post.author.name}
            authorImage={urlFor(post.author.image).url()!}
          />
        ))}
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const url = `*[_type == "post"]{_id,title,description,author->{name,image},body,thumbnail,slug}`;
  const posts = await sanityClient.fetch(url);
  return {
    props: {
      posts,
    },
    revalidate: 1800,
  };
};
