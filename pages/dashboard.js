import { useState, useEffect } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => {
    const response = await fetch("http://localhost:4000/dashboard");
    const data = await response.json();
    setDashboardData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h2> posts - {dashboardData.posts} </h2>
      <h2> likes - {dashboardData.likes} </h2>
      <h2> followers - {dashboardData.followers} </h2>
      <h2> following - {dashboardData.following} </h2>
    </div>
  );
};
export default Dashboard;
