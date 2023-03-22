import { useState, useEffect } from "react";
import "./styles.css";

import List from "./List";
import Form from "./Form";
function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Kemal",
      phone_number: "12345",
    },
    {
      fullname: "Ahmet",
      phone_number: "45678",
    },
    {
      fullname: "Mehmet",
      phone_number: "91919191",
    },
    {
      fullname: "Deniz",
      phone_number: "423684",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
