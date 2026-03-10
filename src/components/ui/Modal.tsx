import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { Button } from './Button'
import { cn } from '../../lib/cn'

// ---------------------------------------------------------------------------
// 型定義
// ---------------------------------------------------------------------------

export interface ModalProps {
  /** 開閉状態 */
  isOpen: boolean
  /** 閉じる時のコールバック */
  onClose: () => void
  /** タイトル（省略時はヘッダーにタイトルのみ表示しない） */
  title?: string
  /** 本文 */
  children: ReactNode
  /** 閉じるボタンをヘッダーに表示するか */
  showCloseButton?: boolean
}

// ---------------------------------------------------------------------------
// コンポーネント
// ---------------------------------------------------------------------------

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const showHeader = title != null || showCloseButton

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative flex max-h-[90vh] w-full max-w-md flex-col rounded-2xl bg-white shadow-2xl">
        {showHeader && (
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 p-4 md:p-6">
            {title && (
              <h2
                id="modal-title"
                className="text-lg font-bold text-slate-900"
              >
                {title}
              </h2>
            )}
            <div className={cn(title == null && 'ml-auto')}>
              {showCloseButton && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  aria-label="閉じる"
                >
                  ✕
                </Button>
              )}
            </div>
          </div>
        )}
        <div className="flex-1 overflow-y-auto p-4 text-slate-600 md:p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
