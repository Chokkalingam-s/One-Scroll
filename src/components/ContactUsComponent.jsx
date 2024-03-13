import React, { useEffect, useState } from "react";
import { getAllUsers, addConnection } from "../api/FirestoreAPI";
import ConnectedUsers from "./common/ConnectedUsers";
import "../Sass/ContactUsComponent.scss";
import { firestore } from "../firebaseConfig";
import { collection, addDoc } from 'firebase/firestore';
import { toast } from "react-toastify";
import OneScrollContactUsImg from "../assets/OneScroll-ContactUs.png";





export default function ContactUsComponent({ currentUser }) {
  const [users, setUsers] = useState([]);
  const getCurrentUser = (id) => {
    addConnection(currentUser.id, id);
  };
  useEffect(() => {
    getAllUsers(setUsers);
  }, []);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(firestore, 'contact'), {
        email,
        subject,
        message,
        timestamp: new Date(),
      });
      console.log('Document written with ID: ', docRef.id);
      setEmail('');
      setSubject('');
      setMessage('');
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Failed to send message. Please try again later.');
    }
  };

  
  return (
    <div className="contact-form-container">
      
      <img src={OneScrollContactUsImg}alt="Contac Us Img" />
      <form className="contact-form" onSubmit={handleSubmit}>
      <h1 className="contacth1">Contact Us</h1>
        <div className="form-group">
          <label>Email</label>
          <input
          className="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input
           className="text"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            value={message}
            className="message"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button"  >Submit</button>
      </form>
    </div>
  );
};

 
  