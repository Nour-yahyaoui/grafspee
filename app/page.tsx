'use client'
import { 
  Zap, Shield, Rocket, Code, Layers, Globe, 
  ChevronDown, Mail, Settings, User, Home as H, Bell,
  AlertCircle, CheckCircle, Info, AlertTriangle,
  Menu, X, Plus, Search, Star, Trash, Edit,
  Calendar as CalendarIcon, Clock, Download, Upload, FileText,
  Moon, Sun, LogOut, Github, Twitter, Facebook, Instagram,
  Heart, Share, MoreHorizontal, Filter, RefreshCw,
  Box, Cpu, Database, Cloud, Lock, Users,
  Briefcase, Award, TrendingUp, Target, Compass, Map,
  Bold, Italic, Underline, Inbox, DollarSign,
  Copy
} from 'lucide-react'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/layout/container'
import { Section, SectionHeader } from '@/components/layout/section'
import { Hero } from '@/components/sections/hero'
import { CodeBlock } from '@/components/ui/code-block'

// UI Components
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from '@/components/ui/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from '@/components/ui/sheet'
import { Progress } from '@/components/ui/progress'
import { Slider } from '@/components/ui/slider'
import { Textarea } from '@/components/ui/textarea'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import { Skeleton } from '@/components/ui/skeleton'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Calendar } from '@/components/ui/calendar'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Spinner } from '@/components/ui/spinner'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from '@/components/ui/empty'
import { ErrorState } from '@/components/ui/error-state'
import { Loader } from '@/components/ui/loader'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupInput } from '@/components/ui/input-group'
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@/components/ui/input-otp'
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/button-group'
import { SearchBar } from '@/components/ui/search-bar'
import { CopyButton } from '@/components/ui/copy-button'
import { CodeBlock as CodeBlockComponent } from '@/components/ui/code-block'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'

import { useState, useEffect } from 'react'

// Create a client-only wrapper for Calendar to prevent hydration mismatch
function ClientCalendar({ date, onSelect }: { date?: Date; onSelect?: (date: Date | undefined) => void }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="rounded-md border p-3 w-fit">
        <div className="flex justify-center">
          <Skeleton className="h-[280px] w-[280px]" />
        </div>
      </div>
    )
  }

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={onSelect}
      className="rounded-md border"
    />
  )
}

