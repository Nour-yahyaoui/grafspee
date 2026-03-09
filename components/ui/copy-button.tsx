'use client'

import { Check, Copy } from 'lucide-react'
import { Button, type buttonVariants } from '@/components/ui/button'
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'

interface CopyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text: string
  onCopy?: () => void
}

export function CopyButton({
  text,
  onCopy,
  variant = 'ghost',
  size = 'icon-sm',
  className,
  ...props
}: CopyButtonProps) {
  const { copiedText, copy } = useCopyToClipboard()
  const isCopied = copiedText === text

  const handleCopy = async () => {
    await copy(text)
    onCopy?.()
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={cn('relative', className)}
      onClick={handleCopy}
      aria-label={isCopied ? 'Copied' : 'Copy to clipboard'}
      {...props}
    >
      <span className="sr-only">{isCopied ? 'Copied' : 'Copy'}</span>
      {isCopied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  )
}
