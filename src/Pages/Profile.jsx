import React, {useState, useEffect} from 'react'
import ProfileComponent from '../components/ProfileComponent'
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebaseConfig';

export default function Profile() {
  const [loading, setLoading] = useState(true);

  
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);

  return <ProfileComponent />;
  
}