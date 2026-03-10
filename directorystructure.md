# ディレクトリ構成

```
portfolio_LandingPage/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   ├── styles/
│   │   │   │   ├── constants.ts   # フォーカス・トランジション等
│   │   │   │   ├── sizes.ts       # 汎用サイズマップ
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
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── FeaturesSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── FlowSection.tsx
│   │       └── CTASection.tsx
│   ├── lib/
│   │   └── cn.ts                  # クラス名結合ユーティリティ
│   ├── types/
│   │   ├── index.ts
│   │   └── ui.ts                  # UI 用 variant / size 型
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
├── tsconfig.app.json
├── vite.config.ts
├── DESIGN.md
└── README.md
```
