import React from "react";
import PersonalyInfo from "./components/Info";
import AboutMe from "./components/About";
import MyInterests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <PersonalyInfo />
      <AboutMe />
      <MyInterests />
      <Footer />
    </div>
  );
}

export default App;
