"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants, useInView } from 'framer-motion';
import { Github, ExternalLink, Shield, Rocket, Lock, Layers, X, Cpu, Globe, Database, Cog } from 'lucide-react';
import styles from './Works.module.css';

interface TechStack {
  category: string;
  items: string[];
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  securityPills: string[];
  links: {
    github?: string;
    stack?: string;
  };
  icon: React.ReactNode;
  techStack: TechStack[];
}

const projects: Project[] = [
  {
    title: "AegisMesh",
    subtitle: "Identity Infrastructure & IAM",
    description: "Identity & Access Control System that handles auth, authorization, and access control in one place. Users get exactly the access they need. Real-time monitoring and audit logs included.",
    features: [
      "Token-Based Auth", "TOTP MFA", "Federated Identity", "Enterprise RBAC",
      "Policy Engine", "Policy Simulator", "Audit Streaming", "Bulk Provisioning",
      "Role Templates", "Scoped API Keys", "Org-Level Governance", "Compliance Export",
      "Magic Links", "IP Allow/Deny"
    ],
    securityPills: ["CI pipeline", "CodeQL Advance", "Dependabot"],
    links: { github: "https://github.com/Nirjar26/AegisMesh-IAM", stack: "#" },
    icon: <Shield size={24} />,
    techStack: [
      {
        category: "Frontend",
        items: ["React 19", "Vite", "Tailwind CSS 4", "React Router DOM v7", "TanStack React Query", "React Hook Form", "Zod", "Axios", "Recharts", "Lucide Icons", "react-hot-toast"]
      },
      {
        category: "Backend",
        items: ["Node.js Runtime", "Express.js", "JWT Auth", "Passport.js OAuth", "TOTP / otplib", "Prisma ORM", "bcryptjs", "Helmet.js", "Joi Validation", "Winston Logging", "express-rate-limit", "Multer", "node-cron", "UUID", "CORS"]
      },
      {
        category: "Database",
        items: ["PostgreSQL", "Prisma Schema", "Indexed Access Structures", "Transaction-Safe Auth Workflows"]
      }
    ]
  },
  {
    title: "DeployLens",
    subtitle: "CI/CD Deployment Insights",
    description: "DeployLens gives a clear view of your deployments by combining GitHub Actions and AWS CodeDeploy. It tracks changes, shows failures instantly, and allows quick rollback with full history.",
    features: [
      "SHA Join Engine", "Real-time WebSockets", "CodeDeploy SDK", "RBAC Scoped Queries",
      "Webhook HMAC", "SNS EventBridge", "Aggregator Engine", "Audit Logging",
      "Environment Mapping", "Rollback Engine", "Socket.io Rooms", "Lifecycle Events"
    ],
    securityPills: ["CodeQL", "Dependabot"],
    links: { github: "https://github.com/Nirjar26/DeployLens", stack: "#" },
    icon: <Rocket size={24} />,
    techStack: [
      {
        category: "Frontend",
        items: ["React 19", "TypeScript", "Zustand", "Axios", "socket.io-client", "CSS Custom Properties", "React Router v6"]
      },
      {
        category: "Backend",
        items: ["Node.js 20", "Express", "PostgreSQL 15", "Prisma ORM", "JWT + bcrypt", "AES-256-GCM", "AWS SDK v3", "Socket.io", "node-cron", "Zod"]
      },
      {
        category: "Integrations",
        items: ["GitHub OAuth + REST API", "AWS CodeDeploy", "AWS SNS + EventBridge", "HMAC-SHA256 Verification"]
      },
      {
        category: "Infrastructure",
        items: ["Self-hosted deployment", "PostgreSQL (RDS/Supabase compatible)"]
      }
    ]
  },
  {
    title: "VaultLock",
    subtitle: "Zero-Knowledge Password Manager",
    description: "Secure Password Manager. VaultLock stores passwords locally. Zero-knowledge by design — your data and keys never leave your device.",
    features: [
      "Zero Knowledge", "AES Encryption", "Argon2 Hashing", "Offline Storage",
      "Secure Clipboard", "Password Generator", "Asynchronous Logo Fetching",
      "Magic Bite Validation", "Smart Organization", "Instant Search", "Download for Windows"
    ],
    securityPills: ["CodeQL", "Dependabot", "Gitleaks"],
    links: { github: "https://github.com/Nirjar26/VaultLock-Password-Manager", stack: "#" },
    icon: <Lock size={24} />,
    techStack: [
      {
        category: "Frontend",
        items: ["PyQt6", "QML", "Fluent UI", "GPU-Accelerated Rendering"]
      },
      {
        category: "Backend",
        items: ["Python 3.10+", "AES (Fernet) Pipeline", "Argon2id KDF", "Secure Clipboard Lifecycle", "Password Generator Engine", "Zero-Knowledge Model", "Offline-First Architecture"]
      },
      {
        category: "Database",
        items: ["Encrypted SQLite Local Vault", "Structured Credential Indexing", "Secure Asset Caching"]
      }
    ]
  },
  {
    title: "FlowStone",
    subtitle: "Lifecycle Task Management",
    description: "FlowStone unifies task management, approvals, and resource tracking into a single real-time workspace with structured workflows and actionable insights.",
    features: [
      "Auth + RBAC", "Real-time Dashboard", "Task Engine", "Approval Flow",
      "Resource Tracking", "Analytics + CSV", "Notifications", "Admin Console",
      "Profile & Settings"
    ],
    securityPills: [],
    links: { github: "https://github.com/Nirjar26/FlowStone", stack: "#" },
    icon: <Layers size={24} />,
    techStack: [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons", "React Hook Form", "TanStack Query"]
      },
      {
        category: "Backend",
        items: ["PHP 8.2", "Custom REST API", "JWT Auth", "Role-Based Access Control (RBAC)"]
      },
      {
        category: "Database",
        items: ["MySQL 8.0", "Relational Schema Design", "High-Performance Query Optimization"]
      }
    ]
  }
];

