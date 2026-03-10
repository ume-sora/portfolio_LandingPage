import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import type { ButtonVariant, Size } from '../../types/ui'
import { cn } from '../../lib/cn'
import { FOCUS_RING, TRANSITION, DISABLED } from './styles'

// ---------------------------------------------------------------------------
// スタイルマップ（責務: 見た目の定義のみ）
// ---------------------------------------------------------------------------

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg',
  secondary: 'text-slate-700 bg-slate-200 hover:bg-slate-300',
  outline: 'text-indigo-600 bg-transparent border-2 border-indigo-600 hover:bg-indigo-50',
  ghost: 'text-slate-700 bg-transparent hover:bg-slate-100',
  danger: 'text-white bg-red-600 hover:bg-red-700 shadow-md hover:shadow-lg',
  light: 'text-indigo-600 bg-white hover:bg-indigo-50 shadow-md hover:shadow-lg',
  white: 'text-indigo-600 bg-white hover:bg-indigo-50 shadow-md hover:shadow-lg',
}

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

const BASE_CLASSES = cn(
  'inline-flex items-center justify-center font-semibold',
  TRANSITION,
  FOCUS_RING,
  DISABLED
)

// ---------------------------------------------------------------------------
// 型定義
// ---------------------------------------------------------------------------

export interface ButtonBaseProps {
  /** ボタン内に表示する内容 */
  children: ReactNode
  /** スタイルの種類 */
  variant?: ButtonVariant
  /** サイズ */
  size?: Size
  /** 追加の class（margin 等のレイアウト用） */
  className?: string
}

export type ButtonPropsAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never
  }

export type ButtonPropsAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string
  }

export type ButtonProps = ButtonPropsAsButton | ButtonPropsAsLink

function isLinkProps(props: ButtonProps): props is ButtonPropsAsLink {
  return 'href' in props && props.href != null
}

// ---------------------------------------------------------------------------
// コンポーネント
// ---------------------------------------------------------------------------

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...rest
  } = props

  const classes = cn(
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className
  )

  if (isLinkProps(props)) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type="button" className={classes} {...buttonRest}>
      {children}
    </button>
  )
}
