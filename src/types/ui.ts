/**
 * UI コンポーネント用の型定義。
 * variant / size はコンポーネントの見た目を切り替えるために使用する。
 */

/** 複数コンポーネントで共通のサイズ */
export type Size = 'sm' | 'md' | 'lg'

/** Button: ボタンのスタイル種別 */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger'
  | 'light'
  | 'white'

/** Input: 入力欄のスタイル種別 */
export type InputVariant = 'default' | 'filled' | 'outline'

/** Card: カードのスタイル種別 */
export type CardVariant = 'default' | 'elevated' | 'outlined'

/** Card: 内側余白のサイズ */
export type CardSize = 'sm' | 'md' | 'lg'

/** Badge: バッジの意味・色 */
export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info'

/** Tabs: タブリストの見た目 */
export type TabsVariant = 'line' | 'pill'

/** Navbar: ナビゲーションバーの配色 */
export type NavbarVariant = 'light' | 'dark'

/** Section: セクションの背景 */
export type SectionVariant = 'default' | 'alt' | 'primary'
