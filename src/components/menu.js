import React from 'react';

const menuData = [
  {
    label: 'Home',
    link: 'index.html',
    isActive: true
  },
  {
    label: 'Rooms',
    link: 'rooms.html',
    children: [
      { label: 'Standard Room', link: 'rooms.html' },
      { label: 'Family Room', link: 'rooms.html' },
      { label: 'Single Room', link: 'rooms.html' },
      {
        label: 'Rooms',
        link: 'rooms.html',
        children: [
          { label: 'America', link: 'rooms.html' },
          { label: 'Europe', link: 'rooms.html' },
          { label: 'Asia', link: 'rooms.html' },
          { label: 'Africa', link: 'rooms.html' }
        ]
      }
    ]
  },
  { label: 'Amenities', link: 'amenities.html' },
  { label: 'About', link: 'about.html' },
  { label: 'Contact', link: 'contact.html' }
];

function renderMenu(menu) {
  return menu.map((item, index) => (
    <li key={index} className={item.isActive ? 'active' : item.children ? 'has-children' : ''}>
      <a href={item.link}>{item.label}</a>
      {item.children && (
        <ul className="dropdown arrow-top">
          {renderMenu(item.children)}
        </ul>
      )}
    </li>
  ));
}

function NavigationMenu() {
  return (
    <ul className="site-menu js-clone-nav d-none d-lg-block">
      {renderMenu(menuData)}
    </ul>
  );
}

export default NavigationMenu;
