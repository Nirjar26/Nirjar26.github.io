"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './Journey.module.css';

interface JourneyItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  link?: string;
}

const educationItems: JourneyItem[] = [
  {
    year: "2023 — 2026",
    title: "Bachelor of Computer Applications",
    subtitle: "Charotar Science and Technology University (CHARUSAT)",
    description: "Developing a strong foundation in programming, databases and networking, applying concepts through practical projects and real-world problem solving.",
    link: "https://www.charusat.ac.in/"
  },
  {
    year: "2009 — 2023",
    title: "Academic Foundation",
    subtitle: "Shree Muktajivan Vidhyalay",
    description: "Built core academic fundamentals, discipline and analytical thinking skills.",
    link: "https://muktajivanschool.com/"
  }
];

const experienceItems: JourneyItem[] = [
  {
    year: "2026 — Present",
    title: "Associate Cloud Engineer",
    subtitle: "Amazon Web Services | Self-Directed",
    description: "Cloud infrastructure lab experience through AWS Skill Builder with EC2 provisioning, IAM access control, VPC networking, S3 storage management, monitoring via CloudWatch, and CI/CD pipelines.",
    link: "https://skillbuilder.aws/"
  }
];

const Journey = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 0.2,
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  return (
    <section id="journey" className={styles.journeySection}>
      <div className="container">
        <motion.div 
          className={styles.journeyContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <div className={styles.sectionHeader}>
            <motion.span
              className={styles.headerText}
              variants={itemVariants}
            >
              / JOURNEY
            </motion.span>
            <motion.div
              className={styles.headerLine}
              variants={lineVariants}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className={styles.timelineGroup}>
            {/* Education Sub-section */}
            <div className={styles.categoryContainer}>
              <motion.span
                className={styles.categoryLabel}
                variants={itemVariants}
              >
                [ Education ]
              </motion.span>
              <div className={styles.timeline}>
                {educationItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className={styles.timelineItem}
                    variants={itemVariants}
                  >
                    <span className={styles.itemDate}>{item.year}</span>
                    <div className={styles.itemMain}>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.itemLink}>
                          <h4 className={styles.itemSubtitle}>{item.subtitle}</h4>
                        </a>
                      ) : (
                        <h4 className={styles.itemSubtitle}>{item.subtitle}</h4>
                      )}
                    </div>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Work Experience Sub-section */}
            <div className={styles.categoryContainer}>
              <motion.span
                className={styles.categoryLabel}
                variants={itemVariants}
              >
                [ Work experience ]
              </motion.span>
              <div className={styles.timeline}>
                {experienceItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className={styles.timelineItem}
                    variants={itemVariants}
                  >
                    <span className={styles.itemDate}>{item.year}</span>
                    <div className={styles.itemMain}>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.itemLink}>
                          <h4 className={styles.itemSubtitle}>{item.subtitle}</h4>
                        </a>
                      ) : (
                        <h4 className={styles.itemSubtitle}>{item.subtitle}</h4>
                      )}
                    </div>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;


