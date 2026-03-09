import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { cn } from '@/lib/utils'

interface CTAProps {
  title: string
  description?: string
  primaryAction: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
  variant?: 'default' | 'centered' | 'split'
  className?: string
}

export function CTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'centered',
  className,
}: CTAProps) {
  if (variant === 'split') {
    return (
      <Section className={cn('bg-muted/30', className)}>
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold md:text-3xl text-balance">{title}</h2>
              {description && (
                <p className="mt-2 text-muted-foreground text-pretty">{description}</p>
              )}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href={primaryAction.href}>
                  {primaryAction.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {secondaryAction && (
                <Button size="lg" variant="outline" asChild>
                  <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
                </Button>
              )}
            </div>
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <Section className={cn('bg-primary text-primary-foreground', className)}>
      <Container size="md">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl text-balance">{title}</h2>
          {description && (
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80 text-pretty">
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href={primaryAction.href}>
                {primaryAction.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {secondaryAction && (
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}
