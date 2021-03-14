import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="flex justify-center p-1">

        <Link href="/">
          <a className="mx-1">home</a>
        </Link>
        |
        <Link href="/portfolio">
          <a className="mx-1">portfolio</a>
        </Link>
        |
        <Link href="/archive">
          <a className="mx-1">archive</a>
        </Link>

      </header>
    </>
  );
}