export default function Home() {
  const [date, setDate] = useState<Date>()
  const [sliderValue, setSliderValue] = useState([50])
  const [commandOpen, setCommandOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          badge="Grafspee v2.0"
          title="Build faster with 60+ components"
          description="A complete UI toolkit with live examples, code snippets, and production-ready components. Perfect for building modern web applications."
          primaryAction={{ label: 'Get Started', href: '#components' }}
          secondaryAction={{ label: 'View on GitHub', href: '#' }}
        />

        <Container className="py-12">
          <SectionHeader
            title="Component Showcase"
            description="Explore all 60+ components with live examples and copy-paste code snippets"
          />
        </Container>

        {/* Command Dialog */}
        <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem onSelect={() => setCommandOpen(false)}>Calendar</CommandItem>
              <CommandItem onSelect={() => setCommandOpen(false)}>Search Emails</CommandItem>
              <CommandItem onSelect={() => setCommandOpen(false)}>Calculator</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>

        {/* Buttons Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Button</h2>
                <p className="text-muted-foreground">
                  Reusable button component with multiple variants, sizes, and states.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Interactive button variants</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-4">
                    <Button variant="default">Default</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon" aria-label="Icon button">
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Button } from "@/components/ui/button"

// Variants
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Star className="h-4 w-4" /></Button>`}
                    language="tsx"
                    title="Button Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Button Group Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Button Group</h2>
                <p className="text-muted-foreground">
                  Group multiple buttons together horizontally or vertically.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Button group variants</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Horizontal group</p>
                    <ButtonGroup>
                      <Button variant="outline">Left</Button>
                      <Button variant="outline">Center</Button>
                      <Button variant="outline">Right</Button>
                    </ButtonGroup>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">With icons</p>
                    <ButtonGroup>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Copy className="h-4 w-4" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash className="h-4 w-4" />
                        Delete
                      </Button>
                    </ButtonGroup>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">With separator</p>
                    <ButtonGroup>
                      <Button variant="outline">Save</Button>
                      <ButtonGroupSeparator />
                      <Button variant="outline">Cancel</Button>
                      <ButtonGroupSeparator />
                      <Button variant="outline">Reset</Button>
                    </ButtonGroup>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"

// Basic group
<ButtonGroup>
  <Button variant="outline">Left</Button>
  <Button variant="outline">Center</Button>
  <Button variant="outline">Right</Button>
</ButtonGroup>

// With separator
<ButtonGroup>
  <Button variant="outline">Save</Button>
  <ButtonGroupSeparator />
  <Button variant="outline">Cancel</Button>
</ButtonGroup>`}
                    language="tsx"
                    title="Button Group Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Badge Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Badge</h2>
                <p className="text-muted-foreground">
                  Small status indicators and labels.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Badge variants and styles</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-4">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Badge className="bg-green-500 hover:bg-green-600">Success</Badge>
                    <Badge className="bg-yellow-500 hover:bg-yellow-600">Warning</Badge>
                    <Badge className="bg-blue-500 hover:bg-blue-600">Info</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Badge } from "@/components/ui/badge"

// Variants
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>

// Custom colors
<Badge className="bg-green-500">Success</Badge>`}
                    language="tsx"
                    title="Badge Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Input Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Input</h2>
                <p className="text-muted-foreground">
                  Form input component with various types and states.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Input variants</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 max-w-sm">
                    <div className="grid gap-2">
                      <Label htmlFor="default">Default</Label>
                      <Input id="default" placeholder="Enter text..." />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="email@example.com" />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="••••••••" />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="disabled">Disabled</Label>
                      <Input id="disabled" disabled placeholder="Disabled input" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Basic input
<Label htmlFor="input">Label</Label>
<Input id="input" placeholder="Enter text..." />

// Input types
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />

// States
<Input disabled placeholder="Disabled" />`}
                    language="tsx"
                    title="Input Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Input Group Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Input Group</h2>
                <p className="text-muted-foreground">
                  Group inputs with addons and buttons.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Input group variations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2 max-w-sm">
                    <Label>With left addon</Label>
                    <InputGroup>
                      <InputGroupAddon align="inline-start">
                        <Search className="h-4 w-4" />
                      </InputGroupAddon>
                      <InputGroupInput placeholder="Search..." />
                    </InputGroup>
                  </div>

                  <div className="space-y-2 max-w-sm">
                    <Label>With right button</Label>
                    <InputGroup>
                      <InputGroupInput placeholder="Enter code" />
                      <InputGroupAddon align="inline-end">
                        <InputGroupButton>Verify</InputGroupButton>
                      </InputGroupAddon>
                    </InputGroup>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupButton } from "@/components/ui/input-group"

// With icon
<InputGroup>
  <InputGroupAddon align="inline-start">
    <Search className="h-4 w-4" />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
</InputGroup>

// With button
<InputGroup>
  <InputGroupInput placeholder="Enter code" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton>Verify</InputGroupButton>
  </InputGroupAddon>
</InputGroup>`}
                    language="tsx"
                    title="Input Group Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Input OTP Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Input OTP</h2>
                <p className="text-muted-foreground">
                  One-time password input component.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>OTP input</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <InputOTP maxLength={6}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp"

<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
                    language="tsx"
                    title="Input OTP Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Textarea Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Textarea</h2>
                <p className="text-muted-foreground">
                  Multi-line text input field.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Textarea variations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 max-w-sm">
                    <div className="grid gap-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea id="bio" placeholder="Tell us about yourself..." />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="disabled">Disabled</Label>
                      <Textarea id="disabled" placeholder="Cannot edit" disabled />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Textarea } from "@/components/ui/textarea"

// Basic textarea
<Textarea placeholder="Enter text..." />

// Disabled
<Textarea disabled placeholder="Disabled" />`}
                    language="tsx"
                    title="Textarea Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Select Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Select</h2>
                <p className="text-muted-foreground">
                  Dropdown selection component.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Select dropdown</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 max-w-sm">
                    <div className="grid gap-2">
                      <Label>Framework</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a framework" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="react">React</SelectItem>
                          <SelectItem value="vue">Vue</SelectItem>
                          <SelectItem value="angular">Angular</SelectItem>
                          <SelectItem value="svelte">Svelte</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid gap-2">
                      <Label>Disabled</Label>
                      <Select disabled>
                        <SelectTrigger>
                          <SelectValue placeholder="Disabled" />
                        </SelectTrigger>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectContent>
</Select>`}
                    language="tsx"
                    title="Select Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Checkbox Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Checkbox</h2>
                <p className="text-muted-foreground">
                  Checkbox for multiple selections.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Checkbox states</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" defaultChecked />
                    <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="disabled" disabled />
                    <Label htmlFor="disabled" className="text-muted-foreground">Disabled option</Label>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Checkbox } from "@/components/ui/checkbox"

// Basic checkbox
<Checkbox id="terms" />
<Label htmlFor="terms">Accept terms</Label>

// Checked by default
<Checkbox id="default" defaultChecked />

// Disabled
<Checkbox id="disabled" disabled />`}
                    language="tsx"
                    title="Checkbox Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Radio Group Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Radio Group</h2>
                <p className="text-muted-foreground">
                  Radio buttons for single selection.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Radio group options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup defaultValue="option1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option1" id="option1" />
                      <Label htmlFor="option1">Option 1</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option2" id="option2" />
                      <Label htmlFor="option2">Option 2</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" />
    <Label htmlFor="option2">Option 2</Label>
  </div>
</RadioGroup>`}
                    language="tsx"
                    title="Radio Group Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Switch Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Switch</h2>
                <p className="text-muted-foreground">
                  Toggle switch for binary settings.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Switch states</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Switch id="airplane" />
                    <Label htmlFor="airplane">Airplane Mode</Label>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Switch id="notifications" defaultChecked />
                    <Label htmlFor="notifications">Enable Notifications</Label>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Switch id="disabled" disabled />
                    <Label htmlFor="disabled" className="text-muted-foreground">Disabled</Label>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Switch } from "@/components/ui/switch"

// Basic switch
<Switch id="option" />
<Label htmlFor="option">Option Label</Label>

// Checked by default
<Switch id="default" defaultChecked />

// Disabled
<Switch id="disabled" disabled />`}
                    language="tsx"
                    title="Switch Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Slider Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Slider</h2>
                <p className="text-muted-foreground">
                  Range slider for numeric input.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Slider variations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Single slider</Label>
                      <span className="text-sm text-muted-foreground">{sliderValue[0]}%</span>
                    </div>
                    <Slider 
                      value={sliderValue} 
                      onValueChange={setSliderValue} 
                      max={100} 
                      step={1}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Range slider</Label>
                    <Slider defaultValue={[25, 75]} max={100} step={1} />
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Slider } from "@/components/ui/slider"

// Single value
<Slider defaultValue={[50]} max={100} step={1} />

// Range (two handles)
<Slider defaultValue={[25, 75]} max={100} step={1} />`}
                    language="tsx"
                    title="Slider Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Progress Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Progress</h2>
                <p className="text-muted-foreground">
                  Show progress indicators.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Progress bar</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Loading...</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Uploading</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="[&>div]:bg-green-500" />
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Progress } from "@/components/ui/progress"

// Determinate
<Progress value={45} />

// Custom color
<Progress value={75} className="[&>div]:bg-green-500" />`}
                    language="tsx"
                    title="Progress Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Tabs Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Tabs</h2>
                <p className="text-muted-foreground">
                  Organize content into separate views.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Tabbed interface</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="account">Account</TabsTrigger>
                      <TabsTrigger value="password">Password</TabsTrigger>
                      <TabsTrigger value="settings">Settings</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className="space-y-4 p-4">
                      <p className="text-sm">Account settings go here.</p>
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="John Doe" />
                      </div>
                    </TabsContent>
                    <TabsContent value="password" className="space-y-4 p-4">
                      <p className="text-sm">Change your password.</p>
                      <div className="grid gap-2">
                        <Label htmlFor="current">Current password</Label>
                        <Input id="current" type="password" />
                      </div>
                    </TabsContent>
                    <TabsContent value="settings" className="space-y-4 p-4">
                      <p className="text-sm">Manage preferences.</p>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="notifications" />
                        <Label htmlFor="notifications">Enable notifications</Label>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>`}
                    language="tsx"
                    title="Tabs Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Accordion Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Accordion</h2>
                <p className="text-muted-foreground">
                  Collapsible content sections.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Accordion component</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is this template?</AccordionTrigger>
                      <AccordionContent>
                        This is a comprehensive component library with 60+ reusable components built with React, TypeScript, and Tailwind CSS.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How do I customize it?</AccordionTrigger>
                      <AccordionContent>
                        All components support className props for custom styling. You can also modify the theme in your globals.css file.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question?</AccordionTrigger>
    <AccordionContent>Answer.</AccordionContent>
  </AccordionItem>
</Accordion>`}
                    language="tsx"
                    title="Accordion Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Card Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Card</h2>
                <p className="text-muted-foreground">
                  Container for grouping related content.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Card variations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Simple Card</CardTitle>
                        <CardDescription>Basic card with content</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>This is a basic card with some content.</p>
                      </CardContent>
                      <CardFooter>
                        <Button>Action</Button>
                      </CardFooter>
                    </Card>

                    <Card className="bg-primary text-primary-foreground">
                      <CardHeader>
                        <CardTitle>Featured Card</CardTitle>
                        <CardDescription className="text-primary-foreground/80">
                          Primary color scheme
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>This card uses the primary color.</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="secondary">Learn More</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
                    language="tsx"
                    title="Card Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Alert Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Alert</h2>
                <p className="text-muted-foreground">
                  Display important messages and feedback.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Alert variants</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                      This is an informational alert.
                    </AlertDescription>
                  </Alert>

                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Something went wrong. Please try again.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-green-500">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>
                      Your changes have been saved.
                    </AlertDescription>
                  </Alert>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Default alert
<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>

// Destructive variant
<Alert variant="destructive">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Error message</AlertDescription>
</Alert>`}
                    language="tsx"
                    title="Alert Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Dialog Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Dialog</h2>
                <p className="text-muted-foreground">
                  Modal dialog for user interactions.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Dialog components</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Open Dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" defaultValue="John Doe" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">Delete Account</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <div>Content</div>
  </DialogContent>
</Dialog>`}
                    language="tsx"
                    title="Dialog Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Dropdown Menu Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Dropdown Menu</h2>
                <p className="text-muted-foreground">
                  Accessible dropdown menu component.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Dropdown menu</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          <Menu className="mr-2 h-4 w-4" />
                          Open Menu
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            Profile
                            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <LogOut className="mr-2 h-4 w-4" />
                          Log out
                          <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Label</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
                    language="tsx"
                    title="Dropdown Menu Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Tooltip Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Tooltip</h2>
                <p className="text-muted-foreground">
                  Display informative tooltips on hover.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Tooltip placements</CardDescription>
                </CardHeader>
                <CardContent>
                  <TooltipProvider>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline">Hover</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Simple tooltip</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline">
                            <Info className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p>More information</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Tooltip content</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
                    language="tsx"
                    title="Tooltip Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Popover Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Popover</h2>
                <p className="text-muted-foreground">
                  Floating card with content.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Popover component</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline">Open Popover</Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <h4 className="font-medium leading-none">Dimensions</h4>
                            <p className="text-sm text-muted-foreground">
                              Set the dimensions for the layer.
                            </p>
                          </div>
                          <div className="grid gap-2">
                            <div className="grid grid-cols-3 items-center gap-4">
                              <Label htmlFor="width">Width</Label>
                              <Input
                                id="width"
                                defaultValue="100%"
                                className="col-span-2 h-8"
                              />
                            </div>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

<Popover>
  <PopoverTrigger asChild>
    <Button>Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div>Content goes here</div>
  </PopoverContent>
</Popover>`}
                    language="tsx"
                    title="Popover Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Hover Card Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Hover Card</h2>
                <p className="text-muted-foreground">
                  Preview content on hover.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Hover card</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button variant="link">@username</Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="flex justify-between space-x-4">
                          <Avatar>
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold">@johndoe</h4>
                            <p className="text-sm">
                              Full-stack developer and open source contributor.
                            </p>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

<HoverCard>
  <HoverCardTrigger asChild>
    <Button>Hover</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <div>Preview content</div>
  </HoverCardContent>
</HoverCard>`}
                    language="tsx"
                    title="Hover Card Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Table Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Table</h2>
                <p className="text-muted-foreground">
                  Display tabular data.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Data table</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableCaption>Recent invoices</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV002</TableCell>
                        <TableCell>Pending</TableCell>
                        <TableCell>PayPal</TableCell>
                        <TableCell className="text-right">$150.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Header</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Cell</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
                    language="tsx"
                    title="Table Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Pagination Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Pagination</h2>
                <p className="text-muted-foreground">
                  Navigate through pages.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Pagination component</CardDescription>
                </CardHeader>
                <CardContent>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
                    language="tsx"
                    title="Pagination Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Avatar Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Avatar</h2>
                <p className="text-muted-foreground">
                  User avatar with fallback.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Avatar variations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-6">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
                    </Avatar>
                    
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-secondary">AB</AvatarFallback>
                    </Avatar>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// With image
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

// Fallback only
<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
                    language="tsx"
                    title="Avatar Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Breadcrumb Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Breadcrumb</h2>
                <p className="text-muted-foreground">
                  Navigation breadcrumb trail.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Breadcrumb navigation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
                    language="tsx"
                    title="Breadcrumb Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Calendar Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Calendar</h2>
                <p className="text-muted-foreground">
                  Date picker calendar.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Calendar component</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <ClientCalendar date={date} onSelect={setDate} />
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

const [date, setDate] = useState<Date>()

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`}
                    language="tsx"
                    title="Calendar Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Scroll Area Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Scroll Area</h2>
                <p className="text-muted-foreground">
                  Custom scrollable area.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Scrollable container</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                    <div className="space-y-4">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="text-sm">
                          Item {i + 1}: Lorem ipsum dolor sit amet
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { ScrollArea } from "@/components/ui/scroll-area"

<ScrollArea className="h-[200px] w-full rounded-md border p-4">
  <div className="space-y-4">
    {items.map((item) => (
      <div key={item.id}>{item.content}</div>
    ))}
  </div>
</ScrollArea>`}
                    language="tsx"
                    title="Scroll Area Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Separator Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Separator</h2>
                <p className="text-muted-foreground">
                  Visual divider between elements.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Separator variants</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-sm">Horizontal separator:</p>
                    <Separator className="my-4" />
                  </div>
                  
                  <div className="flex h-20 items-center gap-4">
                    <p className="text-sm">Left</p>
                    <Separator orientation="vertical" />
                    <p className="text-sm">Right</p>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Separator } from "@/components/ui/separator"

// Horizontal
<Separator />

// Vertical
<Separator orientation="vertical" />`}
                    language="tsx"
                    title="Separator Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Skeleton Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Skeleton</h2>
                <p className="text-muted-foreground">
                  Loading placeholder animations.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Skeleton loading</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Skeleton } from "@/components/ui/skeleton"

// Avatar skeleton
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>

// Text skeleton
<Skeleton className="h-4 w-full" />`}
                    language="tsx"
                    title="Skeleton Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Toggle Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Toggle</h2>
                <p className="text-muted-foreground">
                  Two-state button for on/off actions.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Toggle button</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-4">
                    <Toggle aria-label="Toggle bold">
                      <Bold className="h-4 w-4" />
                    </Toggle>
                    <Toggle aria-label="Toggle italic">
                      <Italic className="h-4 w-4" />
                    </Toggle>
                    <Toggle aria-label="Toggle underline">
                      <Underline className="h-4 w-4" />
                    </Toggle>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <ToggleGroup type="multiple">
                      <ToggleGroupItem value="bold" aria-label="Toggle bold">
                        <Bold className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="italic" aria-label="Toggle italic">
                        <Italic className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="underline" aria-label="Toggle underline">
                        <Underline className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

// Basic toggle
<Toggle aria-label="Toggle">
  <Bell className="h-4 w-4" />
</Toggle>

// Toggle group
<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
  <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
</ToggleGroup>`}
                    language="tsx"
                    title="Toggle Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* KBD Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">KBD</h2>
                <p className="text-muted-foreground">
                  Keyboard key indicator.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Keyboard shortcuts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-4">
                    <Kbd>⌘</Kbd>
                    <Kbd>⌥</Kbd>
                    <Kbd>⇧</Kbd>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <KbdGroup>
                      <Kbd>⌘</Kbd>
                      <Kbd>K</Kbd>
                    </KbdGroup>
                    
                    <KbdGroup>
                      <Kbd>Ctrl</Kbd>
                      <Kbd>+</Kbd>
                      <Kbd>C</Kbd>
                    </KbdGroup>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Kbd, KbdGroup } from "@/components/ui/kbd"

// Single key
<Kbd>⌘</Kbd>

// Key combination
<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>`}
                    language="tsx"
                    title="KBD Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Empty State Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Empty State</h2>
                <p className="text-muted-foreground">
                  Display when no data is available.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Empty state variants</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Empty>
                      <EmptyHeader>
                        <EmptyMedia variant="icon">
                          <Inbox className="h-6 w-6" />
                        </EmptyMedia>
                        <EmptyTitle>No messages</EmptyTitle>
                        <EmptyDescription>
                          You don't have any messages yet.
                        </EmptyDescription>
                      </EmptyHeader>
                      <EmptyContent>
                        <Button>New Message</Button>
                      </EmptyContent>
                    </Empty>

                    <ErrorState
                      title="Failed to load"
                      description="There was an error loading the data."
                      action={{
                        label: "Try again",
                        onClick: () => {}
                      }}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia } from "@/components/ui/empty"
import { ErrorState } from "@/components/ui/error-state"

// Empty state
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Inbox className="h-6 w-6" />
    </EmptyMedia>
    <EmptyTitle>No data</EmptyTitle>
    <EmptyDescription>Description</EmptyDescription>
  </EmptyHeader>
</Empty>

// Error state
<ErrorState
  title="Error"
  description="Description"
  action={{ label: "Retry", onClick: handleRetry }}
/>`}
                    language="tsx"
                    title="Empty State Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Search Bar Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Search Bar</h2>
                <p className="text-muted-foreground">
                  Search input with debounce and clear.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Search component</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="max-w-sm">
                    <SearchBar 
                      placeholder="Search..." 
                      onSearch={(value) => console.log(value)}
                      showClearButton
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { SearchBar } from "@/components/ui/search-bar"

<SearchBar 
  placeholder="Search..."
  onSearch={(value) => console.log(value)}
  showClearButton
/>`}
                    language="tsx"
                    title="Search Bar Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Copy Button Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Copy Button</h2>
                <p className="text-muted-foreground">
                  Button with copy to clipboard functionality.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Copy button</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <code className="rounded bg-muted px-3 py-2 text-sm">
                      npm install my-package
                    </code>
                    <CopyButton text="npm install my-package" />
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { CopyButton } from "@/components/ui/copy-button"

<CopyButton text="Text to copy" />`}
                    language="tsx"
                    title="Copy Button Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Sheet Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Sheet</h2>
                <p className="text-muted-foreground">
                  Side panel that slides in.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Sheet component</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline">Open Sheet</Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Edit Profile</SheetTitle>
                          <SheetDescription>
                            Make changes to your profile here.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="sheet-name">Name</Label>
                            <Input id="sheet-name" defaultValue="John Doe" />
                          </div>
                        </div>
                        <SheetFooter>
                          <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                          </SheetClose>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

<Sheet>
  <SheetTrigger asChild>
    <Button>Open</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>Description</SheetDescription>
    </SheetHeader>
    <div>Content</div>
  </SheetContent>
</Sheet>`}
                    language="tsx"
                    title="Sheet Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Carousel Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Carousel</h2>
                <p className="text-muted-foreground">
                  Image/card carousel.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Carousel</CardDescription>
                </CardHeader>
                <CardContent>
                  <Carousel className="w-full max-w-sm mx-auto">
                    <CarouselContent>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <CarouselItem key={i}>
                          <div className="flex aspect-square items-center justify-center rounded-lg border bg-muted p-6">
                            <span className="text-4xl font-semibold">{i}</span>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

<Carousel>
  <CarouselContent>
    {items.map((item) => (
      <CarouselItem key={item.id}>
        <div>{item.content}</div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
                    language="tsx"
                    title="Carousel Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Toast Notifications */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Toast</h2>
                <p className="text-muted-foreground">
                  Temporary notification messages.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Toast notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="outline"
                      onClick={() => toast("Default notification")}
                    >
                      Default Toast
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => toast.success("Success!", {
                        description: "Operation completed",
                      })}
                    >
                      Success Toast
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => toast.error("Error!", {
                        description: "Something went wrong",
                      })}
                    >
                      Error Toast
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { toast } from "sonner"

// Basic toast
toast("Message")

// Success toast
toast.success("Success!")

// Error toast
toast.error("Error!")`}
                    language="tsx"
                    title="Toast Examples"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Code Block Section */}
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Code Block</h2>
                <p className="text-muted-foreground">
                  Syntax highlighted code display.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Live Example</CardTitle>
                  <CardDescription>Code block with copy</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlockComponent
                    code={`function hello() {
  console.log("Hello, world!");
}`}
                    language="javascript"
                    title="example.js"
                    showLineNumbers
                  />
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <h4 className="font-medium">Code Example</h4>
                  <CodeBlockComponent
                    code={`import { CodeBlock } from "@/components/ui/code-block"

<CodeBlock
  code={code}
  language="javascript"
  title="example.js"
  showLineNumbers
/>`}
                    language="tsx"
                    title="Code Block Usage"
                  />
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Add Toaster */}
        <Toaster />
      </main>

      <Footer />
    </div>
  )
}