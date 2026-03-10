import { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems: { label: string; href?: string; to?: string }[] = [
  { label: '特徴', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'ご依頼の流れ', href: '#flow' },
  { label: 'お問い合わせ', href: '#cta' },
  { label: 'UI', to: '/showcase' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-slate-800 hover:text-indigo-600 transition-colors"
          >
            Web制作
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="メインナビゲーション">
            {navItems.map((item) =>
              item.to != null ? (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200" aria-label="モバイルメニュー">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.to ?? item.href}>
                  {item.to != null ? (
                    <Link
                      to={item.to}
                      className="block py-2 text-slate-600 hover:text-indigo-600 font-medium transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-2 text-slate-600 hover:text-indigo-600 font-medium transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
