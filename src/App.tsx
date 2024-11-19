import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './components/signup';
import Login from './components/login';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navbar is always visible */}
        <Navbar />

        <div className="pt-16">
          <Routes>
            {/* Home route */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Features />
                  <Contact />
                </>
              }
            />

            {/* Signup route */}
            <Route path="/signup" element={<Signup />} />

            {/* Login route */}
            <Route path="/login" element={<Login />} />

            {/* Dashboard route */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>

        {/* Footer is always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
