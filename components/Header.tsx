'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useUI } from '@/store/ui';
import { useTheme } from '@/store/theme';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const { mobileMenuOpen, toggleMobileMenu } = useUI();
  const { isDark, toggleTheme } = useTheme();

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToContactForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleGetConsultationClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    if (pathname === '/contact') {
      e.preventDefault();
      scrollToContactForm();
      if (mobileMenuOpen) toggleMobileMenu();
    }
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Technologies', href: '/technologies' },
    { label: 'Who We Are', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-lg border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-gradient-to-br from-accent to-emerald-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-accent/30 transition-all duration-300 transform group-hover:scale-105">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <span className="hidden sm:block font-bold text-lg bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">NarixSolutions</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  active
                    ? 'text-accent bg-accent/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-teal-500 to-emerald-700 rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Theme Toggle & CTA */}
        <div className="hidden md:flex items-center gap-3">
          {isMounted && (
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-secondary hover:bg-muted transition-colors text-foreground"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <Link
            href="/contact#contact-form"
            onClick={handleGetConsultationClick}
            className="bg-gradient-to-r from-accent to-emerald-800 text-accent-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/50 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                    active
                      ? 'text-accent bg-accent/10'
                      : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                  }`}
                  onClick={() => toggleMobileMenu()}
                >
                  {item.label}
                </Link>
              );
            })}
            {isMounted && (
              <button
                onClick={() => {
                  toggleTheme();
                  toggleMobileMenu();
                }}
                className="w-full p-2.5 rounded-lg bg-secondary hover:bg-muted transition-colors text-foreground text-sm font-medium flex items-center justify-center gap-2"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
            )}
            <Link
              href="/contact#contact-form"
              className="block bg-gradient-to-r from-accent to-emerald-800 text-accent-foreground px-4 py-2.5 rounded-lg text-center font-semibold hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 mt-4"
              onClick={(e) => {
                handleGetConsultationClick(e);
                if (pathname !== '/contact') toggleMobileMenu();
              }}
            >
              Get Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
