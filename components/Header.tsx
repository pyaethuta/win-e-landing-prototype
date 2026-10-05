'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/safety', label: 'Safety' },
    { href: '/sustainability', label: 'Sustainability' },
    { href: '/articles', label: 'Articles' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`site-header ${isScrolled ? 'is-scrolled' : ''} ${isMenuOpen ? 'is-open' : ''}`}
      data-header
    >
      <Link href="/" className="brand brand-logo-link" aria-label="Win Everest home">
        <img
          src="/assets/win-everest-main-logo.png"
          alt="Win Everest Company Limited"
          className="brand-logo"
        />
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Open navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        data-menu-toggle
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`main-nav ${isMenuOpen ? 'is-open' : ''}`} data-nav>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
