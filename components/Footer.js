import Link from 'next/link';
import { version } from '../package.json';

const items = [
  [0, 'https://www.instagram.com/aytacworld2', 'instagram', true],
  [1, 'https://www.facebook.com/aytacworld', 'facebook', true],
  [2, 'https://www.facebook.com/profile.php?id=61594075387955&sk=about', 'facebook', true],
  [3, '/rss', 'rss'],
];

const FooterLink = ({ url, icon, si }) => {
  const lib = si ? 'si-fit si' : 'mdi mdi';

  return (
    <Link href={url} className="text-2xl mr-1.5" target="_blank">
      <i className={`${lib}-${icon}`}></i>
    </Link>
  );
};

export default function Footer() {
  return (
    <footer className="flex justify-center items-center p-1">
      {items.map((x) => (
        <FooterLink key={x[0]} url={x[1]} icon={x[2]} si={x[3]} />
      ))}
      (v{version})
    </footer>
  );
}
