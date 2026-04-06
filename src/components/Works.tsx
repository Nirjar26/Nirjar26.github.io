"use client";

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
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

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend': return <Globe size={18} />;
      case 'backend': return <Cpu size={18} />;
      case 'database': return <Database size={18} />;
      default: return <Cog size={18} />;
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

  return (
    <section id="works" className={styles.worksSection}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.headerLabel}>/ WORKS</span>
          <div className={styles.headerLine} />
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className={styles.projectItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
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
        </div>
      </div>

      {activeStackProject && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActiveStackProject(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setActiveStackProject(null)}
            >
              <X size={20} />
            </button>

            <div className={styles.modalHeader}>
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
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;


