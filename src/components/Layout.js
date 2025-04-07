import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <header className="header">
        <h1 className="title">
          <Link href="/" className="home-link">My Resume Portfolio</Link>
        </h1>
        <nav className="navigation">
          <Link className="nav-link" href="/">Home</Link>          
          <Link className="nav-link" href="/projects">Projects</Link>
          <Link className="nav-link" href="/about">About</Link>
          <Link className="nav-link" href="/contact">Contact</Link>
        </nav>
        <ThemeToggle />
      </header>
      <main className="main-content">{children}</main>
      <footer className="footer">
        <p className="footer-text">© 2023 My Portfolio</p>
      </footer>
    </div>
  );
}