const Works = () => {
  const [activeStackProject, setActiveStackProject] = useState<Project | null>(null);
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, amount: 0.05, margin: "100px 0px" });

  useEffect(() => {
    if (activeStackProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeStackProject]);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend': return <Globe size={18} />;
      case 'backend': return <Cpu size={18} />;
      case 'database': return <Database size={18} />;
      default: return <Cog size={18} />;
    }
  };

  return (
    <section id="works" className={styles.worksSection}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.headerLabel}>/ WORKS</span>
          <div className={styles.headerLine} />
        </motion.div>

        <motion.div
          ref={gridRef}
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className={styles.projectItem}
              variants={itemVariants}
            >
              <div className={styles.itemLinks}>
                <div className={styles.projectIconBox}>
                  {project.icon}
                </div>
              </div>

              <div className={styles.itemContent}>
                <div className={styles.titleGroup}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <h4 className={styles.projectSubtitle}>{project.subtitle}</h4>
                </div>

                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.actionsWrapper}>
                  <div className={styles.iconLinks}>
                    <a href={project.links.github} className={styles.linkAction} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                    <button
                      onClick={() => setActiveStackProject(project)}
                      className={styles.linkAction}
                    >
                      <ExternalLink size={16} />
                      <span>Stack</span>
                    </button>
                  </div>

                  <div className={styles.securityPills}>
                    {project.securityPills.map((pill) => (
                      <div key={pill} className={styles.securityPill}>
                        <span>{pill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeStackProject && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveStackProject(null)}
          >
            <motion.div
              className={styles.modalContent}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.modalClose}
                onClick={() => setActiveStackProject(null)}
              >
                <X size={20} />
              </button>

              <div className={styles.modalHeader}>
                <div className={styles.modalProjectIcon}>
                  {activeStackProject.icon}
                </div>
                <div>
                  <h3 className={styles.modalTitle}>{activeStackProject.title}</h3>
                  <p className={styles.modalSubtitle}>Full Tech Stack Architecture</p>
                </div>
              </div>

              <div className={styles.stackGrid}>
                {activeStackProject.techStack.map((category) => (
                  <div key={category.category} className={styles.stackCategory}>
                    <div className={styles.categoryHeader}>
                      {getCategoryIcon(category.category)}
                      <h4>{category.category}</h4>
                    </div>
                    <div className={styles.stackItems}>
                      {category.items.map((item) => (
                        <span key={item} className={styles.stackItem}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;
