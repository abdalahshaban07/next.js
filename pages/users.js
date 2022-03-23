import User from "../components/user";

const UserList = ({ users }) => {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  // console.log(data);

  return {
    props: {
      users: data,
    },
  };
}

export default UserList;
