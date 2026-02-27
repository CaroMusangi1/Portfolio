import React from "react";

// ===== Header / Navbar =====
function Header() {
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-30 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          {/* Fixed href for accessibility */}
          <a href="#about" className="font-bold text-lg">Caro Musangi Kitonga</a>
          <div className="text-xs text-gray-500">Backend & Full-Stack Developer</div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-teal-700">About</a>
          <a href="#skills" className="hover:text-teal-700">Skills</a>
          <a href="#projects" className="hover:text-teal-700">Projects</a>
          <a href="#certifications" className="hover:text-teal-700">Certifications</a>
          <a href="#experience" className="hover:text-teal-700">Experience</a>
          <a href="#contact" className="hover:text-teal-700">Contact</a>
        </nav>
      </div>
    </header>
  );
}

// ===== Hero / About Section =====
function Hero() {
  return (
    <section id="about" className="px-6 pt-16 pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <img
          src="/profile.jpeg" 
          alt="Caro Kitonga"
          className="w-40 h-40 rounded-full object-cover mx-auto md:mx-0 border-4 border-teal-700 shadow-lg"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Hi, I’m <span className="text-teal-700">Caro Kitonga</span>
          </h1>
          <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl">
            Backend & Full-Stack Developer based in Nairobi.
            Specializing in building scalable APIs, intelligent systems, and modern web applications.
            With a background in Mathematics and Computer Science from Jomo Kenyatta University of Agriculture and Technology, I approach problems analytically and design clean, reliable, and data-driven solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-5 py-2 rounded-lg bg-teal-700 text-white font-medium hover:bg-teal-800 transition"
            >
              View Projects
            </a>
            <a
              href="/Caro_Kitonga_CV.docx"
              download
              className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Skills Section =====
function Skills() {
  const skills = {
    Programming: ["Python", "JavaScript", "C"],
    "Front-end": ["HTML5", "CSS3", "React", "Tailwind CSS"],
    "Back-end / Web Dev": ["Flask", "Django", "REST APIs", "Software Development (Agile, TDD)"],
    Tools: ["Git", "Nginx", "Data Analysis", "Computer Graphics Designing"],
    Soft: ["Leadership", "Communication", "Collaboration", "Organization & Planning"],
  };

  return (
    <section id="skills" className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">🛠️ Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, list]) => (
            <div
              key={category}
              className="bg-teal-50 border border-teal-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg mb-4 text-teal-700">{category}</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {list.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-teal-700 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Project Card =====
function ProjectCard({ title, description, tech, github }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-gray-700 text-sm leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-700 text-sm font-medium hover:underline"
        >
          View Code →
        </a>
      </div>
    </div>
  );
}

// ===== Projects Section =====
function Projects() {
  const projectList = [
    {
      title: "Sound Studio Resources",
      description: "Flask-based sound library platform for managing audio resources.",
      tech: ["Flask", "Python", "Web"],
      github: "https://github.com/CaroMusangi1/EDITING-SUITE/tree/master/sound_bank",
    },
    {
      title: "Miniminds Learning Hub",
      description: "Interactive Math & Language learning web app for students.",
      tech: ["Flask", "Python", "Web"],
      github: "https://github.com/CaroMusangi1/MINIMINDS",
    },
  ];

  return (
    <section id="projects" className="px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center">💻 Projects</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projectList.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <p className="mt-6 text-center text-gray-500">
          All other projects are on <a href="https://github.com/CaroMusangi1" className="text-teal-700 underline">GitHub</a>.
        </p>
      </div>
    </section>
  );
}

// ===== Certifications Section =====
function Certifications() {
  const certifications = [
    "Artificial Intelligence Fundamentals – IBM SkillsBuild (Apr–May 2025)",
    "Beyond Success Leadership and Personal Growth Program -Beyond Success (Jan - March 2025)",
    "Software Engineering (Back-end) – ALX / Holberton Inc. (Aug 2023 – Nov 2024)",
    "Computer Packages – Jubilee College (Jun–Aug 2022)",
  ];

  return (
    <section id="certifications" className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">📜 Certifications</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-sm">
          {certifications.map((cert) => (
            <li key={cert} className="bg-teal-50 border border-teal-200 p-4 rounded-xl shadow-md hover:shadow-lg transition">
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ===== Experience Section =====
function Experience() {
  const experiences = [
    {
      role: "Industrial Attachment – ICT Department",
      company: "Zetech University",
      duration: "May 19 – Aug 15",
      tasks: [
        "Troubleshooting hardware & networks, managing ICT labs",
        "Software testing, debugging, documentation",
        "CCTV installation & EPR Management",
      ],
    },
    {
      role: "Virtual Internship – Machine Learning",
      company: "Intern Intelligence Program",
      duration: "Mar 26 – Apr 26",
      tasks: [
        "Data processing pipelines for large datasets",
        "Model fine-tuning and hyperparameter optimization",
        "Developed anomaly detection system",
      ],
    },
  ];

  return (
    <section id="experience" className="px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">🏆 Experience</h2>
        <div className="mt-10 space-y-8">
          {experiences.map((exp) => (
            <div key={exp.role} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg">{exp.role}</h3>
              <p className="text-sm text-gray-500">{exp.company} • {exp.duration}</p>
              <ul className="mt-3 list-disc list-inside text-gray-700 text-sm">
                {exp.tasks.map((task) => <li key={task}>{task}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Contact Section =====
function Contact() {
  return (
    <section id="contact" className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold">📞 Contact</h2>
        <p className="mt-4 text-gray-700">I’m open to backend and full-stack opportunities, collaborations, and innovative projects.</p>
        <div className="mt-6 space-y-2 text-gray-700 text-sm">
          <p>Email: <a href="mailto:kitongacarol8@gmail.com" className="text-teal-700 underline">kitongacarol8@gmail.com</a></p>
          <p>Phone: <a href="tel:+254743356654" className="underline">+254 743 356654</a></p>
          <p>GitHub: <a href="https://github.com/CaroMusangi1" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline">https://github.com/CaroMusangi1</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/caro-kitonga-36bb27280?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline">LinkedIn Profile</a></p>
          <p>Location: Nairobi, Kenya</p>
        </div>
      </div>
    </section>
  );
}

// ===== App Component =====
export default function App() {
  return (
    <div className="min-h-screen text-gray-900 antialiased">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
      <footer className="text-center text-sm text-gray-500 py-8 border-t">
        © {new Date().getFullYear()} Caro Musangi Kitonga.
      </footer>
    </div>
  );
}