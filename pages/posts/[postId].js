import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();

  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
};

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();

  // const paths = data.map((post) => {
  //   return { params: { postId: `${post.id}` } };
  // });

  return {
    paths: [
      { params: { postId: `1` } },
      { params: { postId: `2` } },
      { params: { postId: `3` } },
    ],
    fallback: "blocking",
  };
}

export const getStaticProps = async (context) => {
  const { postId } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
};

export default Post;