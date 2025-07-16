import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import Layout from "./Layout";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Services from "./Pages/Services/Services";
import About from "./Pages/AboutUs/About";
import ContactForm from "./Pages/ContactUs/ContactUs";
import ProjectsAdmin from "./Pages/Projects/ProjectAdmin";
import AllProjects from "./Pages/Projects/AllProjects";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import ProjectDetails from "./Pages/Projects/ProjectDetails";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    // Check if user is already authenticated
    const auth = localStorage.getItem('vastushobha-auth');
    if (auth === 'authenticated') {
      setIsAuthenticated(true);
    }
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('vastushobha-auth', 'authenticated');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('vastushobha-auth');
  };

  return (
    <HelmetProvider>
      <Router>
        {showSplash ? <SplashScreen /> : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<ContactForm />} />
              <Route path="about" element={<About />} />
              {/* <Route path="ourwork" element={<Projects />} /> */}
               <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route 
                path="admin" 
                element={
                  isAuthenticated ? (
                    <ProjectsAdmin onLogout={handleLogout} />
                  ) : (
                    <Navigate to="/admin-login" replace />
                  )
                } 
              />
              <Route path="all" element={<AllProjects />} />
              <Route 
                path="admin-login" 
                element={
                  !isAuthenticated ? (
                    <AdminLogin onLogin={handleLogin} />
                  ) : (
                    <Navigate to="/admin" replace />
                  )
                } 
              />
            </Route>
          </Routes>
        )}
      </Router>
    </HelmetProvider>
  );
}

function SplashScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="bg-white/90 rounded-3xl px-10 py-12 max-w-md w-full flex flex-col items-center relative overflow-hidden">
        {/* Animated Glow Behind Logo */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-tr from-red-500/30 via-red-400/20 to-red-700/10 blur-3xl animate-glow"></div>
        
        {/* Logo with Glow and Bounce */}
        <div className="mb-2 z-10">
          <img
            src="/logo.png"
            alt="Vastushobha Construction Logo"
            className="w-50 h-50 object-contain "
            style={{ background: 'white' }}
          />
        </div>

        {/* Brand Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight text-center animate-fadeIn">
          Vastushobha <span className="text-red-600">Construction</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg font-medium text-gray-700 mt-2 text-center animate-fadeIn delay-100">
          Building Excellence, <span className="text-red-600">Crafting Visions</span>
        </h2>

        {/* Progress indicator */}
        <div className="mt-10 w-full animate-fadeIn delay-300">
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 h-2 rounded-full animate-progressBar"></div>
          </div>
        </div>
      </div>

      {/* Animations & Styles */}
      <style jsx="true">{`
        @keyframes logoBounce {
          0% { transform: scale(0.95) translateY(10px); opacity: 0.7; }
          60% { transform: scale(1.05) translateY(-8px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.7; filter: blur(32px);}
          50% { opacity: 1; filter: blur(40px);}
        }
        .animate-logoBounce {
          animation: logoBounce 1s cubic-bezier(.68,-0.55,.27,1.55) forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.35s;
        }
        .animate-progressBar {
          animation: progressBar 1.8s cubic-bezier(.4,0,.2,1) forwards;
        }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}

export default App;