'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/catalog', label: 'Catálogo' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const Logo = () => (
    <Link
      href="/"
      className="group flex items-center gap-2"
      onClick={() => isOpen && setIsOpen(false)}
    >
      <div className="relative">
        <Image
          src="/images/logo.png"
          alt="Logo Holtun"
          width={40}
          height={40}
          className="object-contain transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:drop-shadow-lg"
        />
      </div>

      <span className="font-headline text-xl font-bold tracking-wider text-foreground transition-colors duration-300 group-hover:text-primary">
        HOLTUN
      </span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-medium transition-colors hover:text-primary text-sm',
                pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                  ? 'text-primary'
                  : 'text-foreground/70'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Abrir menú"
            className="md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden',
          isOpen ? 'block' : 'hidden'
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 h-full w-4/5 max-w-sm transform border-r bg-background shadow-lg transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-20 items-center justify-between border-b p-4">
          <Logo />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Cerrar menú"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="mt-8 flex flex-col gap-6 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-lg font-medium transition-colors hover:text-primary',
                pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                  ? 'text-primary'
                  : 'text-foreground/70'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
