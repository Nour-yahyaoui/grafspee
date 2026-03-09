import { Container } from '@/components/layout/container'
import { Section, SectionHeader } from '@/components/layout/section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  title?: string
  description?: string
  items: FAQItem[]
  columns?: 1 | 2
  className?: string
}

export function FAQ({
  title = 'Frequently Asked Questions',
  description = "Can't find the answer you're looking for? Reach out to our support team.",
  items,
  columns = 1,
  className,
}: FAQProps) {
  if (columns === 2) {
    const midpoint = Math.ceil(items.length / 2)
    const leftColumn = items.slice(0, midpoint)
    const rightColumn = items.slice(midpoint)

    return (
      <Section className={className}>
        <Container>
          <SectionHeader title={title} description={description} />

          <div className="grid gap-8 md:grid-cols-2">
            <Accordion type="single" collapsible className="w-full">
              {leftColumn.map((item, index) => (
                <AccordionItem key={index} value={`left-item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Accordion type="single" collapsible className="w-full">
              {rightColumn.map((item, index) => (
                <AccordionItem key={index} value={`right-item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <Section className={className}>
      <Container size="md">
        <SectionHeader title={title} description={description} />

        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  )
}
