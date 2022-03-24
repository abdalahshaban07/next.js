import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};
const DashboardSwr = () => {
  const { data, error } = useSWR("/dashboard", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h2>Dashboard</h2>
      <h2> posts - {data.posts} </h2>
      <h2> likes - {data.likes} </h2>
      <h2> followers - {data.followers} </h2>
      <h2> following - {data.following} </h2>
    </div>
  );
};
export default DashboardSwr;
