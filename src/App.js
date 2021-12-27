import { Routes, Route } from "react-router-dom";

import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext'
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Coaching from "./Components/Coaching/Coaching";
import BookASession from "./Components/BookASession/BookASession";
import Contacts from "./Components/Contacts/Contacts";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import MySessions from "./Components/MySessions/MySessions";
import Logout from "./Components/Logout";
import Header from "./Components/Header/Header";
import Notification from './Components/Common/Notification';
import ErrorBoundary from './Components/Common/ErrorBoundary';
// import PrivateRoute from './components/Common/PrivateRoute';
// import GuardedRoute from './components/Common/GuardedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <ErrorBoundary>
      <AuthProvider>
        <NotificationProvider>
          <div id="container">

            <Header />

            <Notification />

            <main id="site-content">

              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/coaching" element={<Coaching />} />

                <Route path="/book-a-session" element={<BookASession />} />

                <Route path="/contacts" element={<Contacts />} />

                <Route path="/login" element={<Login />} />

                <Route path="/my-sessions" element={<MySessions />} />

                <Route path="/register" element={<Register />} />

                <Route path="/logout" element={<Logout />} />

              </Routes>

            </main>

            <Footer />

          </div>
        </NotificationProvider>
      </AuthProvider>
    </ErrorBoundary >
  );
}



export default App;