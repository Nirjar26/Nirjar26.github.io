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
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "none",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="journey" className={styles.journeySection}>
      <div className="container">
        <div className={styles.journeyContainer}>
          <div className={styles.sectionHeader}>
            <motion.span
              className={styles.headerText}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              / JOURNEY
            </motion.span>
            <motion.div
              className={styles.headerLine}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { width: 0, opacity: 0 },
                visible: { width: 100, opacity: 0.2, transition: { duration: 1 } }
              }}
            />
          </div>

          <div className={styles.timelineGroup}>
            {/* Education Sub-section */}
            <div className={styles.categoryContainer}>
              <motion.span
                className={styles.categoryLabel}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={itemVariants}
              >
                [ Education ]
              </motion.span>
              <div className={styles.timeline}>
                {educationItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className={styles.timelineItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
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
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={itemVariants}
              >
                [ Work experience ]
              </motion.span>
              <div className={styles.timeline}>
                {experienceItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className={styles.timelineItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
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
        </div>
      </div>
    </section>
  );
};

export default Journey;
