'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Bell, Mail, Settings, User, Plus, Check, X, ChevronRight, Inbox } from 'lucide-react'

import { Container } from '@/components/layout/container'
import { Section, SectionHeader } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Skeleton } from '@/components/ui/skeleton'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Modal, ConfirmModal } from '@/components/ui/modal'
import { CodeBlock } from '@/components/ui/code-block'
import { CopyButton } from '@/components/ui/copy-button'
import { SearchBar } from '@/components/ui/search-bar'
import { Loader, FullPageLoader } from '@/components/ui/loader'
import { ErrorState } from '@/components/ui/error-state'
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from '@/components/ui/empty'
import { Label } from '@/components/ui/label'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'

const exampleCode = `import { Button } from '@/components/ui/button'

export function MyComponent() {
  return (
    <Button variant="default">
      Click me
    </Button>
  )
}`

export function ComponentShowcase() {
  const [modalOpen, setModalOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)

  return (
    <Section id="components" className="bg-muted/30">
      <Container>
        <SectionHeader
          title="Component Library"
          description="A showcase of all available components. Copy, customize, and use in your projects."
        />

        <Tabs defaultValue="buttons" className="w-full">
          <TabsList className="mb-8 flex-wrap h-auto">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="inputs">Inputs</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="data">Data Display</TabsTrigger>
            <TabsTrigger value="utilities">Utilities</TabsTrigger>
          </TabsList>

          {/* Buttons Tab */}
          <TabsContent value="buttons" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>Different button styles for various use cases.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Button Sizes</CardTitle>
                <CardDescription>Available button sizes.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon"><Plus className="h-4 w-4" /></Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Button with Icons</CardTitle>
                <CardDescription>Buttons with leading and trailing icons.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button><Mail className="mr-2 h-4 w-4" /> Send Email</Button>
                <Button variant="outline">Continue <ChevronRight className="ml-2 h-4 w-4" /></Button>
                <Button variant="secondary"><Settings className="mr-2 h-4 w-4" /> Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Inputs Tab */}
          <TabsContent value="inputs" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Text Inputs</CardTitle>
                <CardDescription>Standard form inputs.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 max-w-md">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Type your message here" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Select & Switch</CardTitle>
                <CardDescription>Selection components.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 max-w-md">
                <div className="space-y-2">
                  <Label>Choose an option</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-3">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Search Bar</CardTitle>
                <CardDescription>Search input with debounce support.</CardDescription>
              </CardHeader>
              <CardContent className="max-w-md">
                <SearchBar
                  placeholder="Search components..."
                  onSearch={(value) => console.log('Searching:', value)}
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cards Tab */}
          <TabsContent value="cards" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Card</CardTitle>
                  <CardDescription>A simple card component.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Cards are used to group related content and actions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Learn More</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Card with Badge</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary">New</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Combine cards with badges for status indicators.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                  <CardDescription>With multiple actions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Use the footer for action buttons.
                  </p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button size="sm" variant="outline">Cancel</Button>
                  <Button size="sm">Save</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Modals</CardTitle>
                <CardDescription>Dialog and confirmation modals.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Modal
                  open={modalOpen}
                  onOpenChange={setModalOpen}
                  trigger={<Button variant="outline">Open Modal</Button>}
                  title="Modal Title"
                  description="This is a reusable modal component."
                >
                  <p className="text-sm text-muted-foreground">
                    Add any content here. The modal supports a title, description, and custom footer.
                  </p>
                </Modal>

                <ConfirmModal
                  open={confirmOpen}
                  onOpenChange={setConfirmOpen}
                  trigger={<Button variant="destructive">Delete Item</Button>}
                  title="Delete item?"
                  description="This action cannot be undone. Are you sure you want to continue?"
                  confirmLabel="Delete"
                  variant="destructive"
                  onConfirm={() => toast.success('Item deleted!')}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Toast Notifications</CardTitle>
                <CardDescription>Show toast messages for user feedback.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button onClick={() => toast.success('Success! Your changes have been saved.')}>
                  <Check className="mr-2 h-4 w-4" /> Success Toast
                </Button>
                <Button variant="destructive" onClick={() => toast.error('Error! Something went wrong.')}>
                  <X className="mr-2 h-4 w-4" /> Error Toast
                </Button>
                <Button variant="outline" onClick={() => toast.info('This is an info message.')}>
                  <Bell className="mr-2 h-4 w-4" /> Info Toast
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Loading States</CardTitle>
                <CardDescription>Various loading indicators.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center gap-8">
                <Loader size="sm" />
                <Loader size="md" />
                <Loader size="lg" />
                <Loader text="Loading..." />
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Empty State</CardTitle>
                </CardHeader>
                <CardContent>
                  <Empty>
                    <EmptyHeader>
                      <EmptyMedia variant="icon">
                        <Inbox />
                      </EmptyMedia>
                      <EmptyTitle>No items found</EmptyTitle>
                      <EmptyDescription>
                        Get started by creating your first item.
                      </EmptyDescription>
                    </EmptyHeader>
                  </Empty>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Error State</CardTitle>
                </CardHeader>
                <CardContent>
                  <ErrorState
                    title="Failed to load"
                    description="Unable to fetch data."
                    action={{ label: 'Retry', onClick: () => toast.info('Retrying...') }}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Data Display Tab */}
          <TabsContent value="data" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>Status indicators and labels.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tooltip</CardTitle>
                <CardDescription>Hover for additional information.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip!</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skeleton</CardTitle>
                <CardDescription>Loading placeholders.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accordion</CardTitle>
                <CardDescription>Expandable content sections.</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Section One</AccordionTrigger>
                    <AccordionContent>
                      Content for section one. Accordions are great for FAQs and collapsible content.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Section Two</AccordionTrigger>
                    <AccordionContent>
                      Content for section two. You can have multiple sections.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pagination</CardTitle>
                <CardDescription>Navigate between pages of content.</CardDescription>
              </CardHeader>
              <CardContent>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Utilities Tab */}
          <TabsContent value="utilities" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Code Block</CardTitle>
                <CardDescription>Display code with syntax highlighting and copy button.</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={exampleCode}
                  language="tsx"
                  title="Example.tsx"
                  showLineNumbers
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Copy Button</CardTitle>
                <CardDescription>Copy text to clipboard with visual feedback.</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <code className="rounded bg-muted px-2 py-1 text-sm">npm install @/components</code>
                <CopyButton text="npm install @/components" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dropdown Menu</CardTitle>
                <CardDescription>Contextual menus for actions.</CardDescription>
              </CardHeader>
              <CardContent>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <User className="mr-2 h-4 w-4" /> Account
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Container>
    </Section>
  )
}
