import { Button } from '../ui/Button'

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-slate-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
          伝わるデザインで
          <br className="sm:hidden" />
          <span className="text-indigo-600">成果につなげる</span>
          <br />
          Web制作
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          LP・コーディング・保守まで一貫対応。レスポンシブと使いやすさを大切にしたサイトをお届けします。
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#features" variant="primary">
            特徴を見る
          </Button>
          <Button href="#cta" variant="secondary">
            お問い合わせ
          </Button>
        </div>
      </div>
    </section>
  )
}
