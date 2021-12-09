import React from "react";

import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Coaching from "./Components/Coaching/Coaching";
import BookASession from "./Components/BookASession/BookASession";
import Contacts from "./Components/Contacts/Contacts";
import Register from "./Components/Register/Register";
import LoginForm from "./Components/Login/LoginForm";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";

function App() {

  return (
    <div>

      <Header />

      <main id="site-content">

        <Home />

        <About />

        <Coaching />

        <BookASession />

        <Contacts />

        <Login />

        <Register />

        <Footer />

        <LoginForm />
        <Register />

      </main>
      
    </div>
  );
}



export default App;