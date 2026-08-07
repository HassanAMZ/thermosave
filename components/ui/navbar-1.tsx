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
import { clients } from '@/data/clients'
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

type NavItem = {
  title: string
  href: string
  description: string
  image: string
  /** Product cutouts need a white pad; plant photos use cover. */
  imageFit?: 'contain' | 'cover'
}

const products: NavItem[] = [
  {
    title: 'Mica Band Heaters',
    href: '/products/mica-band-heaters',
    description: 'SS-jacketed mica bands with Ni20Cr80 winding — fast heat-up for barrels and nozzles.',
    image: '/static/products/cutouts/00001.png',
    imageFit: 'contain',
  },
  {
    title: 'Ceramic Band Heaters',
    href: '/products/ceramic-band-heater',
    description: 'High-temp ceramic bands up to 1600°F. Made in Pakistan. Opens for install.',
    image: '/static/products/cutouts/00002.png',
    imageFit: 'contain',
  },
  {
    title: 'Thermal Insulation Jackets',
    href: '/products/thermal-insolations',
    description: 'Removable jackets that keep heat in the melt — cut hall heat and kWh.',
    image: '/static/products/00003.jpeg',
    imageFit: 'cover',
  },
]

const industries: NavItem[] = [
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
]

const clientNavItems: NavItem[] = clients.map((client) => ({
  title: client.shortName,
  href: `/clients/${client.slug}`,
  description: client.benefit,
  image: client.coverImage,
}))

/** Beside the feature pane: 1 list column up to 5 items, 2 list columns (3-col mega) above that. */
const clientListCols = clientNavItems.length > 5 ? 2 : 1
const clientMegaCols = 1 + clientListCols
const clientRowSpan = Math.max(3, Math.ceil(clientNavItems.length / clientListCols))

const mobileLinks = [
  { href: '/products', title: 'All Products' },
  { href: '/industries', title: 'All Industries' },
  { href: '/clients', title: 'All Clientele' },
  { href: '/image-gallery', title: 'Gallery' },
  { href: '/contact', title: 'Contact Us' },
]

const navLinkClass =
  'bg-transparent text-stone-300 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10 data-[state=open]:bg-white/10 data-[state=open]:text-white'

