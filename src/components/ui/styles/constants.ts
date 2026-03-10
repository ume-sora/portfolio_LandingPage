/**
 * UI コンポーネントで共通利用する Tailwind クラス定数。
 * 一貫したフォーカス・トランジション・アクセシビリティを担保する。
 */

/** フォーカスリング（キーボード操作時の視覚フィードバック） */
export const FOCUS_RING =
  'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'

/** フォーカスリング（入力系） */
export const FOCUS_RING_INPUT = 'focus:ring-1 focus:ring-indigo-500'
/** フォーカスリング（入力系・エラー時） */
export const FOCUS_RING_INPUT_ERROR = 'focus:ring-1 focus:ring-red-500'

/** 共通トランジション */
export const TRANSITION = 'transition-all duration-200'

/** 無効状態 */
export const DISABLED = 'disabled:opacity-50 disabled:pointer-events-none'
