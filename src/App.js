import './App.css';
import Slider from './components/slider';  
import Navbar from './components/navbar'; // Updated import
import Rooms from './components/rooms';
import AboutUsSection from './components/about';
import Gallery from './components/gallery';
import Amenities from './components/amenities';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="site-wrap" id="home">
      {/* Navigation Bar */}
      <Navbar />

      {/* Slider */}
      <Slider />

      {/* Rooms Section */}
      <Rooms />

      {/* Amenities Section */}
      <Amenities />
  
      {/* Gallery Section */}
      <Gallery />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="site-footer">
        <Footer /> 
      </footer>
    </div>
  );
}

export default App;
