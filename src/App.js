import './App.css';

//pages
import Home from './Sections/Home/Home';
import About from './Sections/About/About';
import Experience from './Sections/Experiences/Experience';
import Work from './Sections/Work/Work';
import Contact from './Sections/contact/Contact';

//components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ContactBar from './components/ContactBar/ContactBar';

function App() {
  return (
    <main className="main">
    <Navbar />
      <div className="app_section_container">
        <Home />
        <About /> 
        <Experience /> 
        <Work />  
        <Contact /> 
      </div>
       <ContactBar />  
      <Footer />
    </main>
  );
}

export default App;

