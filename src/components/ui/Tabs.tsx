import type { ReactNode } from 'react'
import type { TabsVariant } from '../../types/ui'
import { cn } from '../../lib/cn'

// ---------------------------------------------------------------------------
// スタイルマップ
// ---------------------------------------------------------------------------

const TAB_LIST_CLASSES: Record<TabsVariant, string> = {
  line: 'flex gap-6 border-b border-slate-200',
  pill: 'inline-flex gap-1 rounded-lg bg-slate-100 p-1',
}

const TAB_TRIGGER_CLASSES: Record<TabsVariant, string> = {
  line: 'border-b-2 border-transparent data-[active]:border-indigo-600 data-[active]:text-indigo-600',
  pill: 'rounded-lg data-[active]:bg-indigo-100 data-[active]:text-indigo-700',
}

// ---------------------------------------------------------------------------
// 型定義
// ---------------------------------------------------------------------------

export interface TabItem {
  id: string
  label: string
  content: ReactNode
}

export interface TabsProps {
  /** タブ項目の配列 */
  tabs: TabItem[]
  /** 現在アクティブなタブの id */
  activeId: string
  /** タブ切り替え時のコールバック */
  onTabChange: (id: string) => void
  variant?: TabsVariant
}

// ---------------------------------------------------------------------------
// コンポーネント
// ---------------------------------------------------------------------------

export function Tabs({
  tabs,
  activeId,
  onTabChange,
  variant = 'line',
}: TabsProps) {
  const activeTab = tabs.find((t) => t.id === activeId)

  return (
    <div className="w-full">
      <div
        role="tablist"
        className={TAB_LIST_CLASSES[variant]}
      >
        {tabs.map((tab) => {
          const isActive = activeId === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              data-active={isActive ? '' : undefined}
              className={cn(
                'px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900',
                TAB_TRIGGER_CLASSES[variant]
              )}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
      <div
        role="tabpanel"
        id={activeTab ? `panel-${activeTab.id}` : undefined}
        aria-labelledby={activeTab ? `tab-${activeTab.id}` : undefined}
        className="mt-4 focus:outline-none"
      >
        {activeTab?.content}
      </div>
    </div>
  )
}
