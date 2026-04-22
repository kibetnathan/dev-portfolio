import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const skills = ['React', 'PHP(Laravel)', 'Node.js', 'TypeScript', 'PostgreSQL', 'Astro', 'C', 'Supabase', 'Firebase'];

const techStack = [
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'React', slug: 'react' },
  { name: 'Python', slug: 'python' },
  { name: 'Django', slug: 'django' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'Astro', slug: 'astro' },
];

const quickLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'GitHub', href: 'https://github.com/kibetnathan' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nathan-kibet-ab19ba315/' },
];

const spring = { type: 'spring', stiffness: 80, damping: 20 };

const u = ['k','i','b','e','t','n','a','t'].join('');
const d = ['g','m','a','i','l','.','c','o','m'].join('');

export default function Hero() {
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { rootMargin: '-68px 0px 0px 0px', threshold: 0 }
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  const handleEmailClick = () => {
    const fullEmail = `${u}@${d}`;
    navigator.clipboard.writeText(fullEmail);
    setEmailRevealed(true);
    setTimeout(() => setEmailRevealed(false), 5000);
  };

  return (
    <>
    <section data-scroll-section aria-labelledby="hero-heading" className="relative bg-dark overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:py-32">

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(247,249,251,0.07) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--color-primary) 0, var(--color-primary) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

        {/* LEFT: Profile Card */}
        <motion.div
          className="lg:col-span-4 relative"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ...spring, delay: 0 }}
        >
          {/* Top-left corner notch */}
          <div className="absolute top-0 left-0 w-10 h-10 bg-dark rounded-br-3xl z-20" />

          <div className="h-full bg-gradient-to-b from-primary/20 via-primary/5 to-dark/80 border border-primary/20 rounded-3xl p-6 sm:p-8 flex flex-col items-center gap-5 sm:gap-6 relative overflow-hidden">
            {/* Faint NK watermark */}
            <div aria-hidden="true" className="absolute -bottom-4 -right-2 font-display text-[6rem] sm:text-[8rem] leading-none text-primary/5 select-none pointer-events-none">NK</div>

            {/* Circular photo */}
            <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full ring-4 ring-primary/40 ring-offset-4 ring-offset-dark overflow-hidden">
              <img src="/portrait.png" alt="Portrait of Nathan Kibet" className="w-full h-full object-cover object-top" />
            </div>

            {/* Name */}
            <div className="text-center">
              <h1 id="hero-heading" className="font-display text-5xl sm:text-6xl text-light leading-[0.9] uppercase tracking-tight">
                NATHAN<br /><span className="text-primary">KIBET</span>
              </h1>
              <p className="text-[var(--color-secondary)] text-[0.65rem] tracking-[0.3em] uppercase font-bold mt-3">Full Stack Developer</p>
            </div>

            {/* Email reveal */}
            <button
              onClick={handleEmailClick}
              type="button"
              aria-label={emailRevealed ? 'Email revealed and copied to clipboard' : 'Reveal and copy email address'}
              aria-live="polite"
              className="group/email w-full flex items-center justify-center gap-2 px-5 py-3 bg-light/5 border border-light/10 rounded-2xl text-[var(--color-secondary)] hover:text-primary hover:border-primary/30 transition-all text-sm font-mono cursor-pointer"
            >
              <span className={emailRevealed ? 'text-primary font-bold' : ''}>
                {emailRevealed ? `${u}@${d}` : 'na...[at]...dev'}
              </span>
              {emailRevealed ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span className="transition-transform group-hover/email:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-primary/50 group-hover/email:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              )}
            </button>

            {/* CTAs */}
            <div className="flex gap-3 w-full mt-auto">
              <button
                onClick={() => {
                  const email = `${u}@${d}`;
                  navigator.clipboard.writeText(email);
                  const btn = document.getElementById('hero-contact-btn');
                  if (btn) { btn.textContent = 'Copied!'; setTimeout(() => btn.textContent = 'Get in Touch', 2000); }
                }}
                id="hero-contact-btn"
                type="button"
                aria-label="Copy email address to clipboard"
                className="flex-1 text-center bg-primary text-dark text-xs font-black py-3 rounded-xl hover:bg-primary/90 transition-all uppercase tracking-wider shadow-lg shadow-primary/25 cursor-pointer"
              >
                Get in Touch
              </button>
              <a href="/Nathan_Kibet_CV.pdf" download aria-label="Download résumé as PDF" className="flex-1 text-center border border-light/15 text-[var(--color-light)] hover:border-primary/40 hover:text-primary text-xs font-bold py-3 rounded-xl transition-all uppercase tracking-wider">
                Resume ↗
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Headline + Card Grid */}
        <div className="lg:col-span-8 flex flex-col gap-5">

          {/* Headline row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <motion.h2
              data-parallax
              className="font-display text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[9rem] leading-[0.85] text-light uppercase tracking-tighter select-none whitespace-nowrap"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...spring, delay: 0.15 }}
            >
              FULL <span className="text-primary">STACK</span>
            </motion.h2>
            <motion.div
              className="text-left sm:text-right pb-2 space-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...spring, delay: 0.25 }}
            >
              <p className="text-[var(--color-secondary)] text-[0.65rem] uppercase tracking-widest font-bold">Based in</p>
              <p className="text-[var(--color-light)] font-semibold">Nairobi, Kenya 🇰🇪</p>
              <p className="text-[var(--color-secondary)] text-xs">Open for Global Opportunities</p>
            </motion.div>
          </div>

          {/* Card row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">

            {/* Bio + Skills */}
            <motion.div
              className="sm:col-span-2 bg-light/[0.03] border border-light/10 rounded-3xl p-6 flex flex-col justify-between gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...spring, delay: 0.3 }}
            >
              <p className="text-[var(--color-light)] text-base sm:text-lg md:text-xl leading-relaxed">
                Building <span className="text-primary font-semibold">scalable web solutions</span> with clean architecture.
                Strong focus on visual development, documentation, and adapting fast to new tooling.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {skills.map(skill => (
                  <span key={skill} className="bg-light/5 border border-light/10 text-secondary text-xs px-3 py-1.5 rounded-lg font-semibold hover:border-secondary/40 hover:bg-light/[0.07] transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="bg-secondary/10 border border-secondary/20 rounded-3xl p-5 flex flex-col gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...spring, delay: 0.4 }}
            >
              <p className="text-[var(--color-secondary)] text-[0.65rem] uppercase tracking-widest font-bold">Tech Stack</p>
              <div className="grid grid-cols-3 gap-2 content-center flex-1">
                {techStack.map(tool => (
                  <div key={tool.slug} className="flex items-center justify-center p-2 bg-light/5 rounded-xl border border-light/10 hover:border-secondary/40 transition-all aspect-square" title={tool.name}>
                    <img
                      src={`https://cdn.simpleicons.org/${tool.slug}/299f93`}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

      </div>

    </section>

    {/* Sentinel — when this leaves the viewport the quick links snap sticky */}
    <div ref={sentinelRef} aria-hidden="true" />

    {/* Quick Links — sticky below navbar */}
    <motion.div
      className={`sticky top-[68px] z-40 bg-dark transition-colors duration-200 ${isSticky ? 'border-b border-light/[0.12] shadow-lg shadow-black/20' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ...spring, delay: 0.55 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4 sm:gap-8 py-4 border-t border-light/[0.08] overflow-x-auto">
        <span className="hidden sm:inline text-[var(--color-secondary)] text-[0.65rem] uppercase tracking-[0.3em] font-bold whitespace-nowrap">Quick Links</span>
        <nav aria-label="Quick links" className="flex gap-4 sm:gap-6 whitespace-nowrap">
          {quickLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex items-center gap-1.5 text-[var(--color-light)] hover:text-secondary text-sm font-semibold transition-colors"
            >
              {link.label}
              <span aria-hidden="true" className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">↗</span>
            </a>
          ))}
        </nav>
      </div>
    </motion.div>

    </>
  );
}
