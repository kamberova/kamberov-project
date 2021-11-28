import React from "react";

import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Coaching from "./Components/Coaching";
import BookASession from "./Components/BookASession";
import Contacts from "./Components/Contacts";
import Register from "./Components/Register";
import LoginForm from "./Components/LoginForm";
import Header from "./Components/Header";


function App() {

  return (
    <div>

      <Header />
      <Home />

      <About />

      <Coaching />

      <BookASession />

      <Contacts />

      <Footer />

      <LoginForm />
      <Register />

    </div>
  );
}



export default App;