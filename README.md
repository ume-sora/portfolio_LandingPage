# Portfolio: Landing Page & UI Components Showcase

Web制作サービスの紹介LPと、再利用可能なUIコンポーネント集を一つのプロジェクトで実装したポートフォリオ用リポジトリです。

---

## プロジェクト概要

本プロジェクトは **2つの成果物** で構成されています。

| 成果物 | 説明 | URL |
|--------|------|-----|
| **Landing Page** | Web制作サービスの紹介用1ページサイト。特徴・About・ご依頼の流れ・CTA などのセクションで構成。 | `/` |
| **UI Components Showcase** | ポートフォリオ用に作成したUIコンポーネントを一覧表示するページ。variant・size ごとの見た目を確認できる。 | `/showcase` |

- **目的**: HTML/CSS（Tailwind）のレイアウト力と、React によるコンポーネント設計力を示す。
- **想定利用**: ポートフォリオサイト・クラウドワークス等の応募時に参照用として掲載。

---

## 使用技術

| カテゴリ | 技術 |
|----------|------|
| フレームワーク | React 18 |
| 言語 | TypeScript 5.6 |
| スタイリング | Tailwind CSS 3.4 |
| ビルド | Vite 5 |
| ルーティング | React Router v7 |

---

## 実装したコンポーネント一覧

`src/components/ui/` 配下で、以下のコンポーネントを実装しています。

| コンポーネント | 説明 | variant | size |
|----------------|------|---------|------|
| **Button** | リンクまたはボタン。`href` ありで `<a>`、なしで `<button>` をレンダリング。 | primary, secondary, outline, ghost, danger, light, white | sm, md, lg |
| **Input** | テキスト入力。ラベル・エラー表示・アクセシビリティ対応。 | default, filled, outline | sm, md, lg |
| **Card** | コンテンツのグルーピング用カード。`as` で article / div / section を指定可能。 | default, elevated, outlined | sm, md, lg |
| **Badge** | ラベル・ステータス表示用の小さなタグ。 | default, success, warning, error, info | sm, md, lg |
| **Modal** | オーバーレイ付きダイアログ。Esc・オーバーレイクリックで閉じる。 | — | — |
| **Tabs** | タブ切り替えUI。 | line, pill | — |
| **Accordion** | 開閉パネル。単一展開 or 複数展開を選択可能。 | — | — |
| **Navbar** | 固定ナビゲーション。ロゴ・リンク・モバイル時ハンバーガーメニュー。 | light, dark | — |
| **Section** | セクションラッパー（余白・コンテナ・背景色）。LP 用。 | default, alt, primary | — |

詳細な props や利用例は [src/components/ui/README.md](./src/components/ui/README.md) を参照してください。

---

## 工夫したポイント

### 再利用性・保守性

- **variant / size の統一**: 各コンポーネントで `variant` と必要に応じて `size` を用意し、スタイルの切り替えを一貫した API にした。
- **共通スタイルの集約**: フォーカスリング・トランジション・無効状態を `components/ui/styles/constants.ts` に定義し、見た目の一貫性と変更のしやすさを確保した。
- **クラス名結合ユーティリティ**: `lib/cn.ts` の `cn()` で条件付きクラスや `undefined` を安全に扱い、可読性を上げた。

### TypeScript の型安全性

- **リテラル型**: すべての variant / size を `types/ui.ts` で型定義し、typo や不正な値をコンパイル時に検出できるようにした。
- **Button のポリモーフィック**: `href` の有無で `<a>` と `<button>` を切り替える型を `ButtonPropsAsLink` / `ButtonPropsAsButton` で明示した。
- **props の export**: 利用側で型を参照しやすいよう、各コンポーネントの props 型を `index.ts` から再エクスポートした。

### 責務の分離

- **スタイル / 型 / ロジックのブロック分け**: 各 UI コンポーネント内で「スタイルマップ → 型定義 → コンポーネント」の順に記述し、責務を分かりやすくした。
- **Section とページの分離**: LP 用の Section はレイアウト専用、Navbar はナビ専用とし、ページ側で組み合わせる形にした。

### アクセシビリティ・UX

- **Input**: `useId()` で id を生成し、label と error を `aria-describedby` / `aria-invalid` で紐付けた。
- **Modal**: Esc キーで閉じる・body の scroll ロック・`role="dialog"` を実装した。
- **Tabs / Accordion**: `role="tablist"` / `aria-expanded` など、ARIA を意識したマークアップにした。

### Showcase ページの見せ方

- **余白・タイポの統一**: セクション間・ブロック間の余白と、見出し・ラベルのフォントサイズを定数で統一した。
- **Variant / Size の並列表示**: 各コンポーネントで「Variant」「Size」ごとに例を並べ、一覧で比較できるようにした。

---

## ディレクトリ構成

```
portfolio_LandingPage/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── common/           # 共通: Header, Footer
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/               # UI コンポーネント集
│   │   │   ├── styles/      # 共通スタイル定数
│   │   │   │   ├── constants.ts
│   │   │   │   ├── sizes.ts
│   │   │   │   └── index.ts
│   │   │   ├── Accordion.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── Tabs.tsx
│   │   │   ├── index.ts
│   │   │   └── README.md
│   │   └── sections/         # LP 用セクション
│   │       ├── HeroSection.tsx
│   │       ├── FeaturesSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── FlowSection.tsx
│   │       └── CTASection.tsx
│   ├── lib/
│   │   └── cn.ts             # クラス名結合ユーティリティ
│   ├── types/
│   │   ├── index.ts
│   │   └── ui.ts             # UI 用型定義
│   ├── pages/
│   │   ├── LandingPage.tsx
│   │   └── ShowcasePage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
├── DESIGN.md                 # LP 設計書
└── README.md
```

---

## セットアップ方法

### 必要な環境

- Node.js 18 以上
- npm または yarn / pnpm

### 手順

```bash
# リポジトリのクローン後、プロジェクトルートで実行
npm install
npm run dev
```

ブラウザで **http://localhost:5173** を開くと LP が表示されます。

- **LP**: http://localhost:5173/
- **UI Showcase**: http://localhost:5173/showcase

### ビルド・プレビュー

```bash
npm run build    # 本番ビルド
npm run preview  # ビルド結果のローカルプレビュー
```

### リント

```bash
npm run lint
```

---

## 今後の改善案

- **テスト**: 各 UI コンポーネントの Vitest + React Testing Library による単体テスト、キーボード操作・ARIA の検証。
- **Storybook**: コンポーネントのカタログ化と、variant / size ごとのストーリー追加。
- **ダークモード**: Tailwind の `dark:` を利用したテーマ切り替えの対応。
- **コンポーネントの追加**: Select, Checkbox, Radio, Toast などフォーム・フィードバック系の拡張。
- **アニメーション**: Modal の開閉や Accordion の開閉に軽いトランジションを追加し、体感のわかりやすさを向上。
- **パフォーマンス**: 必要に応じて React.memo や lazy 読み込みの検討。
- **ドキュメント**: 各コンポーネントの JSDoc を充実させ、型情報とあわせて IDE 上で参照しやすくする。

---

## 関連ドキュメント

- [DESIGN.md](./DESIGN.md) … LP のセクション構成・Tailwind 設計方針
- [src/components/ui/README.md](./src/components/ui/README.md) … UI コンポーネントの設計方針・利用例
