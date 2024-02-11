import { useEffect, useState } from "react";
import "./App.css";
import getUsers from "./Utilities/fetchUsers";
import Users from "./Components/Users/Users";
import Loading from "./Components/Loading/Loading";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getUsers("https://dummyjson.com/users");
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSetUsers = (newUser) => {
    setUsers((users) => [...users, newUser]);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Users users={users} onSetUsers={handleSetUsers} />
      )}
    </>
  );
}

export default App;
