import { Container } from '@/components/layout/container'
import { Section, SectionHeader } from '@/components/layout/section'
import { cn } from '@/lib/utils'

interface Feature {
  icon?: React.ReactNode
  title: string
  description: string
}

interface FeaturesProps {
  title?: string
  description?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  className?: string
}

export function Features({
  title = 'Features',
  description,
  features,
  columns = 3,
  className,
}: FeaturesProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <Section className={className}>
      <Container>
        <SectionHeader title={title} description={description} />

        <div className={cn('grid gap-8', gridCols[columns])}>
          {features.map((feature, index) => (
            <div key={index} className="relative">
              {feature.icon && (
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  {feature.icon}
                </div>
              )}
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

interface FeatureCardsProps {
  title?: string
  description?: string
  features: Feature[]
  className?: string
}

export function FeatureCards({
  title = 'Features',
  description,
  features,
  className,
}: FeatureCardsProps) {
  return (
    <Section className={className}>
      <Container>
        <SectionHeader title={title} description={description} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border bg-card p-6 transition-all hover:shadow-lg"
            >
              {feature.icon && (
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  {feature.icon}
                </div>
              )}
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
