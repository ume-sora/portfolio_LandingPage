import { Section } from '../ui/Section'
import { Button } from '../ui/Button'

export function CTASection() {
  return (
    <Section id="cta" variant="primary">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          お気軽にご相談ください
        </h2>
        <p className="mt-4 text-indigo-100 text-lg max-w-2xl mx-auto">
          ご予算・納期・ご要望をヒアリングのうえ、無理のない範囲でお見積もりいたします。
        </p>
        <div className="mt-10">
          <Button href="mailto:example@example.com" variant="white">
            メールで問い合わせる
          </Button>
        </div>
        <p className="mt-6 text-sm text-indigo-200">
          クラウドワークスからのご依頼も歓迎です。
        </p>
      </div>
    </Section>
  )
}
