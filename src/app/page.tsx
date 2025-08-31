"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, BarChart3, TrendingUp, MapPin, Calendar, Star, Users, Award, Zap } from 'lucide-react';
import { SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiFastapi, SiNodedotjs, SiGooglecloud, SiDocker, SiPostgresql, SiRedis, SiSupabase, SiMysql, SiVercel, SiPandas, SiNumpy, SiScikitlearn, SiGit, SiGithub, SiTailwindcss, SiAuth0 } from 'react-icons/si';

const Portfolio = () => {
  // SkillProgress type for state
  interface SkillProgress {
    Python: number;
    "React/JS": number;
    PostgreSQL: number;
    FastAPI: number;
    "Machine Learning": number;
    "System Design": number;
  }

  const [skillProgress, setSkillProgress] = useState<SkillProgress>({
    Python: 0,
    "React/JS": 0,
    PostgreSQL: 0,
    FastAPI: 0,
    "Machine Learning": 0,
    "System Design": 0,
  });
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setSkillProgress({
        Python: 90,
        "React/JS": 85,
        PostgreSQL: 80,
        FastAPI: 75,
        "Machine Learning": 70,
        "System Design": 65,
      });
    }, 800);
    return () => clearTimeout(timer);
  }, []);


// Type definitions for props (move outside component for scope)
interface SkillBarProps {
  skill: string;
  percentage: number;
  index: number;
}
interface Metric {
  label: string;
  value: string;
}
interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  metrics: Metric[];
  demoLink?: string | null;
  githubLink?: string | null;
  videoLink?: string | null;
  index: number;
}

