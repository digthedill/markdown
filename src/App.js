import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Markdown from "./Components/Markdown";
import bootstrap from "bootstrap/dist/css/bootstrap.css";

// setup a redux store to store values between editor and previewer OR

//start using hooks to access state?

function App() {
  return (
    <div className="App">
      <Header />
      <Markdown />
    </div>
  );
}

export default App;
