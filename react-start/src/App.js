import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>hello</h1>
      {unreadMessages.length > 0 && <h2>{unreadMessages.length}</h2>}
    </div>
  );
}

export default App;
