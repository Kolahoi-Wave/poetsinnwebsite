import React, { useEffect, useState } from 'react';

// Menu data
const menuData = [
  { label: 'Home', link: '#home' },
  { label: 'Rooms', link: '#rooms' },
  { label: 'Amenities', link: '#amenities' },
  { label: 'About', link: '#about' },
  { label: 'Contact', link: '#contact' }
];

// Component for rendering navigation menu
function NavigationMenu({ menuData, activeIndex, isMobile }) {
  return (
    <ul className={`site-menu js-clone-nav ${isMobile ? 'd-block' : 'd-none d-lg-block'}`}>
      {menuData.map((item, index) => (
        <li key={index} className={index === activeIndex ? 'active' : ''}>
          <a href={item.link}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992); // Corrected the useState declaration

  // Handle scroll to set active menu item
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

  // Toggle mobile menu
  const toggleMobileMenu = (event) => {
    event.preventDefault();  // Prevent any default behavior
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check window width and update isMobile state
  const handleResize = () => {
    setIsMobile(window.innerWidth < 992);
    if (window.innerWidth >= 992) {
      setIsMobileMenuOpen(false); // Close mobile menu if switching to desktop
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize); // Add resize listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Add empty dependency array to run once on mount

  return (
    <div>
      {/* Mobile menu */}
      <div className={`site-mobile-menu ${isMobileMenuOpen ? 'd-block' : 'd-none'}`}>
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3" onClick={toggleMobileMenu}>
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body">
          <NavigationMenu menuData={menuData} activeIndex={activeIndex} isMobile={true} />
        </div>
      </div>

      {/* Desktop menu */}
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
                      {/* Show desktop menu when mobile menu is not open */}
                      {!isMobileMenuOpen && (
                        <NavigationMenu menuData={menuData} activeIndex={activeIndex} isMobile={false} />
                      )}
                      <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                        <div className="site-menu-toggle js-menu-toggle" onClick={toggleMobileMenu}>
                          <span className="icon-menu h3" />
                        </div>
                      </div>
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
