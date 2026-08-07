'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'

import { cn } from '@/components/lib/utils'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const products: { title: string; href: string; description: string; image: string }[] = [
  {
    title: 'Mica Band Heaters',
    href: '/products/mica-band-heaters',
    description: 'SS jacketed mica band heaters with Ni20Cr80 winding for faster heat-up.',
    image: '/static/products/00001.png',
  },
  {
    title: 'Ceramic Band Heater',
    href: '/products/ceramic-band-heater',
    description: 'High-temp ceramic band heaters for demanding industrial applications.',
    image: '/static/products/00002.png',
  },
  {
    title: 'Thermal Insolation Jackets',
    href: '/products/thermal-insolations',
    description: 'Thermal insulation products to cut heat loss and operating cost.',
    image: '/static/products/00003.jpeg',
  },
  {
    title: 'All Products',
    href: '/products',
    description: 'Browse the full ThermoSave catalog for the plastic industry.',
    image: '/static/products/00001.png',
  },
]

const mobileLinks = [
  { href: '/', title: 'Home' },
  { href: '/products', title: 'All Products' },
  { href: '/image-gallery', title: 'Gallery' },
  { href: '/contact', title: 'Contact Us' },
]

export function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-2">
          <Logo />
          <Link href="/" className="hidden text-sm font-semibold tracking-tight sm:inline">
            ThermoSave
          </Link>
        </div>

        <div className="hidden md:flex md:flex-1 md:justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={navigationMenuTriggerStyle()}>
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3 md:col-span-2 lg:col-span-1 lg:row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/products"
                          className="flex h-full min-h-[180px] w-full select-none flex-col justify-end overflow-hidden rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md"
                        >
                          <div className="relative h-28 w-full">
                            <Image
                              src="/static/products/00001.png"
                              alt="ThermoSave products"
                              fill
                              className="object-cover"
                              sizes="240px"
                            />
                          </div>
                          <div className="p-6 pt-4">
                            <div className="mb-2 text-lg font-medium">All Products</div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Industrial heaters, insulation, and energy-saving systems from
                              ThermoSave.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {products.map((product) => (
                      <ListItem
                        key={product.title}
                        title={product.title}
                        href={product.href}
                        image={product.image}
                      >
                        {product.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/image-gallery" className={navigationMenuTriggerStyle()}>
                    Gallery
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={navigationMenuTriggerStyle()}>
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Get Started</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1">
                {mobileLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    {link.title}
                  </Link>
                ))}
                <div className="mt-4 border-t border-border pt-4">
                  <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Products
                  </p>
                  {products.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      <span className="relative size-10 shrink-0 overflow-hidden rounded-md border border-border bg-muted">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </span>
                      <span>{product.title}</span>
                    </Link>
                  ))}
                </div>
                <Button asChild className="mt-6">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

type ListItemProps = React.ComponentPropsWithoutRef<'a'> & {
  title: string
  image: string
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
  ({ className, title, children, href, image, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href ?? '#'}
            className={cn(
              'flex select-none items-start gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <span className="relative size-12 shrink-0 overflow-hidden rounded-md border border-border bg-muted">
              <Image
                src={image}
                alt={title ?? ''}
                fill
                className="object-cover"
                sizes="48px"
              />
            </span>
            <span className="min-w-0 space-y-1">
              <span className="block text-sm font-medium leading-none">{title}</span>
              <span className="line-clamp-2 block text-sm leading-snug text-muted-foreground">
                {children}
              </span>
            </span>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'
