'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Phone } from 'lucide-react'

import { cn } from '@/components/lib/utils'
import Logo from '@/components/Logo'
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from '@/components/landing/constants'
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
    description: 'SS-jacketed mica bands with Ni20Cr80 winding — fast heat-up for barrels and nozzles.',
    image: '/static/products/00001.png',
  },
  {
    title: 'Ceramic Band Heaters',
    href: '/products/ceramic-band-heater',
    description: 'High-temp ceramic bands up to 1600°F — Made in Japan, open for install.',
    image: '/static/products/00002.png',
  },
  {
    title: 'Thermal Insulation Jackets',
    href: '/products/thermal-insolations',
    description: 'Removable jackets that keep heat in the melt — cut hall heat and kWh.',
    image: '/static/products/00003.jpeg',
  },
  {
    title: 'All Products',
    href: '/products',
    description: 'Browse mica, ceramic, and insulation jackets for plastic plants.',
    image: '/static/products/00001.png',
  },
]

const industries = [
  {
    title: 'Extrusion Blow Moulding',
    href: '/industries/extrusion-blow-moulding',
    description: 'Jackets for EBM barrels and die heads — cut continuous heat loss.',
    image: '/static/industries/extrusion-blow-moulding/machine-full.jpg',
  },
  {
    title: 'Extrusion Lines',
    href: '/industries/extrusion-lines',
    description: 'Jackets for continuous extruder barrels — pipe, profile, film, compounding.',
    image: '/static/industries/extrusion-lines/machine-full.jpg',
  },
  {
    title: 'Hoppers & Hopper Dryers',
    href: '/industries/hoppers',
    description: 'Jackets for hopper dryer shells — keep drying heat in the resin bed.',
    image: '/static/industries/hoppers/machine-full.jpg',
  },
  {
    title: 'All Industries',
    href: '/industries',
    description: 'Browse processes we outfit — start with the machine on your floor.',
    image: '/static/industries/extrusion-blow-moulding/head-jackets.jpg',
  },
]

const mobileLinks = [
  { href: '/', title: 'Home' },
  { href: '/products', title: 'All Products' },
  { href: '/industries', title: 'Industries' },
  { href: '/clients', title: 'Clientele' },
  { href: '/image-gallery', title: 'Gallery' },
  { href: '/contact', title: 'Contact Us' },
]

