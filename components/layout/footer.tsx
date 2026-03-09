import Link from 'next/link'
import { Container } from './container'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  logo?: React.ReactNode
  columns?: FooterColumn[]
  bottomText?: string
  socialLinks?: React.ReactNode
}

const defaultColumns: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Cookies', href: '/cookies' },
    ],
  },
]

export function Footer({
  logo,
  columns = defaultColumns,
  bottomText,
  socialLinks,
}: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/30">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              {logo || (
                <Link href="/" className="text-xl font-bold">
                  Logo
                </Link>
              )}
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                A modern starter template for your next project. Built with Next.js,
                TypeScript, and Tailwind CSS.
              </p>
              {socialLinks && <div className="mt-6">{socialLinks}</div>}
            </div>

            {/* Footer Columns */}
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <p className="text-center text-sm text-muted-foreground">
            {bottomText || `© ${currentYear} Your Company. All rights reserved.`}
          </p>
        </div>
      </Container>
    </footer>
  )
}
