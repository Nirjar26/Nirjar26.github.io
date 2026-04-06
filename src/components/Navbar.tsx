"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '#hero' },
    { name: 'Works', path: '#works' },
    { name: 'About me', path: '#about' },
    { name: 'Journey', path: '#journey' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -20, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const overlayVariants: Variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    },
    exit: { 
      x: "100%", 
      opacity: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const mobileLinkVariants: Variants = {
    hidden: { x: 30, opacity: 0, filter: "blur(5px)" },
    visible: { 
      x: 0, 
      opacity: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.menuOpen : ''}`}
    >
      <motion.div 
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className={styles.logo} variants={itemVariants}>
          <div className={styles.logoDot} />
          NG
        </motion.div>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <motion.li 
              key={item.name}
              variants={itemVariants}
            >
              <a href={item.path} className={styles.navLink}>
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <motion.div variants={itemVariants}>
            <a href="#contact" className={styles.cta}>
              Let's talk
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
            <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
          >
            <ul className={styles.mobileLinks}>
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  variants={mobileLinkVariants}
                >
                  <a
                    href={item.path}
                    className={styles.mobileNavLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={mobileLinkVariants}>
                <a 
                  href="#contact" 
                  className={styles.mobileCTA} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Let's talk
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

