import Link from "next/link";
const Home = () => {
  return (
    <div>
      <h1>hello world</h1>
      <Link href="/blog">
        <a>BLog</a>
      </Link>
      <Link href="/product">
        <a>product</a>
      </Link>
    </div>
  );
};

export default Home;