const navLinkClass =
  'bg-transparent text-stone-300 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10 data-[state=open]:bg-white/10 data-[state=open]:text-white'

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  // Keep in sync with design.md §7 DARK_HERO_ROUTES — any new dark-ink hero must be listed here.
  const hasDarkHero =
    pathname === '/' ||
    pathname === '/products' ||
    pathname === '/industries' ||
    pathname.startsWith('/industries/') ||
    pathname === '/clients' ||
    pathname.startsWith('/clients/') ||
    pathname === '/image-gallery' ||
    pathname === '/contact'
  const overHero = hasDarkHero && !scrolled

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

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
        <div className="flex items-center gap-1.5">
          <Logo />
          <Link
            href="/"
            className="hidden font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-[#f0a060] sm:inline"
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
                    className={cn(navigationMenuTriggerStyle(), navLinkClass, 'rounded-sm')}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(navLinkClass, 'rounded-sm')}>
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-3 md:w-[500px] md:grid-cols-2 lg:w-[580px]">
                    <li className="row-span-3 md:col-span-2 lg:col-span-1 lg:row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/products"
                          className="flex h-full min-h-[180px] w-full select-none flex-col justify-end overflow-hidden rounded-sm border border-white/10 bg-[#12161c] no-underline outline-none transition-colors hover:border-white/20 focus:border-white/20"
                        >
                          <div className="relative h-28 w-full">
                            <Image
                              src="/static/products/00001.png"
                              alt="ThermoSave products"
                              fill
                              className="object-cover"
                              sizes="240px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#12161c] via-[#12161c]/40 to-transparent" />
                          </div>
                          <div className="p-5 pt-3">
                            <div className="mb-1.5 font-[family-name:var(--font-display)] text-base font-semibold tracking-tight text-stone-100">
                              All Products
                            </div>
                            <p className="text-sm leading-snug text-stone-400">
                              Mica, ceramic, and insulation jackets sized for plastic plants.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {products
                      .filter((p) => p.href !== '/products')
                      .map((product) => (
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
                <NavigationMenuTrigger className={cn(navLinkClass, 'rounded-sm')}>
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[340px] gap-1 p-3">
                    {industries.map((industry) => (
                      <ListItem
                        key={industry.title}
                        title={industry.title}
                        href={industry.href}
                        image={industry.image}
                      >
                        {industry.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/clients"
                    className={cn(navigationMenuTriggerStyle(), navLinkClass, 'rounded-sm')}
                  >
                    Clientele
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/image-gallery"
                    className={cn(navigationMenuTriggerStyle(), navLinkClass, 'rounded-sm')}
                  >
                    Gallery
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={cn(navigationMenuTriggerStyle(), navLinkClass, 'rounded-sm')}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-1.5 rounded-sm px-2 py-1.5 text-sm text-stone-300 transition-colors hover:bg-white/10 hover:text-white lg:inline-flex"
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <Phone className="h-3.5 w-3.5 text-[#f0a060]" aria-hidden />
            <span className="font-medium tabular-nums">{PHONE_DISPLAY}</span>
          </a>

          <Button
            asChild
            className="hidden h-9 rounded-sm bg-[#c45c1a] px-4 text-sm font-semibold text-white shadow-none hover:bg-[#a84c14] md:inline-flex"
          >
            <Link href="/contact">Get Assessment</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-sm border-white/20 bg-transparent text-stone-100 hover:bg-white/10 hover:text-white md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100%,20rem)] border-white/10 bg-[#0c1014] text-stone-100 [&>button]:text-stone-300 [&>button]:hover:text-white [&>button]:hover:opacity-100"
            >
              <SheetHeader>
                <SheetTitle className="font-[family-name:var(--font-display)] text-left text-stone-100">
                  <span className="text-[#f0a060]">ThermoSave</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1">
                {mobileLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-sm px-3 py-2.5 text-sm font-medium text-stone-200 hover:bg-white/10 hover:text-white"
                  >
                    {link.title}
                  </Link>
                ))}

                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
                    Products
                  </p>
                  {products
                    .filter((p) => p.href !== '/products')
                    .map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-sm px-3 py-2 text-sm text-stone-200 hover:bg-white/10 hover:text-white"
                      >
                        <span className="relative size-10 shrink-0 overflow-hidden rounded-sm border border-white/10 bg-[#12161c]">
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

                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
                    Industries
                  </p>
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-sm px-3 py-2 text-sm text-stone-200 hover:bg-white/10 hover:text-white"
                    >
                      <span className="relative size-10 shrink-0 overflow-hidden rounded-sm border border-white/10 bg-[#12161c]">
                        <Image
                          src={industry.image}
                          alt={industry.title}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </span>
                      <span>{industry.title}</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-4">
                  <Button
                    asChild
                    className="h-11 rounded-sm bg-[#c45c1a] font-semibold text-white shadow-none hover:bg-[#a84c14]"
                  >
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      Get Assessment
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-sm border-stone-400/70 bg-transparent text-stone-100 hover:bg-white/10 hover:text-white"
                  >
                    <a href={`tel:${PHONE_TEL}`} onClick={() => setOpen(false)}>
                      Call — {PHONE_DISPLAY}
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-sm border-[#25D366]/50 bg-transparent text-stone-100 hover:bg-[#25D366]/10 hover:text-white"
                  >
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      WhatsApp
                    </a>
                  </Button>
                </div>
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
              'flex select-none items-start gap-3 rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10',
              className
            )}
            {...props}
          >
            <span className="relative size-12 shrink-0 overflow-hidden rounded-sm border border-white/10 bg-[#12161c]">
              <Image src={image} alt={title ?? ''} fill className="object-cover" sizes="48px" />
            </span>
            <span className="min-w-0 space-y-1.5">
              <span className="block text-sm font-medium leading-none text-stone-100">{title}</span>
              <span className="line-clamp-2 block text-sm leading-snug text-stone-400">
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
