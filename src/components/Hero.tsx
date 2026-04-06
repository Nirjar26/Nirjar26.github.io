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
      y: 40,
      opacity: 0,
      filter: "blur(6px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const infoVariants: Variants = {
    hidden: { y: 20, opacity: 0, filter: "blur(4px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2
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
