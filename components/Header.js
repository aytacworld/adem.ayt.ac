import Link from 'next/link';

const HeaderLink = ({ url, label }) => (
  <Link href={url}>
    <a className="mx-1">{label}</a>
  </Link>
);

export default function Header() {
  return (
    <header className="flex justify-center p-1">
      <HeaderLink url="/" label="home" />
      |
      <HeaderLink url="/about" label="about" />
      |
      <HeaderLink url="/archive" label="archive" />
    </header>
  );
}