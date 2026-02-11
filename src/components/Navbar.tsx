"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl tracking-tight">Otima</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="#services" className="transition-colors hover:text-primary">
            Serviços
          </Link>
          <Link href="#about" className="transition-colors hover:text-primary">
            Sobre
          </Link>
          <Link href="#contact" className="transition-colors hover:text-primary">
            Contato
          </Link>
          <Link 
            href="#contact" 
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Fale Conosco
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              href="#services" 
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              href="#about" 
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              href="#contact" 
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
            <Link 
              href="#contact"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              onClick={() => setIsOpen(false)}
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
