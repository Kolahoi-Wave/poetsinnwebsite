import React, { useEffect, useState } from 'react';

const menuData = [
  { label: 'Home', link: '#home' },
  { label: 'Rooms', link: '#rooms' },
  { label: 'Amenities', link: '#amenities' },
  { label: 'About', link: '#about' },
  { label: 'Contact', link: '#contact' }
];

function NavigationMenu() {
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ul className="site-menu js-clone-nav d-none d-lg-block">
      {menuData.map((item, index) => (
        <li key={index} className={index === activeIndex ? 'active' : ''}>
          <a href={item.link}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
}

export default NavigationMenu;
