"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      y: -150,
      opacity: 0,
      rotateX: -20,
      scale: 0.95 
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        mass: 1.3
      }
    }
  };

  const infoVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 16
        // Removed hard delay to sync with headline
      }
    }
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <div className="container" style={{ perspective: 1200 }}>
        <motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className={styles.headline}>
            <div className={styles.row}>
              <motion.span variants={itemVariants}>Architecture.</motion.span>
              <motion.span variants={itemVariants}>Logic.</motion.span>
            </div>
            <div className={styles.row}>
              <motion.span variants={itemVariants}>Security.</motion.span>
              <motion.span variants={itemVariants}>Scale.</motion.span>
            </div>
          </div>
          
          <motion.div 
            className={styles.infoGroup}
            variants={infoVariants}
          >
            <span className={styles.intro}>Hello! I am Nirjar Goswami</span>
            <span className={styles.role}>Associate Cloud Engineer</span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
