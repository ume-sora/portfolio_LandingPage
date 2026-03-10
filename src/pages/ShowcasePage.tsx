import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Input,
  Card,
  Badge,
  Modal,
  Tabs,
  Accordion,
  Navbar,
} from '../components/ui'

// --- レイアウト定数（余白・タイポの一貫性）---
const sectionSpacing = 'mb-16 last:mb-0 md:mb-20 md:last:mb-0'
const sectionTitle = 'text-xl font-semibold tracking-tight text-slate-900 md:text-2xl'
const sectionTitleMargin = 'mb-6'
const blockLabel = 'text-xs font-medium uppercase tracking-wider text-slate-500'
const blockLabelMargin = 'mb-3'
const blockSpacing = 'space-y-8'
const contentText = 'text-sm text-slate-600 leading-relaxed'

function ShowcaseSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className={sectionSpacing}>
      <h2 className={`${sectionTitle} ${sectionTitleMargin} pb-3 border-b border-slate-200`}>
        {title}
      </h2>
      <div className={blockSpacing}>
        {children}
      </div>
    </section>
  )
}

/** サブブロック（variant / size などの見出し＋コンテンツ） */
function ShowcaseBlock({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className={`${blockLabel} ${blockLabelMargin}`}>{label}</p>
      {children}
    </div>
  )
}

