import { Routes, Route } from "react-router-dom";


import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Coaching from "./Components/Coaching/Coaching";
import BookASession from "./Components/BookASession/BookASession";
import Contacts from "./Components/Contacts/Contacts";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";

function App() {

  return (
    <div>

      <Header />

      <main id="site-content">

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/coaching" element={<Coaching />} />

          <Route path="/book-a-session" element={<BookASession />} />

          <Route path="/contacts" element={<Contacts />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

        </Routes>

      </main>
      <Footer />

    </div>
  );
}



export default App;