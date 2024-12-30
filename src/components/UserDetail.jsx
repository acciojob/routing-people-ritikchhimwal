import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Ensure loading is true before fetching starts
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false); // Fetch successful
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
        setLoading(false); // Handle fetch error
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Display loading message
  }

  if (!user) {
    return <p>User not found</p>; // Handle case where user data is null
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserDetail;
