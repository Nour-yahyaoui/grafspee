import { Container } from '@/components/layout/container'
import { Section, SectionHeader } from '@/components/layout/section'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

interface Testimonial {
  quote: string
  author: {
    name: string
    title: string
    avatar?: string
  }
}

interface TestimonialsProps {
  title?: string
  description?: string
  testimonials: Testimonial[]
  columns?: 1 | 2 | 3
  className?: string
}

export function Testimonials({
  title = 'What our customers say',
  description,
  testimonials,
  columns = 3,
  className,
}: TestimonialsProps) {
  const gridCols = {
    1: 'max-w-2xl mx-auto',
    2: 'md:grid-cols-2 max-w-4xl mx-auto',
    3: 'md:grid-cols-2 lg:grid-cols-3',
  }

  return (
    <Section className={cn('bg-muted/30', className)}>
      <Container>
        <SectionHeader title={title} description={description} />

        <div className={cn('grid gap-8', gridCols[columns])}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border bg-card p-6"
            >
              <blockquote className="flex-1 text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  {testimonial.author.avatar && (
                    <AvatarImage
                      src={testimonial.author.avatar}
                      alt={testimonial.author.name}
                    />
                  )}
                  <AvatarFallback>
                    {testimonial.author.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{testimonial.author.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.author.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

interface TestimonialHighlightProps {
  quote: string
  author: {
    name: string
    title: string
    avatar?: string
  }
  className?: string
}

export function TestimonialHighlight({
  quote,
  author,
  className,
}: TestimonialHighlightProps) {
  return (
    <Section className={className}>
      <Container size="md">
        <div className="text-center">
          <blockquote className="text-2xl font-medium md:text-3xl text-balance">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <div className="mt-8 flex flex-col items-center gap-3">
            <Avatar className="h-12 w-12">
              {author.avatar && (
                <AvatarImage src={author.avatar} alt={author.name} />
              )}
              <AvatarFallback>
                {author.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{author.name}</div>
              <div className="text-sm text-muted-foreground">{author.title}</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
