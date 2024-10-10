// import logo from './logo.svg';
import './App.css';
import Slider from './components/slider';  
import NavigationMenu from './components/menu';
import Rooms from './components/rooms';
import AboutUsSection from './components/about';
import Gallery from './components/gallery';
import Amenities from './components/amenities';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="site-wrap" id="home">

  <div className="site-mobile-menu">
    <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close mt-3">
        <span className="icon-close2 js-menu-toggle" />
      </div>
    </div>
    <div className="site-mobile-menu-body" />
  </div>
  <div className="site-navbar-wrap js-site-navbar bg-white">
    <div className="container" id="home">
      <div className="site-navbar bg-light">
        <div className="py-1">
          <div className="row align-items-center">
            <div className="col-2">
              <h2 className="mb-0 site-logo">
                <a href="index.html">Poet's Inn</a>
              </h2>
            </div>
            <div className="col-10">
              <nav className="site-navigation text-right" role="navigation">
                <div className="container">
                  <div className="d-inline-block d-lg-none  ml-md-0 mr-auto py-3">
                    <a href="#home" className="site-menu-toggle js-menu-toggle">
                      <span className="icon-menu h3" />
                    </a>
                  </div>
                  <NavigationMenu/>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Slider />

  <Rooms />

  <Amenities />
  
  <Gallery />

  <AboutUsSection />

  {/* <div className="site-section block-14 bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto text-center mb-5 section-heading">
          <h2>What People Say</h2>
        </div>
      </div>
      <div className="nonloop-block-14 owl-carousel">
        <div className="p-4">
          <div className="d-flex block-testimony">
            <div className="person mr-3">
              <img
                src="images/person_1.jpg"
                alt="Image"
                className="img-fluid rounded"
              />
            </div>
            <div>
              <h2 className="h5">Katie Johnson</h2>
              <blockquote>
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                accusantium qui optio, possimus necessitatibus voluptate aliquam
                velit nostrum tempora ipsam!”
              </blockquote>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="d-flex block-testimony">
            <div className="person mr-3">
              <img
                alt="Image"
                className="img-fluid rounded"
              />
            </div>
            <div>
              <h2 className="h5">Mr patel</h2>
              <blockquote>
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                accusantium qui optio, possimus necessitatibus voluptate aliquam
                velit nostrum tempora ipsam!”
              </blockquote>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="d-flex block-testimony">
            <div className="person mr-3">
              <img
                src="images/person_3.jpg"
                alt="Image"
                className="img-fluid rounded"
              />
            </div>
            <div>
              <h2 className="h5">Shane Holmes</h2>
              <blockquote>
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                accusantium qui optio, possimus necessitatibus voluptate aliquam
                velit nostrum tempora ipsam!”
              </blockquote>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="d-flex block-testimony">
            <div className="person mr-3">
              <img
                src="images/person_4.jpg"
                alt="Image"
                className="img-fluid rounded"
              />
            </div>
            <div>
              <h2 className="h5">Mark Johnson</h2>
              <blockquote>
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                accusantium qui optio, possimus necessitatibus voluptate aliquam
                velit nostrum tempora ipsam!”
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}

  <Contact />

  <footer className="site-footer">
    <Footer /> 
  </footer>
</div>

  );
}

export default App;



