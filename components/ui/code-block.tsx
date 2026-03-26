'use client'

import { CopyButton } from './copy-button'
import { cn } from '@/lib/utils'

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string
  language?: string
  showLineNumbers?: boolean
  showCopyButton?: boolean
  title?: string
  maxHeight?: string
}

export function CodeBlock({
  code,
  language = 'typescript',
  showLineNumbers = false,
  showCopyButton = true,
  title,
  maxHeight = 'auto',
  className,
  ...props
}: CodeBlockProps) {
  const lines = code.trim().split('\n')

  return (
    <div className="relative rounded-lg border bg-muted/50 overflow-hidden">
      {/* Header */}
      {(title || showCopyButton) && (
        <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-2">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            {title && (
              <span className="text-sm font-medium text-muted-foreground truncate">
                {title}
              </span>
            )}
            {language && !title && (
              <span className="text-xs uppercase text-muted-foreground shrink-0">
                {language}
              </span>
            )}
          </div>
          {showCopyButton && <CopyButton text={code} />}
        </div>
      )}

      {/* Code Container - Scrollable */}
      <div 
        className="overflow-x-auto overflow-y-auto"
        style={{ maxHeight: maxHeight !== 'auto' ? maxHeight : undefined }}
      >
        <pre
          className={cn(
            'p-4 text-sm font-mono leading-relaxed',
            className
          )}
          {...props}
        >
          <code className="text-foreground block w-max min-w-full">
            {showLineNumbers
              ? lines.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="w-8 shrink-0 select-none text-muted-foreground text-right pr-4 sticky left-0 bg-muted/50">
                      {i + 1}
                    </span>
                    <span className="whitespace-pre">
                      {line || ' '}
                    </span>
                  </div>
                ))
              : code.trim().split('\n').map((line, i) => (
                  <div key={i} className="whitespace-pre">
                    {line || ' '}
                  </div>
                ))}
          </code>
        </pre>
      </div>
    </div>
  )
}