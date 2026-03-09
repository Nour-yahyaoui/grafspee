'use client'

import { useState, useCallback } from 'react'

interface UseCopyToClipboardReturn {
  copiedText: string | null
  copy: (text: string) => Promise<boolean>
  reset: () => void
}

export function useCopyToClipboard(
  resetDelay: number = 2000
): UseCopyToClipboardReturn {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      if (!navigator?.clipboard) {
        console.warn('Clipboard not supported')
        return false
      }

      try {
        await navigator.clipboard.writeText(text)
        setCopiedText(text)

        if (resetDelay > 0) {
          setTimeout(() => {
            setCopiedText(null)
          }, resetDelay)
        }

        return true
      } catch (error) {
        console.warn('Copy failed', error)
        setCopiedText(null)
        return false
      }
    },
    [resetDelay]
  )

  const reset = useCallback(() => {
    setCopiedText(null)
  }, [])

  return { copiedText, copy, reset }
}
