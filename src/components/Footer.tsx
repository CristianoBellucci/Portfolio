import { useTranslation } from 'react-i18next'

const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'work', href: '#specialties' },
  { key: 'services', href: '#featured' },
  { key: 'contact', href: '#contact' },
]

export const Footer = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative border-t py-12"
      style={{
        backgroundColor: '#050810',
        borderColor: 'rgba(51, 65, 85, 0.4)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs text-white"
              style={{ background: 'linear-gradient(135deg, #6366f1, #14b8a6)' }}
            >
              CB
            </div>
            <span 
              className="font-bold text-sm bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #6366f1, #14b8a6)' }}
            >
              Cristiano Bellucci
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs font-mono text-slate-600">
            &copy; {year} Cristiano Bellucci
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="mt-8 pt-8 border-t border-slate-800/50 flex justify-center">
          <p className="text-xs text-slate-700">
            {t('footer.built_with')}
          </p>
        </div>
      </div>
    </footer>
  )
}
