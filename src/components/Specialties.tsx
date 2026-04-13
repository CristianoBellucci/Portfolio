import { motion } from 'framer-motion'
import { Globe, Database, Bot, BrainCircuit } from 'lucide-react'

interface Specialty {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  tags: string[]
  colSpan: string
  accentColor: string
  glowColor: string
  borderHover: string
}

const specialties: Specialty[] = [
  {
    id: 'websites',
    title: 'Modern Websites',
    description:
      'Immersive, responsive, and performance-optimized web applications with premium aesthetics. I craft digital experiences that leave a lasting impression—from landing pages to full-stack platforms.',
    icon: <Globe className="w-7 h-7" />,
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    colSpan: 'md:col-span-2',
    accentColor: '#6366f1',
    glowColor: 'rgba(99,102,241,0.12)',
    borderHover: 'rgba(99,102,241,0.4)',
  },
  {
    id: 'pipelines',
    title: 'Data Pipelines',
    description:
      'Robust, scalable ETL systems for handling large volumes of complex data seamlessly. From ingestion to transformation to delivery.',
    icon: <Database className="w-7 h-7" />,
    tags: ['Python', 'SQL', 'Airflow', 'Cloud', 'Spark'],
    colSpan: 'md:col-span-1',
    accentColor: '#14b8a6',
    glowColor: 'rgba(20,184,166,0.12)',
    borderHover: 'rgba(20,184,166,0.4)',
  },
  {
    id: 'chatbots',
    title: 'Smart Chatbots',
    description:
      'Conversational interfaces powered by advanced NLP, seamlessly integrated into any platform.  From customer support bots to fully autonomous agents.',
    icon: <Bot className="w-7 h-7" />,
    tags: ['OpenAI API', 'LangChain', 'LangGraph', 'Dialogflow'],
    colSpan: 'md:col-span-1',
    accentColor: '#818cf8',
    glowColor: 'rgba(129,140,248,0.12)',
    borderHover: 'rgba(129,140,248,0.4)',
  },
  {
    id: 'rag',
    title: 'RAG Solutions',
    description:
      'Retrieval-Augmented Generation systems that connect LLMs to your private knowledge base, enabling accurate, grounded, and up-to-date AI responses at any scale.',
    icon: <BrainCircuit className="w-7 h-7" />,
    tags: ['Vector DBs', 'Embeddings', 'LLMs', 'Pinecone', 'Chroma'],
    colSpan: 'md:col-span-2',
    accentColor: '#d946ef',
    glowColor: 'rgba(217,70,239,0.12)',
    borderHover: 'rgba(217,70,239,0.4)',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export const Specialties = () => {
  return (
    <section id="specialties" className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #1e1b4b 0%, #17153a 100%)' }}>
      {/* Subtle top separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      {/* Background accent */}
      <div className="glow-bg-indigo w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label mb-4 block">
            <span className="w-6 h-px bg-indigo-400" />
            What I Do
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
            Areas of{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #818cf8, #6366f1)' }}
            >
              Expertise
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Bridging the gap between beautiful user interfaces and complex,
            data-driven architectures — one solution at a time.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {specialties.map((item) => (
            <motion.div
              key={item.id}
              id={`specialty-${item.id}`}
              variants={cardVariants}
              className={`group relative rounded-3xl p-8 cursor-default transition-all duration-500 ${item.colSpan}`}
              style={{
                background: 'rgba(13, 17, 30, 0.7)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(51, 65, 85, 0.5)',
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = item.borderHover
                e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${item.glowColor}`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(51, 65, 85, 0.5)'
                e.currentTarget.style.boxShadow = ''
              }}
            >
              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${item.glowColor} 0%, transparent 60%)` }}
              />

              {/* Number accent */}
              <div
                className="absolute top-6 right-7 font-mono text-xs font-bold opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ color: item.accentColor }}
              >
                0{specialties.indexOf(item) + 1}
              </div>

              <div className="relative z-10 flex flex-col h-full space-y-5">
                {/* Icon */}
                <div
                  className="p-3 rounded-2xl w-fit transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${item.glowColor}`,
                    border: `1px solid ${item.borderHover}`,
                    color: item.accentColor,
                  }}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed flex-grow text-sm md:text-base">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
