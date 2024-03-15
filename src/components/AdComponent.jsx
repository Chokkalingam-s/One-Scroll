import React, { useEffect, useState } from "react";
import { getAllUsers, addConnection } from "../api/FirestoreAPI";
import ConnectedUsers from "./common/ConnectedUsers";
import "../Sass/Ad.scss";
export default function AdComponent({ currentUser }) {
  const [users, setUsers] = useState([]);
  const getCurrentUser = (id) => {
    addConnection(currentUser.id, id);
  };
  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  return (
    <div>
    </div>
  );
};
