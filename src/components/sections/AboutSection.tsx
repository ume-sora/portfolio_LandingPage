import { Section } from '../ui/Section'

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'レスポンシブ',
  'アクセシビリティ',
]

export function AboutSection() {
  return (
    <Section id="about" variant="alt">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center tracking-tight">
        About
      </h2>
      <div className="mt-12 max-w-3xl mx-auto">
        <p className="text-slate-600 leading-relaxed text-center md:text-left">
          Web制作・コーディングを中心に、LPやコーポレートサイトの制作・保守を承っています。
          デザインの意図を崩さず、保守しやすいコードとレスポンシブ対応を心がけています。
          クラウドワークス等でのご依頼も歓迎です。
        </p>
        <div className="mt-8">
          <h3 className="text-lg font-bold text-slate-900">主なスキル・技術</h3>
          <ul className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
            {skills.map((skill) => (
              <li key={skill}>
                <span className="inline-block px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium shadow-sm">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
