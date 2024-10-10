// src/components/Navbar.js
import React, { useEffect, useState } from 'react';

function NavigationMenu({ menuData, activeIndex, isMobile }) {
  return (
    <ul className={`site-menu js-clone-nav ${isMobile ? 'd-block' : 'd-lg-block'}`}>
      {menuData.map((item, index) => (
        <li key={index} className={index === activeIndex ? 'active' : ''}>
          <a href={item.link}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
}

const menuData = [
  { label: 'Home', link: '#home' },
  { label: 'Rooms', link: '#rooms' },
  { label: 'Amenities', link: '#amenities' },
  { label: 'About', link: '#about' },
  { label: 'Contact', link: '#contact' }
];

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = ['home', 'rooms', 'amenities', 'about', 'contact'];
    let currentIndex = 0;

    sections.forEach((section, index) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const { top } = sectionElement.getBoundingClientRect();
        if (top >= 0 && top < window.innerHeight / 2) {
          currentIndex = index;
        }
      }
    });

    setActiveIndex(currentIndex);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Mobile menu */}
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3" onClick={toggleMobileMenu}>
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className={`site-mobile-menu-body ${isMobileMenuOpen ? 'd-block' : 'd-none'}`}>
          <NavigationMenu menuData={menuData} activeIndex={activeIndex} isMobile={true} />
        </div>
      </div>

      {/* Desktop navbar */}
      <div className="site-navbar-wrap js-site-navbar bg-white">
        <div className="container">
          <div className="site-navbar bg-light">
            <div className="py-1">
              <div className="row align-items-center">
                <div className="col-2">
                  <h2 className="mb-0 site-logo">
                    <a href="#home">Poet's Inn</a>
                  </h2>
                </div>
                <div className="col-10">
                  <nav className="site-navigation text-right" role="navigation">
                    <div className="container">
                      <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                        <a href="#home" className="site-menu-toggle js-menu-toggle" onClick={toggleMobileMenu}>
                          <span className="icon-menu h3" />
                        </a>
                      </div>
                      {!isMobileMenuOpen && (
                        <NavigationMenu menuData={menuData} activeIndex={activeIndex} isMobile={false} />
                      )}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
