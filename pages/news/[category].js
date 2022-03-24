const ArticleListByCategory = ({ articles, category }) => {
  return (
    <>
      <h1>List of {category} Articles</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title}
            </h2>
            <p>{article.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  const { category } = params;
  res.setHeader("Set-Cookie", ["name=abdalah"]);

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();
  return {
    props: {
      articles: data,
      category,
    },
  };
}
