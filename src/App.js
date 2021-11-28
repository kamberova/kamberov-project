import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Coaching from "./Components/Coaching";
import BookASession from "./Components/BookASession";
import Contacts from "./Components/Contacts";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Navigation from "./Components/Navigation";


function App() {

  return (
    <div>

      <Navigation />

      <Header />

      <About />

      <Coaching />

      <BookASession />

      <Contacts />

      <Footer />
      
      <Login />
      <Register />
    </div>
  );
}



export default App;