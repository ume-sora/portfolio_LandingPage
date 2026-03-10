import { Section } from '../ui/Section'
import type { FlowStep } from '../../types'

const flowSteps: FlowStep[] = [
  {
    id: '1',
    step: 1,
    title: 'お問い合わせ',
    description: 'メールまたはクラウドワークスにてご依頼内容・ご予算・納期の希望をお知らせください。',
  },
  {
    id: '2',
    step: 2,
    title: 'ヒアリング',
    description: 'ご要望を詳しくお伺いし、必要なページ数・デザインの方向性をすり合わせます。',
  },
  {
    id: '3',
    step: 3,
    title: 'お見積もり・ご契約',
    description: '内容に応じたお見積もりをご提出。ご了承いただいたうえで制作に着手します。',
  },
  {
    id: '4',
    step: 4,
    title: '制作・納品',
    description: 'スケジュールに沿って制作を進め、納品後は軽微な修正にも対応します。',
  },
]

export function FlowSection() {
  return (
    <Section id="flow" variant="default">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center tracking-tight">
        ご依頼の流れ
      </h2>
      <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
        初めての方でも安心してご依頼いただけるよう、ステップをご案内します。
      </p>
      <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {flowSteps.map((item) => (
          <li key={item.id} className="relative">
            <div className="flex flex-col items-center text-center">
              <span
                className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-bold text-lg"
                aria-hidden
              >
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
