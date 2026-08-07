'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
    title: 'Thermal Insulation Jackets',
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
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  const isHome = pathname === '/'
  const overHero = isHome && !scrolled

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-300',
        overHero
          ? 'border-b border-transparent bg-transparent'
          : 'border-b border-white/10 bg-[#0c1014]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0c1014]/90'
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-2">
          <Logo />
          <Link
            href="/"
            className="hidden font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-stone-100 sm:inline"
          >
            ThermoSave
          </Link>
        </div>

        <div className="hidden md:flex md:flex-1 md:justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'bg-transparent text-stone-200 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10'
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-stone-200 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white">
                  Products
                </NavigationMenuTrigger>
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
                  <Link
                    href="/image-gallery"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'bg-transparent text-stone-200 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10'
                    )}
                  >
                    Gallery
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'bg-transparent text-stone-200 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10'
                    )}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden rounded-sm bg-[#c45c1a] text-white shadow-none hover:bg-[#a84c14] md:inline-flex"
          >
            <Link href="/contact">Get Assessment</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 bg-transparent text-stone-100 hover:bg-white/10 hover:text-white md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100%,20rem)] border-white/10 bg-[#0c1014] text-stone-100"
            >
              <SheetHeader>
                <SheetTitle className="font-[family-name:var(--font-display)] text-stone-100">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1">
                {mobileLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-sm px-3 py-2 text-sm font-medium text-stone-200 hover:bg-white/10 hover:text-white"
                  >
                    {link.title}
                  </Link>
                ))}
                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wide text-stone-500">
                    Products
                  </p>
                  {products.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-sm px-3 py-2 text-sm text-stone-200 hover:bg-white/10 hover:text-white"
                    >
                      <span className="relative size-10 shrink-0 overflow-hidden rounded-sm border border-white/10 bg-white/5">
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
                <Button
                  asChild
                  className="mt-6 rounded-sm bg-[#c45c1a] text-white hover:bg-[#a84c14]"
                >
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Get Assessment
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
              <Image src={image} alt={title ?? ''} fill className="object-cover" sizes="48px" />
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
