import type { ReactNode } from 'react'
import type { BadgeVariant, Size } from '../../types/ui'
import { cn } from '../../lib/cn'
import { SIZE_CLASSES } from './styles/sizes'

// ---------------------------------------------------------------------------
// スタイルマップ（色・意味は Badge 固有）
// ---------------------------------------------------------------------------

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  default: 'bg-slate-100 text-slate-700',
  success: 'bg-emerald-100 text-emerald-800',
  warning: 'bg-amber-100 text-amber-800',
  error: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800',
}

// ---------------------------------------------------------------------------
// 型定義
// ---------------------------------------------------------------------------

export interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  size?: Size
  className?: string
}

// ---------------------------------------------------------------------------
// コンポーネント
// ---------------------------------------------------------------------------

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className
      )}
    >
      {children}
    </span>
  )
}
