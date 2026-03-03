/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'motion/react';
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Layout,
  Palette,
  ChevronRight,
  Menu,
  X,
  Send,
  Download
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold text-gradient"
        >
          Abhinand.dev
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-primary hover:text-white transition-all"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white/70 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Web Developer';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column: Text Content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full glass text-xs font-bold tracking-widest uppercase text-primary mb-6"
            >
              Available for freelance work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
            >
              Hi, I'm <span className="text-gradient">Abhinand K K</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-4xl font-display font-medium text-white/80 mb-8 h-12"
            >
              {text}<span className="animate-pulse">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="max-w-2xl mx-auto md:mx-0 text-lg text-white/60 mb-10"
            >
              I build interactive web experiences. Passionate about creating modern,
              responsive web applications that blend beauty with functionality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-12"
            >
              <a href="#projects" className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/25">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-4 rounded-full glass text-white font-bold hover:bg-white/10 transition-all">
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-center md:justify-start gap-6"
            >
              {[
                { icon: <Github />, href: 'https://github.com/abhinand-kk' },
                { icon: <Linkedin />, href: 'https://www.linkedin.com/in/abhinandkk-mca' },
                { icon: <Instagram />, href: 'https://www.instagram.com/abhinandkk_' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass text-white/60 hover:text-primary hover:border-primary transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center items-center order-1 md:order-2"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hero-image relative group"
            >
              <img
                src="images/profile.jpeg"
                alt="Abhinand K K"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
              <img
                src="https://storage.googleapis.com/static.run.app/aistudio/user_uploads/2026-03-01/abhinand_maroon_shirt.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">About <span className="text-gradient">Me</span></h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              I'm a student and a passionate web developer focused on building modern, responsive web applications.
              I enjoy creating interactive user interfaces and learning new technologies.
            </p>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Right now, I am enhancing my frontend development skills and working on projects that challenge
              my creativity and technical abilities. I believe in clean code and thoughtful design.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-primary font-bold mb-1">Name</h4>
                <p className="text-white/80">Abhinand K K</p>
              </div>
              <div>
                <h4 className="text-primary font-bold mb-1">Location</h4>
                <p className="text-white/80">Wayanad, Kerala</p>
              </div>
              <div>
                <h4 className="text-primary font-bold mb-1">Email</h4>
                <p className="text-white/80">kkabhinand05@gmail.com</p>
              </div>
              <div>
                <h4 className="text-primary font-bold mb-1">Freelance</h4>
                <p className="text-white/80">Available</p>
              </div>
            </div>

            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-primary hover:text-white transition-all">
              <Download size={20} /> Download CV
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']
    },
    {
      title: 'Programming',
      skills: ['Python', 'C Programming']
    },
    {
      title: 'Tools',
      skills: ['Git', 'VS Code', 'GitHub']
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <p className="text-white/60">The technologies and tools I use to bring ideas to life.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      name: 'Kerala Sadhya Restaurant',
      desc: 'Interactive food ordering website with cart system.',
      tech: ['HTML', 'CSS', 'JS', 'Bootstrap'],
      github: 'https://github.com/akashanil-dev/sadhya',
      live: 'https://sadhya.akashanil.dev',
      image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&q=80&w=800&h=500'
    },
    {
      name: 'Medical Chatbot',
      desc: 'A text-to-text diagnosis chatbot that interacts with patients and provides possible diagnoses.',
      tech: ['Python', 'NLP', 'Flask'],
      github: '#',
      live: '#',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=500'
    },
    {
      name: 'Personal Portfolio',
      desc: 'Personal developer portfolio with smooth animations and clean UI.',
      tech: ['React', 'Tailwind', 'Motion'],
      github: 'https://github.com/abhinand-kk/Personal-Portfolio',
      live: '#',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-white/60">A selection of my recent work and experiments.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-3xl overflow-hidden border-white/10 hover:border-primary/30 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="p-3 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-primary/80 px-2 py-1 rounded bg-primary/10 border border-primary/20">{t}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                <p className="text-white/60 text-sm line-clamp-2">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      desc: 'Building robust, scalable web applications with modern technologies.',
      icon: <Code2 className="text-primary" size={32} />
    },
    {
      title: 'Frontend Development',
      desc: 'Creating responsive, high-performance user interfaces that look great on any device.',
      icon: <Layout className="text-secondary" size={32} />
    },
    {
      title: 'UI Design',
      desc: 'Designing intuitive and visually appealing user experiences that users love.',
      icon: <Palette className="text-accent" size={32} />
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">My <span className="text-gradient">Services</span></h2>
          <p className="text-white/60">How I can help you build your next big thing.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-3xl hover:bg-white/[0.05] transition-all group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Get In <span className="text-gradient">Touch</span></h2>
            <p className="text-lg text-white/60 mb-10">
              Have a project in mind or just want to say hi? Feel free to reach out.
              I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-white/60">kkabhinand05@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-secondary/10 text-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-white/60">+91 6235407730</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-accent/10 text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-white/60">Wayanad, Kerala, India</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/60 ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-all resize-none"
                />
              </div>
              <button className="w-full py-4 rounded-2xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                <Send size={20} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-display font-bold text-gradient">
          Abhinand.dev
        </div>

        <div className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Abhinand K K. All rights reserved.
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/abhinand-kk" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/abhinandkk-mca" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="https://www.instagram.com/abhinandkk_" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Instagram size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
