import { useState } from 'react'
import type { ReactNode } from 'react'
import type { NavbarVariant } from '../../types/ui'
import { cn } from '../../lib/cn'

// ---------------------------------------------------------------------------
// スタイルマップ（variant ごとの配色）
// ---------------------------------------------------------------------------

interface NavbarStyleSet {
  bg: string
  logoText: string
  link: string
  linkHover: string
  mobileBorder: string
}

const VARIANT_STYLES: Record<NavbarVariant, NavbarStyleSet> = {
  light: {
    bg: 'bg-white border-b border-slate-200',
    logoText: 'text-slate-800',
    link: 'text-slate-600',
    linkHover: 'hover:text-indigo-600',
    mobileBorder: 'border-slate-200',
  },
  dark: {
    bg: 'bg-slate-900 border-b border-slate-700',
    logoText: 'text-white',
    link: 'text-slate-300',
    linkHover: 'hover:text-white',
    mobileBorder: 'border-slate-700',
  },
}

// ---------------------------------------------------------------------------
// 型定義
// ---------------------------------------------------------------------------

export interface NavbarLink {
  label: string
  href: string
}

export interface NavbarProps {
  /** ロゴエリアに表示する要素（テキスト or Link 等） */
  logo: ReactNode
  /** ナビゲーションリンクの配列 */
  links: NavbarLink[]
  variant?: NavbarVariant
}

// ---------------------------------------------------------------------------
// コンポーネント
// ---------------------------------------------------------------------------

export function Navbar({
  logo,
  links,
  variant = 'light',
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const s = VARIANT_STYLES[variant]

  const linkClasses = cn('text-sm font-medium transition-colors', s.link, s.linkHover)

  return (
    <nav
      className={cn('sticky top-0 z-40', s.bg)}
      aria-label="メインナビゲーション"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between md:h-16">
          <div className={s.logoText}>{logo}</div>

          <ul className="hidden md:flex md:items-center md:gap-6">
            {links.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClasses}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={cn('rounded-lg p-2 transition-colors md:hidden', linkClasses)}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="メニュー"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <ul
            className={cn(
              'flex flex-col gap-0 border-t py-4 md:hidden',
              s.mobileBorder
            )}
          >
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn('block py-2', linkClasses)}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
