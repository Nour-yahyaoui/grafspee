'use client'

import { CopyButton } from './copy-button'
import { cn } from '@/lib/utils'

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string
  language?: string
  showLineNumbers?: boolean
  showCopyButton?: boolean
  title?: string
}

export function CodeBlock({
  code,
  language = 'typescript',
  showLineNumbers = false,
  showCopyButton = true,
  title,
  className,
  ...props
}: CodeBlockProps) {
  const lines = code.trim().split('\n')

  return (
    <div className="relative rounded-lg border bg-muted/50 overflow-hidden">
      {/* Header */}
      {(title || showCopyButton) && (
        <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-2">
          <div className="flex items-center gap-2">
            {title && (
              <span className="text-sm font-medium text-muted-foreground">
                {title}
              </span>
            )}
            {language && !title && (
              <span className="text-xs uppercase text-muted-foreground">
                {language}
              </span>
            )}
          </div>
          {showCopyButton && <CopyButton text={code} />}
        </div>
      )}

      {/* Code */}
      <div className="overflow-x-auto">
        <pre
          className={cn(
            'p-4 text-sm font-mono leading-relaxed',
            className
          )}
          {...props}
        >
          <code className="text-foreground">
            {showLineNumbers
              ? lines.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="w-8 shrink-0 select-none text-muted-foreground text-right pr-4">
                      {i + 1}
                    </span>
                    <span>{line}</span>
                  </div>
                ))
              : code.trim()}
          </code>
        </pre>
      </div>
    </div>
  )
}
