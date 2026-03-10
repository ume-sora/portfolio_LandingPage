import type { ReactNode } from 'react'
import type { SectionVariant } from '../../types/ui'
import { cn } from '../../lib/cn'

// ---------------------------------------------------------------------------
// スタイルマップ
// ---------------------------------------------------------------------------

const VARIANT_CLASSES: Record<SectionVariant, string> = {
  default: 'bg-white',
  alt: 'bg-slate-50',
  primary: 'bg-indigo-600',
}

// ---------------------------------------------------------------------------
// 型定義
// ---------------------------------------------------------------------------

export interface SectionProps {
  /** セクションの id（アンカー用） */
  id?: string
  children: ReactNode
  /** 背景の種類 */
  variant?: SectionVariant
  className?: string
}

// ---------------------------------------------------------------------------
// コンポーネント
// ---------------------------------------------------------------------------

export function Section({
  id,
  children,
  variant = 'default',
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        VARIANT_CLASSES[variant],
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
