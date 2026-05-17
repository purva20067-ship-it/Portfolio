import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Layout, 
  Database, 
  Terminal, 
  Coffee,
  MapPin,
  ChevronRight,
  ArrowRight,
  Twitter
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass m-4 rounded-full px-4' : 'py-8 px-12'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold font-display tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-indigo-500 shadow-lg shadow-indigo-500/20"></div>
          PURVA.U
        </div>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
            </a>
          ))}
          
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#0f172a]">
      {/* Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="absolute inset-0 grid-bg z-0" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-[10px] font-mono tracking-[0.2em] text-cyan-400 uppercase font-bold">Portfolio 2026 // Next-Gen IT</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-8xl font-light text-white leading-[1.1] tracking-tight mb-8"
        >
          Purva <br/>
          <span className="font-bold frosted-text">Upadhyay</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 font-sans leading-relaxed"
        >
          2nd Year IT Student @ GU & Aspiring Developer crafting immersive digital experiences.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-white text-[#0f172a] font-bold shadow-xl shadow-indigo-500/20 hover:scale-105 transition-all">
            View My Work
          </button>
          <button className="w-full sm:w-auto px-10 py-4 rounded-2xl border border-white/10 glass-heavy hover:bg-white/10 transition-all font-bold">
            Let's Talk
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Quizify - AI-Powered Quiz App",
      tags: ["HTML5", "Figma", "CSS", "JS"],
      description: "An interactive quiz website that generates dynamic quizzes based on user-selected topics using AI algorithms. Quizify provides an engaging learning experience with real-time feedback and personalized question sets.",
      img: "Quizify.png",
      size: "large"
    },
    {
      title: "Arrivo - UI Design",
      tags: ["Figma"],
      description: "Interactive and easy to use App Interface Design. Arrivo is a futuristic travel app that provides users with real-time updates, personalized recommendations, and seamless booking experiences for their journeys.",
      img: "home.jpg",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="absolute top-[20%] -right-20 w-64 h-64 border border-white/5 rounded-full pointer-events-none"></div>
      
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500" />
          <span className="text-[10px] font-bold tracking-[0.3em] text-cyan-400 uppercase">Selected Projects</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold font-display mb-8">Works & <span className="frosted-text">Studies</span></h2>
        <p className="text-white/40 max-w-2xl leading-[1.8]">
          A curated collection of digital experiences and algorithmic solutions. Each project represents a bridge between complex logic and human-centric glass aesthetics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8 }}
            className={`glass rounded-[32px] p-8 flex flex-col group overflow-hidden border-white/10 ${
              project.size === 'large' ? 'md:col-span-2' : ''
            } ${project.size === 'tall' ? 'lg:row-span-2' : ''}`}
          >
            <div className="flex gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 font-bold tracking-wider uppercase">
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-3xl font-bold font-display mb-4 group-hover:text-cyan-400 transition-colors duration-500">{project.title}</h3>
            <p className="text-base text-white/40 mb-8 leading-relaxed">{project.description}</p>
            
            <div className="mt-auto relative aspect-[16/10] lg:aspect-auto flex-1 overflow-hidden rounded-2xl border border-white/10">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale-[0.8] brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                {project.title === 'Cypher Security' ? (
                  <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="w-8 h-8 rounded-full glass flex items-center justify-center"><Code2 className="w-4 h-4" /></span>
                    View Source
                  </button>
                ) : (
                  <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="w-8 h-8 rounded-full glass flex items-center justify-center"><ArrowRight className="w-4 h-4" /></span>
                    Case Study
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 p-16 glass-heavy rounded-[32px] text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] mesh-cyan blur-[100px] -z-10 opacity-30 group-hover:opacity-50 transition-opacity" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] mesh-purple blur-[100px] -z-10 opacity-30 group-hover:opacity-50 transition-opacity" />
        
        <h2 className="text-5xl md:text-7xl font-bold font-display mb-8">Ready to <span className="frosted-text">Innovate?</span></h2>
        <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm currently available for full-stack collaborations and high-impact digital ventures.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-10 py-5 rounded-2xl bg-white text-[#0f172a] font-bold hover:scale-105 transition-all shadow-2xl shadow-white/10">
            Start a Conversation
          </button>
          <button className="px-10 py-5 rounded-2xl border border-white/10 glass-heavy hover:bg-white/10 transition-all font-bold">
            View GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const skills = [
    { name: "HTML5", icon: Layout, tags: ["DOM", "SEO"] },
    { name: "CSS3", icon: Cpu, tags: ["FLEXBOX", "GRID"] },
    { name: "JavaScript", icon: Terminal, tags: ["ASYNC", "REDUX"] },
    { name: "Python", icon: Code2, tags: ["DJANGO", "PYTORCH"] },
    { name: "C++", icon: Cpu, tags: ["STL", "DSA"] },
    { name: "Java", icon: Coffee, tags: ["SPRING", "ANDROID"] },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 mesh-cyan blur-[120px] -z-10 opacity-20" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-300 font-bold">University Scholar</span>
          </div>
          <h2 className="text-6xl font-bold font-display mb-8">Purva <span className="frosted-text">Upadhyay.</span></h2>
          <p className="text-xl text-white/40 mb-10 leading-relaxed font-sans">
            IT student at GU driven by the intersection of logic and creativity. Crafting high-performance solutions.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3 px-6 py-3 glass rounded-2xl text-xs font-bold tracking-wider">
              <span className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400"><Terminal className="w-4 h-4" /></span>
              2ND YEAR // IT
            </div>
            <div className="flex items-center gap-3 px-6 py-3 glass rounded-2xl text-xs font-bold tracking-wider">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400"><MapPin className="w-4 h-4" /></span>
              GU // INDIA
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 relative">
          <div className="absolute -inset-4 mesh-purple opacity-20 blur-3xl -z-10"></div>
          {["AI", "Web Design", "HTML", "UI/UX", "CSS", "Python"].map((item, i) => (
            <div key={item} className={`glass p-8 rounded-[32px] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all font-display text-sm font-bold uppercase tracking-[0.2em] ${i % 2 === 1 ? 'translate-y-8' : ''}`}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-32">
        <h3 className="text-4xl font-bold font-display mb-4">Technical <span className="frosted-text">Aura</span></h3>
        <p className="text-white/40 mb-16 max-w-lg leading-relaxed">The core languages and frameworks powering my digital creations.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8 }}
              className="glass p-10 rounded-[40px] group border-white/10"
            >
              <div className="w-16 h-16 glass-heavy rounded-2xl flex items-center justify-center mb-8 border-white/20 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-500">
                <skill.icon className="w-8 h-8 text-white group-hover:text-indigo-300 transition-colors" />
              </div>
              <h4 className="text-2xl font-bold mb-4 font-display">{skill.name}</h4>
              <p className="text-sm text-white/40 mb-10 leading-[1.7]">
                {skill.name === 'HTML5' && "Crafting semantic foundations for the modern web with a focus on structural clarity."}
                {skill.name === 'CSS3' && "Advanced styling utilizing modern layouts, shadows, and glass textures."}
                {skill.name === 'JavaScript' && "Dynamic interactivity and complex state management through ES6+ logic."}
                {skill.name === 'Python' && "Efficient scripting, automation, and backend logic for robust applications."}
                {skill.name === 'C++' && "Low-level optimization and algorithmic precision for performance-critical tasks."}
                {skill.name === 'Java' && "Scalable architectural patterns and enterprise-level object-oriented design."}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/30 uppercase">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl">
        <h3 className="text-4xl font-bold font-display mb-4">Milestone <span className="frosted-text">Journey</span></h3>
        <p className="text-white/40 mb-16 max-w-lg leading-relaxed">Significant stages of my academic and technical evolution.</p>
        
        <div className="relative pl-12 border-l border-white/10 space-y-24">
          <div className="absolute top-0 left-[-2px] w-1 h-full bg-gradient-to-b from-indigo-500/50 to-transparent" />
          
          <div className="relative">
            <div className="absolute left-[-56px] top-0 w-11 h-11 rounded-full border border-white/20 glass flex items-center justify-center group">
              <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-bold tracking-[0.3em] text-indigo-400 uppercase">2024 — 2028</span>
            </div>
            <h4 className="text-3xl font-bold font-display mb-2">B.Tech in Information Technology</h4>
            <div className="text-white/40 mb-8 font-medium">Gandhinagar University // Gandhinagar</div>
            <div className="glass p-10 rounded-[32px] border-white/10">
              <p className="text-white/60 mb-8 leading-relaxed text-lg">
                Currently specializing in high-performance computing, data management, and the software development lifecycle. Focused on creating scalable, future-ready solutions.
              </p>
              <div className="flex gap-4">
                <span className="text-[10px] font-bold tracking-widest px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-full uppercase">GPA: 8.5+</span>
                <span className="text-[10px] font-bold tracking-widest px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded-full uppercase">Core: Engineering</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[-56px] top-0 w-11 h-11 rounded-full border border-white/10 glass flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white/20" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">2024</span>
            </div>
            <h4 className="text-3xl font-bold font-display mb-2">Higher Secondary Studies</h4>
            <div className="text-white/40 mb-8 font-medium">Mount Carmel High School // Science Concentration</div>
            <p className="text-white/50 max-w-2xl leading-relaxed text-lg">
              Established a rigorous mathematical and analytical foundation, providing the essential logic for complex computer science problem-solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] mesh-indigo opacity-20 blur-[130px] -z-10" />
      
      <div className="text-center mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-green-300 font-bold">Open for Collaboration</span>
        </div>
        <h2 className="text-6xl font-bold font-display mb-6">Let's Create <span className="frosted-text">Something.</span></h2>
        <p className="text-white/40 max-w-lg mx-auto leading-relaxed">
          I'm currently looking for new opportunities and creative ventures. Drop me a line if you want to connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-12 rounded-[40px] border-white/10"
        >
          <form className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold font-display uppercase tracking-widest text-white/30 ml-2">Your Identity</label>
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:outline-none focus:border-indigo-500/50 transition-all text-white placeholder:text-white/20 font-medium"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold font-display uppercase tracking-widest text-white/30 ml-2">Digital Address</label>
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:outline-none focus:border-indigo-500/50 transition-all text-white placeholder:text-white/20 font-medium"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold font-display uppercase tracking-widest text-white/30 ml-2">The Mission</label>
              <textarea 
                rows={5}
                placeholder="Brief project overview..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:outline-none focus:border-indigo-500/50 transition-all text-white placeholder:text-white/20 resize-none font-medium"
              />
            </div>
            <button className="w-full py-5 rounded-2xl bg-white text-[#0f172a] font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-white/5">
              Transmit Project
            </button>
          </form>
        </motion.div>

        <div className="space-y-10">
          <div className="glass-heavy p-8 rounded-[32px] border-l-[8px] border-indigo-500/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Transmission Status</span>
            </div>
            <p className="text-lg text-white/80 font-medium leading-relaxed">Available for innovative digital architecture and immersive full-stack ecosystems.</p>
          </div>

          <div className="glass p-10 rounded-[40px] border-white/10">
            <h4 className="text-xl font-bold font-display mb-10 tracking-widest uppercase text-white/40">Network Knots</h4>
            <div className="space-y-8">
              {[
                { name: "Transmission", value: "purva20067@gmail.com", icon: Mail },
                { name: "Professional", value: "purva-upadhyay", icon: Linkedin },
              ].map(item => (
                <div key={item.name} className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 glass-heavy rounded-2xl flex items-center justify-center group-hover:bg-indigo-500 group-hover:border-indigo-400/50 transition-all duration-500">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 uppercase font-bold tracking-[0.2em] mb-1">{item.name}</p>
                    <p className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/8] rounded-[40px] overflow-hidden glass group border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 scale-110 group-hover:scale-100" 
            />
            <div className="absolute inset-x-10 bottom-10">
              <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.3em] mb-2">Stationed in</p>
              <h4 className="text-3xl font-bold font-display">Gandhinagar, IN</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-12 border-t border-white/5 relative bg-[#0f172a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-bold font-display text-white tracking-tighter">PURVA.U</div>
          <div className="flex gap-12">
            <div>
              <div className="text-3xl font-bold text-white tracking-tight">2026</div>
              <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Current Edition</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-6">
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
            {["LinkedIn", "GitHub", "Email"].map(item => (
              <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/20 text-[10px] font-bold tracking-[0.2em]">EST. 2024 — GANDHINAGAR // GU // REMOTE</span>
            <div className="w-12 h-[1px] bg-white/20"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <main className="relative selection:bg-primary selection:text-primary-dark">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
