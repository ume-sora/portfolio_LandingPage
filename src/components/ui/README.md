# UI コンポーネント

ポートフォリオ用の再利用可能な UI コンポーネント集です。

## ディレクトリ構成

```
ui/
├── styles/           # 共通スタイル定数（Tailwind クラス）
│   ├── constants.ts  # フォーカスリング・トランジション・無効状態
│   ├── sizes.ts      # 汎用サイズマップ（Badge 等）
│   └── index.ts
├── Button.tsx
├── Input.tsx
├── Card.tsx
├── Badge.tsx
├── Modal.tsx
├── Tabs.tsx
├── Accordion.tsx
├── Navbar.tsx
├── Section.tsx
├── index.ts          # 再エクスポート（公開 API）
└── README.md
```

## 設計方針

- **責務分離**: 各ファイルは「スタイルマップ」「型定義」「コンポーネント」のブロックに分け、見た目・型・ロジックを分離する。
- **型安全性**: すべての props を `types/ui.ts` またはコンポーネント直下で型定義し、variant / size はリテラル型で制約する。
- **スタイルの共通化**: フォーカス・トランジション・無効状態は `styles/constants.ts` に集約し、一貫性と変更のしやすさを確保する。
- **クラス結合**: `lib/cn.ts` の `cn()` で結合し、条件付きクラスや undefined を安全に扱う。
- **再利用性**: コンポーネントは単体で利用可能とし、Section は LP 用、Navbar は Showcase 用など利用側で組み合わせる。

## 利用例

```tsx
import { Button, Card, Input } from '@/components/ui'
import type { ButtonProps } from '@/components/ui'

<Button variant="primary" size="md" onClick={...}>送信</Button>
<Card variant="elevated" size="md">...</Card>
<Input label="メール" variant="filled" error={message} />
```

## 依存

- `src/lib/cn.ts` … クラス名結合
- `src/types/ui.ts` … variant / size 等の型
- `src/components/ui/styles/` … 共通 Tailwind 定数
