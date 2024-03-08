import React, { useMemo, useState } from "react";
import ContactUs from "../Pages/ContactUs";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";


export default function ContactUsLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Topbar currentUser={currentUser} />
      <ContactUs currentUser={currentUser} />
    </div>
  );
}
