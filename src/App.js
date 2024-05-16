import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Loading from "./components/Loading";

function App() {
  const api = `https://randomuser.me/api/?page=1&results=1&seed=abc`;

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        setLoading(true);
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Unable to fetch the data from API");
        }
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setUserData(data.results);
        } else {
          throw new Error("No user data found");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUserData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading url="https://img.freepik.com/premium-vector/loading-icon-logo-vector-design-template_827767-2356.jpg" />
      ) : error ? (
        <Loading url="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_640.png" />
      ) : (
        userData.map((item) => <Card item={item} key={item.login.uuid} />)
      )}
    </>
  );
}

export default App;
