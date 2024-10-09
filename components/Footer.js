import Link from 'next/link';

const FooterLink = ({ url, icon }) => (
  <Link href={url}>
    <a className="text-2xl mr-1.5" target="_blank">
      <i className={`mdi mdi-${icon}`}></i>
    </a>
  </Link>
);

export default function Footer() {
  return (
    <footer className="flex justify-center p-1">
      <FooterLink url="/rss" icon="rss" />
    </footer>
  );
}
