import { Zap, Shield, Rocket, Code, Layers, Globe } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { Pricing } from '@/components/sections/pricing'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { CTA } from '@/components/sections/cta'
import { ComponentShowcase } from '@/components/demo/component-showcase'

const features = [
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: 'Lightning Fast',
    description: 'Optimized for performance with minimal bundle size and efficient rendering.',
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Type Safe',
    description: 'Built with TypeScript for better developer experience and fewer bugs.',
  },
  {
    icon: <Rocket className="h-6 w-6 text-primary" />,
    title: 'Production Ready',
    description: 'Battle-tested components ready for your next project.',
  },
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: 'Developer First',
    description: 'Clean code architecture with reusable hooks and utilities.',
  },
  {
    icon: <Layers className="h-6 w-6 text-primary" />,
    title: 'Modular Design',
    description: 'Pick and choose only the components you need.',
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: 'Accessible',
    description: 'Built with accessibility in mind following WCAG guidelines.',
  },
]

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for side projects and experiments.',
    price: 'Free',
    features: [
      'All components included',
      'Basic documentation',
      'Community support',
      'MIT License',
    ],
    cta: { label: 'Get Started', href: '#' },
  },
  {
    name: 'Pro',
    description: 'For professional developers and teams.',
    price: '$49',
    period: 'one-time',
    features: [
      'Everything in Starter',
      'Premium components',
      'Priority support',
      'Lifetime updates',
      'Private Discord access',
    ],
    cta: { label: 'Buy Now', href: '#' },
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    description: 'For large teams with custom needs.',
    price: '$199',
    period: 'one-time',
    features: [
      'Everything in Pro',
      'Custom components',
      'Dedicated support',
      'On-demand consulting',
      'White-label license',
    ],
    cta: { label: 'Contact Sales', href: '#' },
  },
]

const testimonials = [
  {
    quote: 'This starter template saved me weeks of setup time. The components are well-designed and easy to customize.',
    author: {
      name: 'Sarah Chen',
      title: 'Frontend Developer',
    },
  },
  {
    quote: 'Finally, a template that follows best practices out of the box. The TypeScript support is excellent.',
    author: {
      name: 'Marcus Johnson',
      title: 'Tech Lead',
    },
  },
  {
    quote: 'The dark mode implementation is flawless. I use this template for all my new projects now.',
    author: {
      name: 'Emily Rodriguez',
      title: 'Full Stack Developer',
    },
  },
]

const faqItems = [
  {
    question: 'What is included in this starter template?',
    answer: 'This template includes 40+ reusable components, custom hooks, layout components, page sections, and a clean project structure. Everything you need to start building modern web applications.',
  },
  {
    question: 'Can I use this for commercial projects?',
    answer: 'Yes! This template is released under the MIT license, which means you can use it for both personal and commercial projects without any restrictions.',
  },
  {
    question: 'How do I customize the theme?',
    answer: 'The template uses CSS custom properties for theming. You can easily customize colors, fonts, and other design tokens in the globals.css file.',
  },
  {
    question: 'Is this template accessible?',
    answer: 'Yes, all components are built with accessibility in mind. We follow WCAG guidelines and use proper ARIA attributes throughout.',
  },
  {
    question: 'Do you provide support?',
    answer: 'We offer community support through GitHub issues for the free version. Pro and Enterprise customers get priority support and direct access to our team.',
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero
          badge="Next.js Starter Template"
          title="Build modern web apps faster"
          description="A production-ready starter template with 40+ components, custom hooks, and reusable page sections. Start your next project in minutes, not hours."
          primaryAction={{ label: 'Get Started', href: '#components' }}
          secondaryAction={{ label: 'View on GitHub', href: '#' }}
        />

        <Features
          title="Everything you need"
          description="A comprehensive collection of components and utilities to accelerate your development workflow."
          features={features}
        />

        <ComponentShowcase />

        <Testimonials
          title="Loved by developers"
          description="See what other developers are saying about this template."
          testimonials={testimonials}
        />

        <Pricing
          title="Simple pricing"
          description="Choose the plan that works for your needs."
          plans={pricingPlans}
        />

        <FAQ
          title="Frequently asked questions"
          description="Can't find what you're looking for? Feel free to reach out."
          items={faqItems}
        />

        <CTA
          title="Ready to get started?"
          description="Download the template and start building your next project today."
          primaryAction={{ label: 'Download Now', href: '#' }}
          secondaryAction={{ label: 'View Documentation', href: '#' }}
        />
      </main>

      <Footer />
    </div>
  )
}
