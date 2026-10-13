
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  ExternalLink,
  Terminal,
} from "lucide-react";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "Online Voting System",
    category: "Full-stack Web Application",
    description:
      "A voting platform designed to support public and private polls, prevent duplicate voting, and display live results.",
    stack: ["React", "Spring Boot", "Java", "Database"],
    github: "https://github.com/akthas-ak2307/online-voting-system",
    demo: "",
  },
  {
    number: "02",
    title: "AI-Powered 2D Game",
    category: "Game Development",
    description:
      "A 2D game development project exploring adaptive gameplay, enemy AI, pathfinding, and strategic player interaction.",
    stack: ["Godot", "GDScript", "Game AI"],
    github: "https://github.com/YOUR_USERNAME/YOUR_GAME_REPO",
    demo: "",
  },
  {
    number: "03",
    title: "Machine Learning Experiments",
    category: "Machine Learning",
    description:
      "A collection of experiments exploring classification, model evaluation, and practical machine learning workflows.",
    stack: ["Python", "Scikit-learn", "Jupyter"],
    github: "https://github.com/YOUR_USERNAME/YOUR_ML_REPO",
    demo: "",
  },
];

const skillGroups = [
  {
    title: "Programming",
    skills: ["Java", "Python", "JavaScript", "C++"],
  },
  {
    title: "Web Development",
    skills: ["React", "HTML", "CSS", "Spring Boot"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Linux", "VS Code"],
  },
  {
    title: "Areas of Interest",
    skills: ["Databases", "Machine Learning", "AI", "Problem Solving"],
  },
];

function SectionHeading({ label, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">A.</span>
          <span>akthas<span className="accent">.dev</span></span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a
            className="nav-cta"
            href="https://github.com/akthas-ak2307"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ExternalLink size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              Computer Science Engineering Student
            </div>

            <h1>
              Building ideas
              <br />
              into <span className="gradient-text">digital reality.</span>
            </h1>

            <p className="hero-description">
              Hi, I'm <strong>Akthas Ahmed</strong>. I enjoy building
              software, exploring new technologies, and turning
              ideas into practical projects.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowRight size={17} />
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch <Mail size={17} />
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/akthas-ak2307"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={19} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
              </a>
              <span className="social-divider" />
              <span>Learning. Building. Improving.</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Developer illustration">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-window">
              <div className="window-bar">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span>developer.js</span>
                <Terminal size={15} />
              </div>
              <div className="code-body">
                <div><span className="line-no">01</span> <span className="code-purple">const</span> developer = {"{"}</div>
                <div><span className="line-no">02</span> &nbsp; name: <span className="code-green">"Akthas Ahmed"</span>,</div>
                <div><span className="line-no">03</span> &nbsp; role: <span className="code-green">"CS Student"</span>,</div>
                <div><span className="line-no">04</span> &nbsp; focus: <span className="code-green">"Building"</span>,</div>
                <div><span className="line-no">05</span> &nbsp; curious: <span className="code-orange">true</span>,</div>
                <div><span className="line-no">06</span> &nbsp; improving: <span className="code-orange">true</span></div>
                <div><span className="line-no">07</span> {"}"};</div>
                <div className="code-comment"><span className="line-no">08</span> // Always learning something new.</div>
                <div className="code-cursor"><span className="line-no">09</span> <span>▍</span></div>
              </div>
            </div>
            <div className="floating-chip chip-top">
              <Code2 size={16} /> Clean code
            </div>
            <div className="floating-chip chip-bottom">
              <span className="status-dot" /> Open to opportunities
            </div>
          </div>

          <a className="scroll-indicator" href="#about">
            <ArrowDown size={16} /> Scroll to explore
          </a>
        </section>

        <section className="section-shell section-block" id="about">
          <SectionHeading
            label="01 / ABOUT"
            title="A little about me."
            description="A student, a developer, and a lifelong learner."
          />
          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm a Computer Science Engineering student interested
                in software development, web technologies, databases,
                and machine learning.
              </p>
              <p>
                I learn by building projects, experimenting with tools,
                solving problems, and exploring how things work under
                the hood. My goal is to develop reliable, useful software
                and keep growing as an engineer.
              </p>
              <a className="text-link" href="#contact">
                Let's connect <ArrowRight size={16} />
              </a>
            </div>
            <div className="about-card">
              <div className="about-card-icon"><Code2 size={23} /></div>
              <h3>Curiosity-driven development</h3>
              <p>
                I believe every project is an opportunity to learn
                something new, improve my skills, and create something
                meaningful.
              </p>
              <div className="mini-tags">
                <span>Problem solving</span>
                <span>Continuous learning</span>
                <span>Building projects</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell section-block" id="skills">
          <SectionHeading
            label="02 / TOOLKIT"
            title="Technologies I work with."
            description="Tools and concepts I'm learning and using in my projects."
          />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-block" id="projects">
          <SectionHeading
            label="03 / SELECTED WORK"
            title="Projects I've explored."
            description="A selection of projects that reflect my interests and learning."
          />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <Code2 size={22} />
                </div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={17} /> Source code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="projects-note">
            More projects and experiments will be added as I build them.
          </p>
        </section>

        <section className="section-shell section-block contact-section" id="contact">
          <div className="contact-card">
            <span className="eyebrow">04 / CONTACT</span>
            <h2>Have an idea? Let's talk.</h2>
            <p>
              Interested in collaborating, discussing projects, or
              sharing opportunities? I'd be happy to connect.
            </p>
            <a className="button button-primary" href="mailto:YOUR_EMAIL@example.com">
              <Mail size={17} /> Say hello <ArrowRight size={17} />
            </a>
            <div className="contact-socials">
              <a
                href="https://github.com/akthas-ak2307"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-shell">
        <a className="brand" href="#home">
          <span className="brand-mark">A.</span>
          <span>akthas<span className="accent">.dev</span></span>
        </a>
        <span>Designed and built with React.</span>
        <span>© {new Date().getFullYear()} Akthas Ahmed</span>
      </footer>
    </>
  );
}

export default App;
