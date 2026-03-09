import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'
import { cn } from '@/lib/utils'

interface HeroProps {
  badge?: string
  title: string
  description: string
  primaryAction?: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
  children?: React.ReactNode
  className?: string
  align?: 'left' | 'center'
}

export function Hero({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
  className,
  align = 'center',
}: HeroProps) {
  return (
    <section className={cn('py-20 md:py-32', className)}>
      <Container size="lg">
        <div
          className={cn(
            'flex flex-col gap-6',
            align === 'center' && 'items-center text-center'
          )}
        >
          {badge && (
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              {badge}
            </div>
          )}

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            {title}
          </h1>

          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl text-pretty">
            {description}
          </p>

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col gap-4 sm:flex-row">
              {primaryAction && (
                <Button size="lg" asChild>
                  <Link href={primaryAction.href}>
                    {primaryAction.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {secondaryAction && (
                <Button size="lg" variant="outline" asChild>
                  <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
                </Button>
              )}
            </div>
          )}

          {children}
        </div>
      </Container>
    </section>
  )
}
