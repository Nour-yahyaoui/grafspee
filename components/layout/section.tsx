import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
}

const spacingStyles = {
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-24 md:py-32',
}

export function Section({
  spacing = 'lg',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(spacingStyles[spacing], className)} {...props}>
      {children}
    </section>
  )
}

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  align?: 'left' | 'center' | 'right'
}

export function SectionHeader({
  title,
  description,
  align = 'center',
  className,
  ...props
}: SectionHeaderProps) {
  const alignmentStyles = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  return (
    <div
      className={cn('max-w-2xl mb-12', alignmentStyles[align], className)}
      {...props}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}