export function ShowcasePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('tab1')
  const [inputValue, setInputValue] = useState('')

  const tabItems = [
    { id: 'tab1', label: 'タブ1', content: <p className={contentText}>タブ1の内容です。</p> },
    { id: 'tab2', label: 'タブ2', content: <p className={contentText}>タブ2の内容です。</p> },
    { id: 'tab3', label: 'タブ3', content: <p className={contentText}>タブ3の内容です。</p> },
  ]

  const accordionItems = [
    { id: 'a1', title: 'アコーディオン 1', content: <p className={contentText}>1つ目のパネルの本文です。</p> },
    { id: 'a2', title: 'アコーディオン 2', content: <p className={contentText}>2つ目のパネルの本文です。</p> },
    { id: 'a3', title: 'アコーディオン 3', content: <p className={contentText}>3つ目のパネルの本文です。</p> },
  ]

  const navbarLinks = [
    { label: 'トップ', href: '/' },
    { label: 'Showcase', href: '/showcase' },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar
        logo={
          <Link to="/" className="text-lg font-bold text-slate-900">
            UI Showcase
          </Link>
        }
        links={navbarLinks}
        variant="light"
      />

      <main className="max-w-4xl mx-auto px-4 pt-8 pb-16 sm:px-6 sm:pt-12 sm:pb-24 lg:px-8">
        {/* ヒーロー */}
        <header className="mb-12 md:mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            UI コンポーネント集
          </h1>
          <p className="mt-2 text-base text-slate-600 md:mt-3 md:text-lg">
            ポートフォリオ用の再利用可能なコンポーネント一覧です。
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 focus:outline-none focus:underline"
          >
            <span aria-hidden>←</span>
            LP に戻る
          </Link>
        </header>

        <ShowcaseSection title="Button">
          <ShowcaseBlock label="Variant">
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="light">Light</Button>
            </div>
          </ShowcaseBlock>
          <ShowcaseBlock label="Size">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
            </div>
          </ShowcaseBlock>
        </ShowcaseSection>

        <ShowcaseSection title="Input">
          <ShowcaseBlock label="基本・Variant">
            <div className="grid gap-6 max-w-sm sm:grid-cols-1">
              <Input
                label="ラベル"
                placeholder="プレースホルダー"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label="Filled"
                variant="filled"
                placeholder="filled"
              />
              <Input
                label="Outline"
                variant="outline"
                placeholder="outline"
              />
              <Input
                label="エラー例"
                error="入力内容を確認してください"
                placeholder="error"
              />
            </div>
          </ShowcaseBlock>
          <ShowcaseBlock label="Size">
            <div className="flex flex-col gap-4 max-w-sm sm:flex-row sm:max-w-none">
              <Input size="sm" placeholder="size: sm" className="flex-1" />
              <Input size="md" placeholder="size: md" className="flex-1" />
              <Input size="lg" placeholder="size: lg" className="flex-1" />
            </div>
          </ShowcaseBlock>
        </ShowcaseSection>

        <ShowcaseSection title="Card">
          <ShowcaseBlock label="Variant">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
              <Card variant="default">
                <h3 className="font-semibold text-slate-900">Default</h3>
                <p className={`mt-1.5 ${contentText}`}>variant: default</p>
              </Card>
              <Card variant="elevated">
                <h3 className="font-semibold text-slate-900">Elevated</h3>
                <p className={`mt-1.5 ${contentText}`}>variant: elevated</p>
              </Card>
              <Card variant="outlined">
                <h3 className="font-semibold text-slate-900">Outlined</h3>
                <p className={`mt-1.5 ${contentText}`}>variant: outlined</p>
              </Card>
            </div>
          </ShowcaseBlock>
          <ShowcaseBlock label="Size">
            <div className="flex flex-wrap gap-4">
              <Card size="sm">
                <span className="font-medium text-slate-800">sm</span>
              </Card>
              <Card size="md">
                <span className="font-medium text-slate-800">md</span>
              </Card>
              <Card size="lg">
                <span className="font-medium text-slate-800">lg</span>
              </Card>
            </div>
          </ShowcaseBlock>
        </ShowcaseSection>

        <ShowcaseSection title="Badge">
          <ShowcaseBlock label="Variant">
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </ShowcaseBlock>
          <ShowcaseBlock label="Size">
            <div className="flex flex-wrap items-center gap-2">
              <Badge size="sm">sm</Badge>
              <Badge size="md">md</Badge>
              <Badge size="lg">lg</Badge>
            </div>
          </ShowcaseBlock>
        </ShowcaseSection>

        <ShowcaseSection title="Modal">
          <div>
            <Button variant="primary" onClick={() => setModalOpen(true)}>
              モーダルを開く
            </Button>
            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title="モーダル見出し"
              showCloseButton
            >
              <p className={contentText}>
                モーダルの中身です。Esc キーまたはオーバーレイクリックで閉じられます。
              </p>
            </Modal>
          </div>
        </ShowcaseSection>

        <ShowcaseSection title="Tabs">
          <ShowcaseBlock label="Variant: line">
            <div className="max-w-xl">
              <Tabs
                tabs={tabItems}
                activeId={activeTab}
                onTabChange={setActiveTab}
                variant="line"
              />
            </div>
          </ShowcaseBlock>
          <ShowcaseBlock label="Variant: pill">
            <div className="max-w-xl">
              <Tabs
                tabs={tabItems}
                activeId={activeTab}
                onTabChange={setActiveTab}
                variant="pill"
              />
            </div>
          </ShowcaseBlock>
        </ShowcaseSection>

        <ShowcaseSection title="Accordion">
          <ShowcaseBlock label="1つのみ開く（デフォルト）">
            <div className="max-w-xl">
              <Accordion items={accordionItems} />
            </div>
          </ShowcaseBlock>
          <ShowcaseBlock label="複数開く (allowMultiple)">
            <div className="max-w-xl">
              <Accordion items={accordionItems} allowMultiple />
            </div>
          </ShowcaseBlock>
        </ShowcaseSection>

        <ShowcaseSection title="Navbar">
          <p className={`max-w-2xl ${contentText}`}>
            このページ上部で表示しています。logo（ReactNode）・links（label, href）・variant（light / dark）で利用できます。
          </p>
          <Card variant="outlined" size="md" className="mt-4 max-w-2xl">
            <p className={contentText}>
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-700">Navbar</code>
              {' '}は固定表示され、モバイルではハンバーガーメニューに切り替わります。
            </p>
          </Card>
        </ShowcaseSection>
      </main>
    </div>
  )
}
