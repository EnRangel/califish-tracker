import Link from "next/link";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/map">Map</Link>
          <Link href="/login">Login</Link>
          <Link href="/about">About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
