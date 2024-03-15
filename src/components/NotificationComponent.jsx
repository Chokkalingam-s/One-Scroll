import React, { useEffect, useState } from "react";
import { getAllUsers, addConnection } from "../api/FirestoreAPI";
import ConnectedUsers from "./common/ConnectedUsers";
import "../Sass/NotificationsComponent.scss";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function NotificationComponent({ currentUser }) {
  const [users, setUsers] = useState([]);
  const getCurrentUser = (id) => {
    addConnection(currentUser.id, id);
  };
  useEffect(() => {
    getAllUsers(setUsers);
  }, []);
  return(
    <div className="notification-component">
    <Card>
      <Card.Header>Today</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-10">
          <p>
            {' '}
            Summer Sales! Hurry up to get 15% discount on this Summer | Whole sale Shirts & Tshirts{' '}
          </p>
          <footer className="blockquote-footer">
            ---<cite title="Source Title">N.S.Marketing, Madurai</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header>Yesterday</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Hey Users! How are You ? Is there any Feedback for our service?
           {' '}
          </p>
          <footer className="blockquote-footer">
            ---! -<cite title="Source Title">{' '}OneScroll</cite>
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
           Lycra Zone - Purchase All Synthetic in one place with Flat 5% cd{' '}
          </p>
          <footer className="blockquote-footer">
            --- <cite title="Source Title">Indian Flower ,Coimbatore </cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header>Last Week</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Happy to announce the opening of our new store in Tirupur. Visit us to get 10% discount on all products.{' '}
            {' '}
          </p>
          <footer className="blockquote-footer">
            --- <cite title="Source Title">Vinayaga garments, Tirupur</cite>
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p>
            {' '} Order Refill ? Time to load the most pruchased products of Levi's shirts {' '}
          </p>
          <footer className="blockquote-footer">
            --- <cite title="Source Title">Levi's Zone, Chennai</cite>
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}Reminder!!! Be the first 100 to order in this month to get 10+1 offer{' '}
          </p>
          <footer className="blockquote-footer">
            ---<cite title="Source Title">Srinithi Garments, Salem</cite>
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p>
            {' '} Any Help! Use ContactUs feature to directly Inertact with us! #HappyUserHappyUs{' '}
          </p>
          <footer className="blockquote-footer">
          ---! - <cite title="Source Title">{' '}OneScroll</cite>
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p>
            {' '} Welcome to OneScroll! We inivite you to #BusinessTogether! Happy Business{' '}
          </p>
          <footer className="blockquote-footer">
            ---! - <cite title="Source Title">{' '}OneScroll</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  
    </div>
  )
  }
 
  