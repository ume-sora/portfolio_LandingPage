import type { ReactNode } from 'react'
import type { CardVariant, CardSize } from '../../types/ui'
import { cn } from '../../lib/cn'
import { TRANSITION } from './styles'

// ---------------------------------------------------------------------------
// スタイルマップ
// ---------------------------------------------------------------------------

const VARIANT_CLASSES: Record<CardVariant, string> = {
  default: 'bg-slate-50 border border-slate-100 shadow-md hover:shadow-lg',
  elevated: 'bg-white shadow-lg hover:shadow-xl border border-transparent',
  outlined: 'bg-white border-2 border-slate-200 hover:border-slate-300',
}

const SIZE_CLASSES: Record<CardSize, string> = {
  sm: 'p-4',
  md: 'p-6 md:p-8',
  lg: 'p-8 md:p-10',
}

// ---------------------------------------------------------------------------
// 型定義
// ---------------------------------------------------------------------------

export interface CardProps {
  children: ReactNode
  variant?: CardVariant
  size?: CardSize
  /** レンダリングする要素（セマンティクス用） */
  as?: 'article' | 'div' | 'section'
  className?: string
}

// ---------------------------------------------------------------------------
// コンポーネント
// ---------------------------------------------------------------------------

export function Card({
  children,
  variant = 'default',
  size = 'md',
  as: Component = 'div',
  className,
}: CardProps) {
  return (
    <Component
      className={cn(
        'rounded-xl',
        TRANSITION,
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className
      )}
    >
      {children}
    </Component>
  )
}
