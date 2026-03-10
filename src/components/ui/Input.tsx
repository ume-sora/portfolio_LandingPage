import { useId } from 'react'
import type { InputHTMLAttributes } from 'react'
import type { InputVariant, Size } from '../../types/ui'
import { cn } from '../../lib/cn'
import { FOCUS_RING_INPUT, FOCUS_RING_INPUT_ERROR } from './styles'

// ---------------------------------------------------------------------------
// スタイルマップ
// ---------------------------------------------------------------------------

const VARIANT_CLASSES: Record<InputVariant, string> = {
  default:
    'bg-white border border-slate-300 focus:border-indigo-500',
  filled:
    'bg-slate-100 border border-transparent focus:bg-white focus:ring-2 focus:ring-indigo-500',
  outline:
    'bg-transparent border-2 border-slate-300 focus:border-indigo-500',
}

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3 text-base',
  lg: 'px-4 py-3 text-lg',
}

// ---------------------------------------------------------------------------
// 型定義
// ---------------------------------------------------------------------------

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** ラベル（指定時のみ表示） */
  label?: string
  /** エラーメッセージ（指定時のみ表示・aria 連動） */
  error?: string
  /** 見た目の種類 */
  variant?: InputVariant
  /** サイズ */
  size?: Size
}

// ---------------------------------------------------------------------------
// コンポーネント
// ---------------------------------------------------------------------------

export function Input({
  label,
  error,
  variant = 'default',
  size = 'md',
  className,
  id: idProp,
  ...rest
}: InputProps) {
  const generatedId = useId()
  const id = idProp ?? generatedId
  const errorId = `${id}-error`

  const inputClasses = cn(
    'w-full rounded-lg transition-colors placeholder:text-slate-400',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    error && cn('border-red-500 focus:border-red-500', FOCUS_RING_INPUT_ERROR),
    !error && FOCUS_RING_INPUT,
    className
  )

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={inputClasses}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
