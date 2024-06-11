import { useState } from 'react';
import { motion } from 'framer-motion';
import './header.scss'
const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const menuItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about', subItems: ['Band', 'Tyler', 'Josh'] },
    { label: 'Services', link: '#services' },
    { label: 'Contact', link: '#contact' },
  ];

  return (
    <header>
      <nav className="navbar">
        <div className="menu">
          {menuItems.map((item, index) => (
            <motion.div key={index} className="menu-item">
              {item.subItems ? (
                <>
                  <span onClick={handleSubMenuToggle}>{item.label}</span>
                  {isSubMenuOpen && (
                    <motion.ul className="sub-menu">
                      {item.subItems.map((subItem, subIndex) => (
                        <motion.li key={subIndex} className="sub-menu-item">
                          <a href={`#${subItem}`}>{subItem}</a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </>
              ) : (
                <a href={item.link}>{item.label}</a>
              )}
            </motion.div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
