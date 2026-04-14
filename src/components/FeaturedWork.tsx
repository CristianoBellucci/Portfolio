import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Layers } from 'lucide-react'
import featuredImg from '../assets/featured-preview.png'
import { useTranslation } from 'react-i18next'

const projectStyles: Record<string, { accentColor: string; href: string }> = {
  'rag-platform': { accentColor: '#d946ef', href: '#contact' },
  'web-design': { accentColor: '#6366f1', href: '#contact' },
  'data-pipeline': { accentColor: '#14b8a6', href: '#contact' },
  'ai-chatbots': { accentColor: '#f43f5e', href: '#contact' },
}

export const FeaturedWork = () => {
  const { t } = useTranslation()
  const projects = t('featured.projects', { returnObjects: true }) as Array<{
    id: string
    label: string
    title: string
    description: string
    tags: string[]
  }>

  return (
    <section
      id="featured"
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #17153a 0%, #070b16 100%)' }}
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

      {/* Glow */}
      <div className="glow-bg-teal w-[600px] h-[400px] bottom-0 left-[-10%] opacity-20" />
      <div className="glow-bg-fuchsia w-[400px] h-[400px] top-[20%] right-[-5%] opacity-15" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label mb-4 block">
            <Layers className="w-3.5 h-3.5" />
            {t('featured.label')}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            {t('featured.title_prefix')}{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #5eead4, #14b8a6)' }}
            >
              {t('featured.title_highlight')}
            </span>
          </h2>
        </motion.div>

        {/* Featured hero card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="group relative rounded-3xl overflow-hidden mb-6 cursor-default"
          style={{
            background: 'rgba(13, 17, 30, 0.8)',
            border: '1px solid rgba(51, 65, 85, 0.5)',
          }}
          whileHover={{ borderColor: 'rgba(20,184,166,0.4)' } as never}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image panel */}
            <div className="relative overflow-hidden min-h-[280px] md:min-h-[420px]">
              <img
                src={featuredImg}
                alt="Featured project — RAG platform preview"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Fallback gradient placeholder
                  e.currentTarget.style.display = 'none'
                  const parent = e.currentTarget.parentElement
                  if (parent) {
                    parent.style.background = 'linear-gradient(135deg, #0d1117 0%, #161d2e 50%, #0a0e1a 100%)'
                    const placeholder = document.createElement('div')
                    placeholder.className = 'absolute inset-0 flex items-center justify-center'
                    placeholder.innerHTML = `
                      <div style="text-align:center; padding:40px;">
                        <div style="width:80px;height:80px;margin:0 auto 16px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#14b8a6);display:flex;align-items:center;justify-content:center;font-size:32px;">🤖</div>
                        <div style="color:#475569;font-size:14px;font-family:monospace;">AI Platform Preview</div>
                      </div>
                    `
                    parent.appendChild(placeholder)
                  }
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0d1117] pointer-events-none hidden md:block" />
            </div>

            {/* Text panel */}
            <div className="flex flex-col justify-center p-10 lg:p-14">
              <div
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full w-fit"
                style={{
                  color: '#d946ef',
                  background: 'rgba(217,70,239,0.1)',
                  border: '1px solid rgba(217,70,239,0.3)',
                }}
              >
                {t('featured.hero_label')}
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                {t('featured.hero_title')}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-base">
                {t('featured.hero_description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {(t('featured.hero_tags', { returnObjects: true }) as string[]).map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
              <a
                id="featured-rag-readmore"
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/link"
              >
                {t('featured.hero_cta')}
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Secondary project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              id={`featured-${project.id}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="group relative rounded-2xl p-7 transition-all duration-500 cursor-default"
              style={{
                background: 'rgba(13, 17, 30, 0.7)',
                border: '1px solid rgba(51, 65, 85, 0.5)',
              }}
              onMouseEnter={(e) => {
                const accent = projectStyles[project.id]?.accentColor || '#6366f1';
                e.currentTarget.style.borderColor = `${accent}88`
                e.currentTarget.style.boxShadow = `0 24px 60px rgba(0,0,0,0.6), 0 0 30px ${accent}22`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(51, 65, 85, 0.5)'
                e.currentTarget.style.boxShadow = ''
              }}
            >
              {/* Accent dot */}
              <div className="w-2 h-2 rounded-full mb-5" style={{ backgroundColor: projectStyles[project.id]?.accentColor || '#6366f1' }} />

              <div
                className="text-xs font-mono font-semibold tracking-widest uppercase mb-3"
                style={{ color: projectStyles[project.id]?.accentColor || '#6366f1' }}
              >
                {project.label}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
              <a
                href={projectStyles[project.id]?.href || '#contact'}
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: projectStyles[project.id]?.accentColor || '#6366f1' }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {t('featured.view_project')}
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: 'rgba(99,102,241,0.07)',
            border: '1px solid rgba(99,102,241,0.2)',
          }}
        >
          <div>
            <p className="section-label mb-2">{t('featured.cta_banner.label')}</p>
            <h4 className="text-2xl font-bold text-white">{t('featured.cta_banner.title')}</h4>
          </div>
          <a
            id="featured-cta-contact"
            href="#contact"
            className="btn-primary whitespace-nowrap flex-shrink-0"
          >
            {t('featured.cta_banner.button')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
