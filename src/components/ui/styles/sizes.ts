/**
 * コンポーネント間で意味が同じサイズの Tailwind マップ。
 * 見た目がコンポーネントごとに異なる場合は各コンポーネント内で定義する。
 */

import type { Size } from '../../../types/ui'

/** 汎用サイズ（padding・text の目安）。Badge 等で利用 */
export const SIZE_CLASSES: Record<Size, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
} as const