function MegaFeature({
  href,
  title,
  description,
  image,
  imageAlt,
  imageFit = 'cover',
  rowSpan,
}: {
  href: string
  title: string
  description: string
  image: string
  imageAlt: string
  imageFit?: 'contain' | 'cover'
  rowSpan: number
}) {
  const isContain = imageFit === 'contain'
  return (
    <li
      className="md:col-span-2 lg:col-span-1"
      style={{ gridRow: `span ${rowSpan} / span ${rowSpan}` }}
    >
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="flex h-full min-h-[200px] w-full select-none flex-col overflow-hidden rounded-sm border border-white/10 bg-[#12161c] no-underline outline-none transition-colors hover:border-white/20 focus:border-white/20"
        >
          <div
            className={cn(
              'relative min-h-[120px] w-full flex-1',
              isContain ? 'bg-white' : 'bg-[#0c1014]'
            )}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className={isContain ? 'object-contain p-6 sm:p-8' : 'object-cover'}
              sizes="280px"
              unoptimized={image.includes('image.mux.com')}
            />
            {!isContain && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#12161c] via-[#12161c]/30 to-transparent" />
            )}
          </div>
          <div className="p-5 pt-3">
            <div className="mb-1.5 font-[family-name:var(--font-display)] text-base font-semibold tracking-tight text-stone-100">
              {title}
            </div>
            <p className="text-sm leading-snug text-stone-400">{description}</p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  // Keep in sync with design.md §7 DARK_HERO_ROUTES — any new dark-ink hero must be listed here.
  const hasDarkHero =
    pathname === '/' ||
    pathname === '/products' ||
    pathname.startsWith('/products/') ||
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
                <NavigationMenuTrigger className={cn(navLinkClass, 'rounded-sm')}>
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-3 md:w-[500px] md:grid-cols-2 lg:w-[580px]">
                    <MegaFeature
                      href="/products"
                      title="All Products"
                      description="Mica, ceramic, and insulation jackets sized for plastic plants."
                      image="/static/products/cutouts/00001.png"
                      imageAlt="ThermoSave products"
                      imageFit="contain"
                      rowSpan={3}
                    />
                    {products.map((product) => (
                      <ListItem
                        key={product.title}
                        title={product.title}
                        href={product.href}
                        image={product.image}
                        imageFit={product.imageFit}
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
                  <ul className="grid gap-2 p-3 md:w-[500px] md:grid-cols-2 lg:w-[580px]">
                    <MegaFeature
                      href="/industries"
                      title="All Industries"
                      description="Browse processes we outfit — start with the machine on your floor."
                      image="/static/industries/extrusion-blow-moulding/head-jackets.jpg"
                      imageAlt="ThermoSave industries"
                      imageFit="cover"
                      rowSpan={3}
                    />
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
                <NavigationMenuTrigger className={cn(navLinkClass, 'rounded-sm')}>
                  Clientele
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul
                    className={cn(
                      'grid gap-2 p-3 md:w-[540px] md:grid-cols-2',
                      clientMegaCols >= 3
                        ? 'lg:w-[860px] lg:grid-cols-3'
                        : 'lg:w-[640px]'
                    )}
                  >
                    <MegaFeature
                      href="/clients"
                      title="All Clientele"
                      description="Named Pakistan plants with jackets on the floor — photos and Mux proof."
                      image="/static/clients/eagry-force-multan/barrel-jacket.jpg"
                      imageAlt="ThermoSave client plants"
                      imageFit="cover"
                      rowSpan={clientRowSpan}
                    />
                    {clientNavItems.map((client) => (
                      <ListItem
                        key={client.href}
                        title={client.title}
                        href={client.href}
                        image={client.image}
                      >
                        {client.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
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
              <nav className="mt-8 flex flex-col gap-1 overflow-y-auto pb-8">
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

                <MobileNavGroup
                  label="Products"
                  items={products}
                  onNavigate={() => setOpen(false)}
                />
                <MobileNavGroup
                  label="Industries"
                  items={industries}
                  onNavigate={() => setOpen(false)}
                />
                <MobileNavGroup
                  label="Clientele"
                  items={clientNavItems}
                  onNavigate={() => setOpen(false)}
                />

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

function MobileNavGroup({
  label,
  items,
  onNavigate,
}: {
  label: string
  items: NavItem[]
  onNavigate: () => void
}) {
  return (
    <div className="mt-4 border-t border-white/10 pt-4">
      <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
        {label}
      </p>
      {items.map((item) => {
        const isContain = item.imageFit === 'contain'
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="flex items-center gap-3 rounded-sm px-3 py-2 text-sm text-stone-200 hover:bg-white/10 hover:text-white"
          >
            <span
              className={cn(
                'relative size-10 shrink-0 overflow-hidden rounded-sm border border-white/10',
                isContain ? 'bg-white' : 'bg-[#12161c]'
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={isContain ? 'object-contain p-1' : 'object-cover'}
                sizes="40px"
                unoptimized={item.image.includes('image.mux.com')}
              />
            </span>
            <span>{item.title}</span>
          </Link>
        )
      })}
    </div>
  )
}

type ListItemProps = React.ComponentPropsWithoutRef<'a'> & {
  title: string
  image: string
  imageFit?: 'contain' | 'cover'
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
  ({ className, title, children, href, image, imageFit = 'cover', ...props }, ref) => {
    const isContain = imageFit === 'contain'
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
            <span
              className={cn(
                'relative size-12 shrink-0 overflow-hidden rounded-sm border border-white/10',
                isContain ? 'bg-white' : 'bg-[#12161c]'
              )}
            >
              <Image
                src={image}
                alt={title ?? ''}
                fill
                className={isContain ? 'object-contain p-1.5' : 'object-cover'}
                sizes="48px"
                unoptimized={image.includes('image.mux.com')}
              />
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
