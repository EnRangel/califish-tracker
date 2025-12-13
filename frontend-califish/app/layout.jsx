import Link from "next/link";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/map">Map</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
