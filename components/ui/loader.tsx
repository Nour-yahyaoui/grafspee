import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
  text?: string
}

const sizeStyles = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
}

export function Loader({ size = 'md', text, className, ...props }: LoaderProps) {
  return (
    <div
      className={cn('flex items-center justify-center gap-2', className)}
      {...props}
    >
      <Loader2 className={cn('animate-spin', sizeStyles[size])} />
      {text && <span className="text-sm text-muted-foreground">{text}</span>}
    </div>
  )
}

interface FullPageLoaderProps {
  text?: string
}

export function FullPageLoader({ text = 'Loading...' }: FullPageLoaderProps) {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center">
      <Loader size="lg" text={text} />
    </div>
  )
}

interface OverlayLoaderProps {
  text?: string
}

export function OverlayLoader({ text }: OverlayLoaderProps) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <Loader size="lg" text={text} />
    </div>
  )
}
