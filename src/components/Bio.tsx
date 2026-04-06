"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './Bio.module.css';

const Bio = () => {
  const text = "I’m an Associate Cloud Engineer, learning and building with cloud technologies, exploring how scalable and secure systems are designed—when I’m not at it, I’m gaming or discovering new places to eat.";
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 15, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="bio" className={styles.bioSection}>
      <div className="container">
        <div className={styles.bioContent}>
          <motion.p
            className={styles.bio}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {words.map((word, i) => (
              <React.Fragment key={i}>
                <motion.span
                  variants={wordVariants}
                  style={{ display: "inline-block" }}
                >
                  {word}
                </motion.span>
                {i < words.length - 1 ? ' ' : ''}
              </React.Fragment>
            ))}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
