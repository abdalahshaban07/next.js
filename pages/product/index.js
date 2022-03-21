import Link from "next/link";
import { useRouter } from "next/router";

const ProductList = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
  };

  return (
    <>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
      <h1>
        <Link href={"/product/1"}>
          <a>Product 1</a>
        </Link>
      </h1>
      <h1>
        <Link href={"/product/2"}>
          <a>Product 2</a>
        </Link>
      </h1>
      <h1>
        <Link href={"/product/3"} replace>
          <a>Product 3</a>
        </Link>
      </h1>

      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default ProductList;
