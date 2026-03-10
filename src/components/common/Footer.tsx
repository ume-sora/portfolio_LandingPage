export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm">
            © {currentYear} Web制作サービス. All rights reserved.
          </p>
          <nav className="flex items-center gap-6" aria-label="フッターナビゲーション">
            <a href="#features" className="text-sm hover:text-white transition-colors">
              特徴
            </a>
            <a href="#about" className="text-sm hover:text-white transition-colors">
              About
            </a>
            <a href="#flow" className="text-sm hover:text-white transition-colors">
              ご依頼の流れ
            </a>
            <a href="#cta" className="text-sm hover:text-white transition-colors">
              お問い合わせ
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
