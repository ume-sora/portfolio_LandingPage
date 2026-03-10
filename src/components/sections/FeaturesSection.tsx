import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import type { FeatureItem } from '../../types'

const features: FeatureItem[] = [
  {
    id: '1',
    title: 'レスポンシブ対応',
    description: 'スマホ・タブレット・PCで見やすく、どのデバイスでもストレスのないレイアウトを実現します。',
    icon: '📱',
  },
  {
    id: '2',
    title: '保守しやすいコード',
    description: 'セマンティックなHTMLと整理されたCSSで、今後の修正・拡張がしやすい構成にします。',
    icon: '🛠️',
  },
  {
    id: '3',
    title: '納期を守る',
    description: 'スケジュールを明確にし、コミュニケーションを大切にしながら確実に納品します。',
    icon: '✅',
  },
]

export function FeaturesSection() {
  return (
    <Section id="features" variant="default">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center tracking-tight">
        選ばれる3つの理由
      </h2>
      <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
        デザインと実装の両面から、ご要望に合わせたWeb制作をご提供します。
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item) => (
          <Card key={item.id} as="article">
            <div className="text-3xl mb-4" aria-hidden>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
