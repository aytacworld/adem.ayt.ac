import Link from 'next/link';
import { version } from '../package.json';

const items = [
  [0, 'https://www.instagram.com/aytacworld2', 'instagram', 'Instagram profile', true],
  [1, 'https://www.facebook.com/aytacworld', 'facebook', 'Company Facebook profile', true],
  [
    2,
    'https://www.facebook.com/profile.php?id=61594075387955&sk=about',
    'facebook',
    'Facebook profile',
    true,
  ],
  [3, '/rss', 'rss', 'RSS feed'],
];

const FooterLink = ({ url, icon, label, si }) => {
  const lib = si ? 'si-fit si' : 'mdi mdi';

  return (
    <Link href={url} className="text-2xl mr-1.5" target="_blank" aria-label={`${label}`}>
      <i className={`${lib}-${icon}`}></i>
    </Link>
  );
};

export default function Footer() {
  return (
    <footer className="flex justify-center items-center p-1">
      {items.map((x) => (
        <FooterLink key={x[0]} url={x[1]} icon={x[2]} label={x[3]} si={x[4]} />
      ))}
      (v{version})
    </footer>
  );
}
