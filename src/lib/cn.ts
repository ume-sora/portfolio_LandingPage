/**
 * クラス名を結合するユーティリティ。
 * undefined / null / false を除外し、重複や余分な空白を除いた文字列を返す。
 */
export function cn(...values: (string | undefined | null | false)[]): string {
  return values.filter(Boolean).join(' ').replace(/\s+/g, ' ').trim()
}
