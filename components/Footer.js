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
      <FooterLink url="https://www.linkedin.com/in/ademaytac" icon="linkedin" />
      <FooterLink url="https://twitter.com/aytacworld" icon="twitter" />
      <FooterLink url="https://stackoverflow.com/users/7421322/aytacworld" icon="stack-overflow" />
      <FooterLink url="https://github.com/aytacworld" icon="github" />
      <FooterLink url="/rss" icon="rss" />
    </footer>
  );
}