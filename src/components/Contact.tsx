"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
  Ghost,
  Github
} from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpqjwgek", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert("Thanks for your message! I'll get back to you soon.");
        form.reset();
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form.");
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
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
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactContainer}>
          <div className={styles.indicator}>
            <motion.span
              className={styles.indicatorText}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 0.5, x: 0 }}
              viewport={{ once: true }}
            >
              / CONTACT
            </motion.span>
            <motion.div
              className={styles.indicatorLine}
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </div>

          <motion.h2
            className={styles.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            Just say hello!
          </motion.h2>

          <motion.p
            className={styles.description}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            Want to know more about me, tell me about your project or just to say hello? Drop me a line and I'll get back as soon as possible.
          </motion.p>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } }
            }}
          >
            <div className={styles.formGrid}>
              <motion.div className={styles.inputGroup} variants={itemVariants}>
                <label className={styles.label}>Your name*</label>
                <input type="text" name="name" className={styles.input} placeholder="Jane Doe" required />
              </motion.div>

              <motion.div className={styles.inputGroup} variants={itemVariants}>
                <label className={styles.label}>Company name</label>
                <input type="text" name="company" className={styles.input} placeholder="Your company (optional)" />
              </motion.div>

              <motion.div className={styles.inputGroup} variants={itemVariants}>
                <label className={styles.label}>Email*</label>
                <input type="email" name="email" className={styles.input} placeholder="you@gmail.com" required />
              </motion.div>

              <motion.div className={styles.inputGroup} variants={itemVariants}>
                <label className={styles.label}>Phone</label>
                <input type="tel" name="phone" className={styles.input} placeholder="Mobile Number" />
              </motion.div>
            </div>

            <motion.div className={styles.inputGroup} variants={itemVariants}>
              <label className={styles.label}>Message*</label>
              <textarea
                className={styles.textarea}
                name="message"
                placeholder="How can I help you?"
                required
              />
            </motion.div>

            <motion.div className={styles.submitContainer} variants={itemVariants}>
              <button type="submit" className={styles.submitBtn}>
                Send Message
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>

      <div className={styles.socialSection}>
        <div className="container">
          <motion.div
            className={styles.socialGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {[
              { icon: "/assets/social%20icons/instagram-svgrepo-com%20(1).svg", name: "Instagram", href: "https://www.instagram.com/nirjar_goswami/" },
              { icon: "/assets/social%20icons/icons8-x.svg", name: "X", href: "https://x.com/nirjxrgoswami" },
              { icon: "/assets/social%20icons/linkedin-svgrepo-com%20(2).svg", name: "LinkedIn", href: "https://www.linkedin.com/in/nirjarbharthi-goswami-b593633a7" },
              { icon: "/assets/social%20icons/snapchat-136-svgrepo-com.svg", name: "Snapchat", href: "https://www.snapchat.com/@nirjxr26" },
              { icon: "/assets/social%20icons/github-svgrepo-com%20(1).svg", name: "GitHub", href: "https://github.com/Nirjar26/" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className={styles.socialItem}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className={`${styles.socialIconImg} ${item.name === 'GitHub' ? styles.githubIcon : ''}`}
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className={styles.contactInfoSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div className={styles.logoColumn} variants={itemVariants}>
              <div className={styles.logo}>
                <div className={styles.logoDot} />
                NG
              </div>
            </motion.div>

            <motion.div className={styles.infoColumn} variants={itemVariants}>
              <span className={styles.infoLabel}>[ Location ]</span>
              <div className={styles.infoValues}>
                <span className={styles.infoValue}>Ahmedabad, Gujarat</span>
                <span className={styles.infoValue}>India</span>
              </div>
            </motion.div>

            <motion.div className={styles.infoColumn} variants={itemVariants}>
              <span className={styles.infoLabel}>[ Phone ]</span>
              <div className={styles.infoValues}>
                <span className={styles.infoValue}>+91 8799142626</span>
              </div>
            </motion.div>

            <motion.div className={styles.infoColumn} variants={itemVariants}>
              <span className={styles.infoLabel}>[ Email ]</span>
              <div className={styles.infoValues}>
                <span className={styles.infoValue}>nirjargoswami2626@gmail.com</span>
                <span className={styles.infoValue}>nirjar@gmail.com</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.copyright}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.85 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            © {new Date().getFullYear()} Nirjar Goswami. All rights reserved.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
