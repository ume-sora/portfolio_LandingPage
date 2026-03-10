import { useState } from 'react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

// ---------------------------------------------------------------------------
// 型定義
// ---------------------------------------------------------------------------

export interface AccordionItem {
  id: string
  title: string
  content: ReactNode
}

export interface AccordionProps {
  /** アコーディオン項目の配列 */
  items: AccordionItem[]
  /** true のとき複数パネルを同時に開ける */
  allowMultiple?: boolean
}

// ---------------------------------------------------------------------------
// コンポーネント
// ---------------------------------------------------------------------------

export function Accordion({
  items,
  allowMultiple = false,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        if (!allowMultiple) next.clear()
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white divide-y divide-slate-200">
      {items.map((item) => {
        const isOpen = openIds.has(item.id)
        return (
          <div key={item.id}>
            <button
              type="button"
              className={cn(
                'flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50'
              )}
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              id={`accordion-heading-${item.id}`}
            >
              <span>{item.title}</span>
              <span
                className={cn(
                  'shrink-0 text-slate-500 transition-transform duration-200',
                  isOpen && 'rotate-180'
                )}
                aria-hidden
              >
                ▼
              </span>
            </button>
            <div
              id={`accordion-content-${item.id}`}
              role="region"
              aria-labelledby={`accordion-heading-${item.id}`}
              className={cn(
                'overflow-hidden transition-all duration-200',
                isOpen ? 'max-h-[500px]' : 'max-h-0'
              )}
            >
              <div className="px-4 pb-4 pt-0 text-sm text-slate-600">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
