import logo from './logo.svg';
import './App.css';
import Slider from './components/slider';  
import NavigationMenu from './components/menu';
import Rooms from './components/rooms';
import AboutUsSection from './components/about_us';
import Gallery from './components/gallery';
import Amenities from './components/amenities';

function App() {
  return (
    <div className="site-wrap">

  <div className="site-mobile-menu">
    <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close mt-3">
        <span className="icon-close2 js-menu-toggle" />
      </div>
    </div>
    <div className="site-mobile-menu-body" />
  </div>
  <div className="site-navbar-wrap js-site-navbar bg-white">
    <div className="container">
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
                    <a href="#" className="site-menu-toggle js-menu-toggle">
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

  <AboutUsSection />

  <Amenities />
  
  <Gallery />
  <div className="site-section block-15">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto text-center mb-5 section-heading">
          <h2>Upcoming Events</h2>
        </div>
      </div>
      <div className="nonloop-block-15 owl-carousel">
        <div className="media-with-text p-md-5">
          <div className="img-border-sm mb-4">
            <a href="#" className="popup-vimeo image-play">
              <img src="images/img_1.jpg" alt="" className="img-fluid" />
            </a>
          </div>
          <h2 className="heading mb-0">
            <a href="#">Lorem Ipsum Dolor Sit Amet</a>
          </h2>
          <span className="mb-3 d-block post-date">
            Dec 20th, 2018 • By <a href="#">Admin</a>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolores culpa qui aliquam placeat nobis veritatis tempora natus
            rerum obcaecati.
          </p>
        </div>
        <div className="media-with-text p-md-4">
          <div className="img-border-sm mb-4">
            <a href="#" className="popup-vimeo image-play">
              <img src="images/img_2.jpg" alt="" className="img-fluid" />
            </a>
          </div>
          <h2 className="heading mb-0">
            <a href="#">Lorem Ipsum Dolor Sit Amet</a>
          </h2>
          <span className="mb-3 d-block post-date">
            Dec 20th, 2018 • By <a href="#">Admin</a>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolores culpa qui aliquam placeat nobis veritatis tempora natus
            rerum obcaecati.
          </p>
        </div>
        <div className="media-with-text p-md-4">
          <div className="img-border-sm mb-4">
            <a href="#" className="popup-vimeo image-play">
              <img src="images/img_3.jpg" alt="" className="img-fluid" />
            </a>
          </div>
          <h2 className="heading mb-0">
            <a href="#">Lorem Ipsum Dolor Sit Amet</a>
          </h2>
          <span className="mb-3 d-block post-date">
            Dec 20th, 2018 • By <a href="#">Admin</a>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolores culpa qui aliquam placeat nobis veritatis tempora natus
            rerum obcaecati.
          </p>
        </div>
        <div className="media-with-text p-md-4">
          <div className="img-border-sm mb-4">
            <a href="#" className="popup-vimeo image-play">
              <img src="images/img_1.jpg" alt="" className="img-fluid" />
            </a>
          </div>
          <h2 className="heading mb-0">
            <a href="#">Lorem Ipsum Dolor Sit Amet</a>
          </h2>
          <span className="mb-3 d-block post-date">
            Dec 20th, 2018 • By <a href="#">Admin</a>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolores culpa qui aliquam placeat nobis veritatis tempora natus
            rerum obcaecati.
          </p>
        </div>
        <div className="media-with-text p-md-4">
          <div className="img-border-sm mb-4">
            <a href="#" className="popup-vimeo image-play">
              <img src="images/img_2.jpg" alt="" className="img-fluid" />
            </a>
          </div>
          <h2 className="heading mb-0">
            <a href="#">Lorem Ipsum Dolor Sit Amet</a>
          </h2>
          <span className="mb-3 d-block post-date">
            Dec 20th, 2018 • By <a href="#">Admin</a>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolores culpa qui aliquam placeat nobis veritatis tempora natus
            rerum obcaecati.
          </p>
        </div>
        <div className="media-with-text p-md-4">
          <div className="img-border-sm mb-4">
            <a href="#" className="popup-vimeo image-play">
              <img src="images/img_3.jpg" alt="" className="img-fluid" />
            </a>
          </div>
          <h2 className="heading mb-0">
            <a href="#">Lorem Ipsum Dolor Sit Amet</a>
          </h2>
          <span className="mb-3 d-block post-date">
            Dec 20th, 2018 • By <a href="#">Admin</a>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolores culpa qui aliquam placeat nobis veritatis tempora natus
            rerum obcaecati.
          </p>
        </div>
        <div className="media-with-text p-md-4">
          <div className="img-border-sm mb-4">
            <a href="#" className="popup-vimeo image-play">
              <img src="images/img_1.jpg" alt="" className="img-fluid" />
            </a>
          </div>
          <h2 className="heading mb-0">
            <a href="#">Lorem Ipsum Dolor Sit Amet</a>
          </h2>
          <span className="mb-3 d-block post-date">
            Dec 20th, 2018 • By <a href="#">Admin</a>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolores culpa qui aliquam placeat nobis veritatis tempora natus
            rerum obcaecati.
          </p>
        </div>
        <div className="media-with-text p-md-4">
          <div className="img-border-sm mb-4">
            <a href="#" className="popup-vimeo image-play">
              <img src="images/img_2.jpg" alt="" className="img-fluid" />
            </a>
          </div>
          <h2 className="heading mb-0">
            <a href="#">Lorem Ipsum Dolor Sit Amet</a>
          </h2>
          <span className="mb-3 d-block post-date">
            Dec 20th, 2018 • By <a href="#">Admin</a>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolores culpa qui aliquam placeat nobis veritatis tempora natus
            rerum obcaecati.
          </p>
        </div>
        <div className="media-with-text p-md-4">
          <div className="img-border-sm mb-4">
            <a href="#" className="popup-vimeo image-play">
              <img src="images/img_3.jpg" alt="" className="img-fluid" />
            </a>
          </div>
          <h2 className="heading mb-0">
            <a href="#">Lorem Ipsum Dolor Sit Amet</a>
          </h2>
          <span className="mb-3 d-block post-date">
            Dec 20th, 2018 • By <a href="#">Admin</a>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolores culpa qui aliquam placeat nobis veritatis tempora natus
            rerum obcaecati.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section block-14 bg-light">
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
                src="images/person_2.jpg"
                alt="Image"
                className="img-fluid rounded"
              />
            </div>
            <div>
              <h2 className="h5">Jane Mars</h2>
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
  </div>
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3 className="footer-heading mb-4 text-white">About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            quos rem ullam, placeat amet.
          </p>
          <p>
            <a href="#" className="btn btn-primary pill text-white px-4">
              Read More
            </a>
          </p>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <h3 className="footer-heading mb-4 text-white">Quick Menu</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Approach</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3 className="footer-heading mb-4 text-white">Ministries</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Children</a>
                </li>
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">Bible Study</a>
                </li>
                <li>
                  <a href="#">Church</a>
                </li>
                <li>
                  <a href="#">Missionaries</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="col-md-12">
            <h3 className="footer-heading mb-4 text-white">Social Icons</h3>
          </div>
          <div className="col-md-12">
            <p>
              <a href="#" className="pb-2 pr-2 pl-0">
                <span className="icon-facebook" />
              </a>
              <a href="#" className="p-2">
                <span className="icon-twitter" />
              </a>
              <a href="#" className="p-2">
                <span className="icon-instagram" />
              </a>
              <a href="#" className="p-2">
                <span className="icon-vimeo" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="row pt-5 mt-5 text-center">
        <div className="col-md-12">
          <p>
            Copyright © All Rights Reserved | This template is made with{" "}
            <i className="icon-heart text-primary" aria-hidden="true" /> by{" "}
            <a href="https://colorlib.com/" target="_blank">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</div>

  );
}

export default App;



