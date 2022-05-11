import Head from "next/head";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import Card from "../components/Card";

interface Props {
  posts: [Post];
}

const Home = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog By Pranav" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 ">
        {posts.map((post) => (
          <Card
            key={post._id}
            linkToPost={`/post/${post.slug.current}`}
            description={post.description}
            mainImage={urlFor(post.mainImage.asset._ref).url()!}
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

export const getServerSideProps = async () => {
  const url = `*[_type == "post"]{_id,title,description,author->{name,image},body,mainImage,slug}`;
  const posts = await sanityClient.fetch(url);
  return {
    props: { posts },
  };
};
