'use client'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { Button } from '@/components/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/components/ui/sheet'
import { cn } from '@/components/lib/utils'

const NavLinks = headerNavLinks.map((link, index) => (
  <Link
    key={index}
    href={link.href}
    className="px-2 py-1 rounded-md hover:bg-red-500 hover:text-white transition-colors"
  >
    {link.title}
  </Link>
))

export default function NavBar() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 border-b">
      <div className="container mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {headerNavLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-2 py-1 rounded-md hover:bg-red-500 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">{NavLinks}</nav>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
            }
            aria-label="Toggle theme"
          >
            {theme === 'dark' || resolvedTheme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  )
}