// ProjectCard component (move above Portfolio for scope)
const ProjectCard = ({ title, description, tech, metrics, demoLink, githubLink, videoLink, index }: ProjectCardProps) => (
  <div 
    className="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-cyan-400/20 transform hover:-translate-y-2 hover:scale-[1.02]"
    style={{ animationDelay: `${index * 300}ms` }}
  >
    <div className="flex justify-between items-start mb-6">
      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">{title}</h3>
      <div className="flex gap-3">
        {demoLink && (
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-300 hover:scale-110" 
            title="Live Demo"
          >
            <ExternalLink size={20} />
          </a>
        )}
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 text-slate-400 hover:text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-all duration-300 hover:scale-110" 
            title="GitHub"
          >
            <Github size={20} />
          </a>
        )}
        {videoLink && (
          <a 
            href={videoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all duration-300 hover:scale-110" 
            title="YouTube Video"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        )}
      </div>
    </div>
    <p className="text-slate-300 text-sm mb-6 leading-relaxed line-clamp-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {tech.map((t: string, i: number) => (
        <span 
          key={i} 
          className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
        >
          {t}
        </span>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric: Metric, i: number) => (
        <div key={i} className="text-center p-3 bg-slate-900/50 rounded-xl border border-slate-600/30">
          <div className="text-emerald-400 text-xl font-bold mb-1">{metric.value}</div>
          <div className="text-slate-400 text-xs uppercase tracking-wide">{metric.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const SkillBar = ({ skill, percentage, index }: SkillBarProps) => (
  <div className="mb-6 transform transition-all duration-700 ease-out" style={{ animationDelay: `${index * 200}ms` }}>
    <div className="flex justify-between items-center mb-3">
      <span className="text-slate-300 text-sm font-semibold tracking-wide">{skill}</span>
      <span className="text-cyan-400 text-sm font-bold">{percentage}%</span>
    </div>
    <div className="w-full bg-slate-700/50 rounded-full h-3 relative overflow-hidden shadow-inner">
      <div
        className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-3 rounded-full transition-all duration-1000 ease-in-out shadow-lg"
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
    </div>
  </div>
);



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-40 blur-sm"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-30 blur-sm" style={{ animationDelay: '500ms' }}></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-20 blur-sm" style={{ animationDelay: '1000ms' }}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-25 blur-sm" style={{ animationDelay: '1500ms' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-emerald-500/5 animate-pulse"></div>
      </div>

      <div className={`container mx-auto px-6 py-12 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Enhanced Header */}
  <header id="about" className="text-center mb-20">
          <div className="mb-12 flex flex-col items-center">
            <div className="relative mb-8">
              <div className="w-64 h-64 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full p-1 shadow-2xl shadow-cyan-400/30">
                <div className="w-full h-full bg-slate-900 rounded-full overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt="Jeffery Owusu-Agyemang" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class=\"w-full h-full flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-cyan-400 to-emerald-400 bg-clip-text text-transparent\">JO</div>';
                      }
                    }}
                  />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center animate-bounce">
                <Star size={16} className="text-slate-900" />
              </div>
            </div>
            
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
              Jeffery Owusu-Agyemang
            </h1>
            
            <div className="flex flex-col items-center gap-3 mb-6">
              <p className="text-2xl text-slate-300 font-light">Computer Science & Data Analytics</p>
              <div className="flex items-center gap-6 text-cyan-400 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>Grambling State University</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={18} />
                  <span>4.0 GPA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            <a 
              href="https://github.com/Jeffery-byte" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 px-6 py-3 border-2 border-slate-700 rounded-xl hover:bg-slate-800/50 hover:border-cyan-400/50 transition-all duration-300 text-slate-300 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transform hover:-translate-y-1"
            >
              <Github size={22} />
              <span className="font-medium">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/jeffery-owusu-agyemang" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 px-6 py-3 border-2 border-slate-700 rounded-xl hover:bg-slate-800/50 hover:border-blue-400/50 transition-all duration-300 text-slate-300 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/20 transform hover:-translate-y-1"
            >
              <Linkedin size={22} />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a 
              href="mailto:owusuagyemangjeffery18@gmail.com" 
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border-2 border-cyan-400/50 rounded-xl hover:from-cyan-500/30 hover:to-emerald-500/30 transition-all duration-300 text-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-400/30 transform hover:-translate-y-1 font-medium"
            >
              <Mail size={22} />
              <span>Contact</span>
            </a>
          </div>

          {/* Enhanced Personal Statement */}
          <div className="max-w-4xl mx-auto mb-8 flex flex-col items-center justify-center gap-4">
            <div className="flex gap-4">
              <a
                href="/Jeff_Owusu_final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-md hover:shadow-cyan-400/30 hover:scale-105 transition-all duration-300"
              >
                View Resume
              </a>
              <a
                href="/Jeff_Owusu_final.pdf"
                download
                className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-md hover:shadow-emerald-400/30 hover:scale-105 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-400/20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="text-cyan-400" size={28} />
                <span className="text-cyan-400 font-semibold text-lg tracking-wide uppercase">Mission Statement</span>
                <Zap className="text-cyan-400" size={28} />
              </div>
              <p className="text-xl text-white leading-relaxed mb-4 font-light">
                Tech enthusiast with unwavering resilience and creative problem-solving abilities. I thrive in collaborative environments, building innovative applications that bridge hardware and software. My passion spans across AI development, modern web technologies, and creating user-centric products that make a meaningful impact.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 rounded-full">
                <Calendar size={20} className="text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Available for Software Engineering Opportunities</span>
              </div>
            </div>
          </div>
        </header>


        {/* Marquee Animated Frameworks/Tools Section */}
  <section id="skills" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Languages & Frameworks</span>
          </h2>
          <div className="relative w-full overflow-hidden py-6">
            <div className="marquee flex gap-12 items-center w-max">
              {/* Repeat the icons twice for seamless looping */}
              {[...Array(2)].flatMap((_, repeatIdx) => [
                <div key={`python-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiPython size={48} className="text-yellow-400" />
                  <span className="mt-2 text-sm text-slate-300">Python</span>
                </div>,
                <div key={`js-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiJavascript size={48} className="text-yellow-300" />
                  <span className="mt-2 text-sm text-slate-300">JavaScript</span>
                </div>,
                <div key={`ts-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiTypescript size={48} className="text-blue-400" />
                  <span className="mt-2 text-sm text-slate-300">TypeScript</span>
                </div>,
                <div key={`react-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiReact size={48} className="text-cyan-400" />
                  <span className="mt-2 text-sm text-slate-300">React.js</span>
                </div>,
                <div key={`next-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiNextdotjs size={48} className="text-white" />
                  <span className="mt-2 text-sm text-slate-300">Next.js</span>
                </div>,
                <div key={`fastapi-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiFastapi size={48} className="text-green-400" />
                  <span className="mt-2 text-sm text-slate-300">FastAPI</span>
                </div>,
                <div key={`node-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiNodedotjs size={48} className="text-green-600" />
                  <span className="mt-2 text-sm text-slate-300">Node.js</span>
                </div>,
                <div key={`gcloud-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiGooglecloud size={48} className="text-blue-300" />
                  <span className="mt-2 text-sm text-slate-300">Google Cloud</span>
                </div>,
                <div key={`docker-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiDocker size={48} className="text-blue-400" />
                  <span className="mt-2 text-sm text-slate-300">Docker</span>
                </div>,
                <div key={`postgres-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiPostgresql size={48} className="text-blue-500" />
                  <span className="mt-2 text-sm text-slate-300">PostgreSQL</span>
                </div>,
                <div key={`redis-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiRedis size={48} className="text-red-400" />
                  <span className="mt-2 text-sm text-slate-300">Redis</span>
                </div>,
                <div key={`supabase-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiSupabase size={48} className="text-green-400" />
                  <span className="mt-2 text-sm text-slate-300">Supabase</span>
                </div>,
                <div key={`vercel-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiVercel size={48} className="text-white" />
                  <span className="mt-2 text-sm text-slate-300">Vercel</span>
                </div>,
                <div key={`pandas-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiPandas size={48} className="text-yellow-400" />
                  <span className="mt-2 text-sm text-slate-300">Pandas</span>
                </div>,
                <div key={`numpy-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiNumpy size={48} className="text-orange-400" />
                  <span className="mt-2 text-sm text-slate-300">NumPy</span>
                </div>,
                <div key={`scikit-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiScikitlearn size={48} className="text-orange-300" />
                  <span className="mt-2 text-sm text-slate-300">scikit-learn</span>
                </div>,
                <div key={`git-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiGit size={48} className="text-orange-500" />
                  <span className="mt-2 text-sm text-slate-300">Git</span>
                </div>,
                <div key={`github-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiGithub size={48} className="text-white" />
                  <span className="mt-2 text-sm text-slate-300">GitHub</span>
                </div>,
                <div key={`tailwind-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiTailwindcss size={48} className="text-cyan-400" />
                  <span className="mt-2 text-sm text-slate-300">Tailwind CSS</span>
                </div>,
                <div key={`auth0-${repeatIdx}`} className="flex flex-col items-center min-w-[80px]">
                  <SiAuth0 size={48} className="text-orange-400" />
                  <span className="mt-2 text-sm text-slate-300">OAuth2</span>
                </div>
              ])}
            </div>
            <style>{`
              .marquee {
                animation: marquee 30s linear infinite;
              }
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              /* Hide scrollbar for this section */
              .marquee::-webkit-scrollbar, .marquee::-webkit-scrollbar-thumb, .marquee::-webkit-scrollbar-track {
                display: none !important;
                width: 0 !important;
                background: transparent !important;
              }
            `}</style>
          </div>
        </section>

        {/* Enhanced Projects Section */}
  <section id="projects" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <ProjectCard
              title="The Refraction – Healthcare Management App"
              description="The Refraction is a web-based application designed for optometrists and eye care professionals to manage patient eye prescription data efficiently. It enables healthcare providers to store, analyze, and share prescription information with patients while maintaining proper access controls and data security."
              tech={['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AI Integration', 'Mailjet', 'MessageBird']}
              metrics={[
                { label: 'Patients Managed', value: '100+' },
                { label: 'Team Size', value: '5' },
                { label: 'AI Suggestions', value: 'Perplexity' },
                { label: 'Success Rate', value: '100%' }
              ]}
              demoLink="https://prescription-tracker-baningphilip1.replit.app/"
              githubLink="https://github.com/Jeffery-byte/Refraction-Team"
              videoLink="https://www.youtube.com/watch?v=nWxKU05QzFM"
              index={0}
            />
            <ProjectCard
              title="Job Application Tracker"
              description="Job Application Tracker is a full-stack web application designed to help users efficiently manage and monitor their job search process. It features a Supabase backend and a 17-stage pipeline, allowing users to track over 200 job applications in real time. The platform includes a responsive dashboard with animated UI components for an engaging user experience, and a PostgreSQL schema optimized for fast, complex queries. Automated deployment via Vercel and GitHub CI/CD ensures reliability and rapid feature delivery."
              tech={['React', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel', 'CI/CD']}
              metrics={[
                { label: 'Applications Managed', value: '200+' },
                { label: 'Pipeline Stages', value: '17' },
                { label: 'Feature Releases', value: '15+' },
                { label: 'Uptime', value: '99.9%' }
              ]}
              demoLink="https://job-tracker-alpha-woad.vercel.app/"
              githubLink="https://github.com/Jeffery-byte/job-tracker"
              videoLink={null}
              index={1}
            />
            <div className="lg:col-span-2">
              <ProjectCard
                title="AI Logo Generator"
                description="AI Logo Generator is a cloud-based platform that empowers users to generate unique, contextually relevant logos using artificial intelligence. The system leverages Next.js and React for a seamless frontend experience, while FastAPI and Google Cloud Vertex AI power the backend. Users can authenticate securely, customize logo styles, and receive results optimized for their business needs. The platform supports high concurrency, fast response times, and delivers a 95% user satisfaction rate."
                tech={['Next.js', 'React', 'FastAPI', 'Google Cloud Vertex AI', 'Docker', 'Redis']}
                metrics={[
                  { label: 'Concurrent Requests', value: '50+' },
                  { label: 'Logo Styles', value: '8' },
                  { label: 'User Satisfaction', value: '95%' },
                  { label: 'Logo Relevance Increase', value: '40%' }
                ]}
                demoLink={null}
                githubLink="https://github.com/Jeffery-byte/AI-logo-generator"
                videoLink={null}
                index={2}
              />
            </div>
          </div>
        </section>

        {/* Enhanced Experience Timeline */}
  <section id="resume" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/40 backdrop-blur-lg rounded-2xl p-10 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-400/20 relative">
              <div className="absolute left-10 top-10 bottom-10 w-1 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-full"></div>
              <div className="ml-16">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full -ml-20 border-4 border-slate-800 relative z-10 shadow-lg"></div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Software & IT Specialist</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-1">
                      <p className="text-cyan-400 font-semibold text-lg">Reenson Realty</p>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar size={16} />
                        <span className="text-sm">May 2025 - August 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Architected custom property management system serving 15+ active listings</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Reduced manual operational work by 50% through automation scripts</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Implemented secure PostgreSQL database with automated backup procedures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
  <footer id="contact" className="text-center">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg rounded-2xl p-12 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-400/20">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to bring resilience, creativity, and collaborative spirit to innovative software engineering teams. Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 text-white transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400">
                Get In Touch
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <Users size={18} />
                <span className="text-sm">Open to collaborative opportunities</span>
              </div>
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
}
export default Portfolio;