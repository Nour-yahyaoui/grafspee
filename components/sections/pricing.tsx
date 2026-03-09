import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'
import { Section, SectionHeader } from '@/components/layout/section'
import { cn } from '@/lib/utils'

interface PricingPlan {
  name: string
  description: string
  price: string
  period?: string
  features: string[]
  cta: {
    label: string
    href: string
  }
  highlighted?: boolean
  badge?: string
}

interface PricingProps {
  title?: string
  description?: string
  plans: PricingPlan[]
  className?: string
}

export function Pricing({
  title = 'Pricing',
  description = 'Choose the plan that works for you',
  plans,
  className,
}: PricingProps) {
  return (
    <Section className={className}>
      <Container>
        <SectionHeader title={title} description={description} />

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                'relative flex flex-col rounded-2xl border p-8',
                plan.highlighted && 'border-primary shadow-lg ring-1 ring-primary'
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">/{plan.period}</span>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.highlighted ? 'default' : 'outline'}
                className="w-full"
              >
                <Link href={plan.cta.href}>{plan.cta.label}</Link>
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
