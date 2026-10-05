import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>Win Everest Construction Company Limited</p>
      <div>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}
