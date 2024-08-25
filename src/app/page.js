import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href="/dashboard">Navbar</Link>
      <Link href="/dashboard">Heroic</Link>
      <Link href="/dashboard">Side Bar</Link>
      <Link href="/dashboard">services</Link>
      <Link href="/dashboard">footer</Link>
    </main>
  );
}
