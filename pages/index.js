import Link from "next/link";
const Home = () => {
  return (
    <div>
      <Link href="/posts">
        <a>posts</a>
      </Link>
      <Link href="/products">
        <a>products</a>
      </Link>
    </div>
  );
};

export default Home;
