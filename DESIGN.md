# Web制作サービス紹介LP 設計書

## 1. ディレクトリ構成

```
portfolio_LandingPage/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── common/           # 共通UI
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/         # セクション単位のコンポーネント
│   │       ├── HeroSection.tsx
│   │       ├── FeaturesSection.tsx
│   │       ├── ServicesSection.tsx
│   │       ├── WorksSection.tsx
│   │       ├── AboutSection.tsx
│   │       └── CTASection.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── types/
│       └── index.ts          # 共通型定義（必要に応じて）
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 2. セクション構成

| 順序 | セクションID | 名前 | 役割 |
|------|-------------|------|------|
| 0 | - | Header | 全ページ共通ナビ・ロゴ |
| 1 | hero | Hero | ファーストビュー・キャッチコピー |
| 2 | features | Features | サービスの3つの特徴 |
| 3 | services | Services | 提供サービス一覧 |
| 4 | works | Works | 制作実績（サンプル） |
| 5 | about | About | 自己紹介・スキル |
| 6 | cta | CTA | お問い合わせ・依頼の導線 |
| 7 | - | Footer | コピーライト・リンク |

---

## 3. 各セクションの役割

### Header（共通）
- ロゴ／サービス名の表示
- アンカーリンクによるセクション間ナビゲーション
- レスポンシブ時のハンバーガーメニュー（オプション）
- 固定またはスクロール連動のどちらかで配置

### Hero
- ファーストビューで「何のLPか」を一瞬で伝える
- メインキャッチコピー + サブコピー
- CTAボタン（例：サービスを見る／お問い合わせ）で下層へ誘導

### Features
- 「選ばれる理由」を3つに整理してカードで表示
- アイコン＋見出し＋短文で視認性を確保
- ポートフォリオとしてレイアウトの安定感（グリッド）を見せる

### Services
- 提供サービス（例：LP制作、コーディング、保守など）をリスト化
- 各サービスに短い説明を付与
- リストまたはカード形式で統一

### Works
- 制作実績のサンプルを3〜4件表示
- 画像＋タイトル＋概要＋タグ（技術スタック等）で構成
- 実績がなくてもプレースホルダーでレイアウト力を示す

### About
- 自己紹介（経歴・強みの短文）
- スキルや使用ツールをテキストまたはバッジで表示
- クラウドワークス応募時に「人柄・スキル」が伝わるようにする

### CTA
- 「お問い合わせ」「依頼する」など行動を促す短いコピー
- ボタンでメールリンクまたは外部フォームへ誘導
- 余白とフォントサイズで他セクションより目立たせる

### Footer
- コピーライト、必要に応じてSNSリンクやプライバシーポリシー
- 他セクションとデザインを揃えつつ控えめに

---

## 4. 必要なコンポーネント一覧

| 種別 | コンポーネント名 | 責務 |
|------|------------------|------|
| 共通 | `Header` | ナビゲーション・ロゴ・ハンバーガー |
| 共通 | `Footer` | コピーライト・リンク |
| セクション | `HeroSection` | ヒーローエリア（見出し・CTA） |
| セクション | `FeaturesSection` | 特徴3つをカードで表示 |
| セクション | `ServicesSection` | サービス一覧表示 |
| セクション | `WorksSection` | 制作実績カード一覧 |
| セクション | `AboutSection` | 自己紹介・スキル表示 |
| セクション | `CTASection` | 問い合わせ誘導ブロック |

※ カードやボタンは各セクション内でインライン実装し、重複が出たら共通コンポーネント化を検討。

---

## 5. Tailwindの設計方針

### カラー
- **Primary**: メインブランド色（例: `slate-700` / `indigo-600`）— 見出し・CTA・リンク
- **Neutral**: 背景・テキスト（`slate-50` / `slate-900` / `slate-600`）— シンプルで読みやすく
- **Accent**: アクセント（`amber-500` や `emerald-500`）— ボタン・アイコンに限定して使用

### タイポグラフィ
- フォント: `font-sans`（Tailwindデフォルト）または `font-serif` を見出しのみに使用
- 見出し: `text-3xl` 〜 `text-5xl`（`md:` で段階的に拡大）、`font-bold` / `tracking-tight`
- 本文: `text-base` / `text-slate-600`、行間 `leading-relaxed`

### スペーシング
- セクション間: `py-16` 〜 `py-24`（`md:py-20` 〜 `md:py-28`）
- コンテナ: `max-w-6xl` or `max-w-7xl`、`mx-auto`、`px-4` / `sm:px-6` / `lg:px-8`
- カード内余白: `p-6` 〜 `p-8`

### レスポンシブ
- モバイルファースト: ベースを `sm:` 未満にし、`sm:` `md:` `lg:` で上書き
- グリッド: `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-3` で段階的に列数を増やす
- ナビ: モバイルで非表示＋ハンバーガー、`md:` 以上で横並び表示

### 一貫性
- 角丸: カード・ボタンは `rounded-lg` または `rounded-xl` に統一
- シャドウ: カードは `shadow-md` または `shadow-lg`、ホバーで `shadow-lg` / `shadow-xl`
- トランジション: ボタン・リンクに `transition-colors` または `transition-all duration-200`

### ユーティリティの使い方
- 色・フォント・余白は Tailwind のスケールに乗せ、任意の値をなるべく使わない
- 繰り返し出る組み合わせは `@apply` でコンポーネントクラスにまとめず、クラス名の羅列で対応（可読性・変更しやすさを優先）

---

以上を前提に、React コンポーネントのコードを実装する。
