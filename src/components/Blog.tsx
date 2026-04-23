"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './Blog.module.css';

const blogPosts = [
  {
    id: 3,
    tag: "",
    readTime: "",
    badgeTitle: "Git Workflow",
    badgeDesc: "Tracking Changes",
    title: "How GitHub Changed My Workflow",
    description: "I put off GitHub longer than made sense. Learning the commands was fine. What got me was figuring out how much work I'd already lost without knowing it.",
    date: "Apr 2026",
    footer: "3 takeaways",
    gradientClass: styles.gradientGreen,
    articleUrl: "https://blog.nirjar.me/how-github-changed-my-workflow"
  },
  {
    id: 1,
    tag: "",
    readTime: "",
    badgeTitle: "Blind Spots",
    badgeDesc: "CI/CD visibility",
    title: "Building DeployLens Exposed My Deployment Blind Spots",
    description: "I built a CI/CD visibility tool and couldn't answer a basic question: what's actually running in production right now?",
    date: "Apr 2026",
    footer: "3 takeaways",
    gradientClass: styles.gradientBlue,
    articleUrl: "https://blog.nirjar.me/ci-cd-blind-spots"
  },
  {
    id: 2,
    tag: "",
    readTime: "",
    badgeTitle: "Logo Fetching",
    badgeDesc: "Reliable, secure icon delivery",
    title: "How VaultLock Reliably Fetches Brand Logos",
    description: 'Taking messy inputs like "GitHub" or "facebook.com" and resolving them into validated icons server-side — the UI never touches untrusted sources.',
    date: "Apr 2026",
    footer: "4 takeaways",
    gradientClass: styles.gradientViolet,
    articleUrl: "https://blog.nirjar.me/vaultlock-logo-fetching"
  }
];

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.96, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="blog" className={styles.blogSection} data-aos="fade-up">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionHeader} data-aos="fade-up" data-aos-duration="600">Engineering Notes</h2>
          <p className={styles.sectionSubtitle} data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">Articles on what I’ve experienced.</p>
        </div>

        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={styles.blogCard}
              data-aos="fade-up"
              data-aos-delay={(index * 100) + 100}
              data-aos-duration="600"
            >
              <div className={`${styles.cardHeader} ${post.gradientClass}`}>
                <div className={styles.tagGroup}>
                  <span className={styles.tag}>{post.tag}</span>
                  <span className={styles.readTime}>{post.readTime}</span>
                </div>

                <div className={styles.badgeBox}>
                  <div className={styles.badgeTitle}>{post.badgeTitle}</div>
                  <div className={styles.badgeDesc}>{post.badgeDesc}</div>
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardDescription}>{post.description}</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.footerInfo}>
                    <span className={styles.date}>{post.date}</span>
                    <span className={styles.takeaways}>{post.footer}</span>
                  </div>
                  <a
                    className={styles.readButton}
                    href={post.articleUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read article
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
