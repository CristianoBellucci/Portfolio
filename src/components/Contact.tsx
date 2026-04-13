import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react' // Removed Twitter

const socialLinks = [
  {
    id: 'contact-github',
    icon: <Github className="w-5 h-5" />,
    href: 'https://github.com/CristianoBellucci',
    label: 'GitHub',
    color: '#6e7681',
    hoverColor: '#fff',
  },
  {
    id: 'contact-linkedin',
    icon: <Linkedin className="w-5 h-5" />,
    href: 'https://www.linkedin.com/in/cristiano-bellucci/',
    label: 'LinkedIn',
    color: '#6e7681',
    hoverColor: '#0a66c2',
  },
]

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #070b16 0%, #050810 100%)' }}
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.18)_0%,transparent_65%)] pointer-events-none" />
      <div className="glow-bg-teal w-[400px] h-[400px] top-1/2 right-[-5%] -translate-y-1/2 opacity-15" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Label */}
          <span className="section-label justify-center mb-6 block">
            <span className="w-6 h-px bg-indigo-400" />
            Let's Connect
            <span className="w-6 h-px bg-indigo-400" />
          </span>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6 tracking-tight">
            Let's build something{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #818cf8 0%, #6366f1 50%, #4f46e5 100%)',
              }}
            >
              extraordinary.
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
            Whether you need a complex RAG architecture, a sleek web interface, or a
            robust data pipeline — I'm always open to new collaborations.
          </p>

          {/* Email CTA */}
          <motion.a
            id="contact-email-cta"
            href="mailto:cristiano.bellucci97@gmail.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-bold text-lg mb-12 transition-shadow duration-300 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
              boxShadow: '0 0 0 1px rgba(99,102,241,0.5)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(99,102,241,0.6), 0 0 0 1px rgba(99,102,241,0.8)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 1px rgba(99,102,241,0.5)'
            }}
          >
            {/* Shimmer */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]" />
            <Mail className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Send me an email</span>
            <Send className="w-4 h-4 relative z-10" />
          </motion.a>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-slate-800" />
            <span className="text-xs font-mono text-slate-600 tracking-widest uppercase">or find me elsewhere</span>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-16">
            {socialLinks.map((social) => (
              <motion.a
                key={social.id}
                id={social.id}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300"
                style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(51, 65, 85, 0.5)',
                  color: social.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = social.hoverColor
                  e.currentTarget.style.borderColor = social.hoverColor + '55'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = social.color
                  e.currentTarget.style.borderColor = 'rgba(51, 65, 85, 0.5)'
                  e.currentTarget.style.background = 'rgba(15, 23, 42, 0.6)'
                }}
              >
                {social.icon}
                <span className="hidden sm:inline">{social.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card text-sm text-slate-400">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            Available for freelance &amp; consulting work
          </div>
        </motion.div>
      </div>
    </section>
  )
}