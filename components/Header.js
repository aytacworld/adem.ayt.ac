import Link from 'next/link';

const HeaderLink = ({ url, label }) => (
  <Link href={url} className="mx-1">
    {label}
  </Link>
);

export default function Header() {
  return (
    <header className="flex justify-center p-1">
      <HeaderLink url="/" label="anasayfa" />
      |
      <HeaderLink url="/about" label="hakkımda" />
      |
      <HeaderLink url="/cv" label="CV" />
      |
      <HeaderLink url="/archive" label="arşif" />
    </header>
  );
}
