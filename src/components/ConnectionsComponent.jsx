import React, { useEffect, useState } from "react";
import { getAllUsers, addConnection } from "../api/FirestoreAPI";
import ConnectedUsers from "./common/ConnectedUsers";
import "../Sass/ConnectionsComponent.scss";
export default function ConnectionsComponent({ currentUser }) {
  const [users, setUsers] = useState([]);
  const getCurrentUser = (id) => {
    addConnection(currentUser.id, id);
  };
  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  return users.length > 1 ? (

    <div className="connections-main">
      {users.map((user) => {
        return user.id === currentUser.id ? (
          <></>
        ) : (
          <ConnectedUsers
            currentUser={currentUser}
            user={user}
            getCurrentUser={getCurrentUser}
          />
        );
      })}
     
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7860.496109121971!2d78.12207!3d9.913287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c57e19b46821%3A0xf0b977007333ed61!2sn.s.marketing!5e0!3m2!1sen!2sru!4v1709925110036!5m2!1sen!2sru"
  width={300}
  height={340}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

    </div>
    
  ) : (
    <div className="connections-main">No Connections to Add!</div>
  );
}
