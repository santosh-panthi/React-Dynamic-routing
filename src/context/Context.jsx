import React, { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
    const [users, setusers] = useState([
    {
        id: 0,
        name: "John Doe",
        city: "San Francisco",
    },
    {
        id: 1,
        name: "hari",
        city: "london",
    },
    {
        id: 2,
        name: "Mike",
        city: "New York",
    }
    


])

  return (
    <UserContext.Provider value={{users, setusers}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default Context;
