import { useRouter } from "next/router";

const Product = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>
      <p>{product.description}</p>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { productId } = context.params;
  const response = await fetch(`http://localhost:4000/products/${productId}`);
  const data = await response.json();
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}

export default Product;
