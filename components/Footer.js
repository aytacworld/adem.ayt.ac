import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="flex justify-center p-1">
        <Link href="https://github.com/aytacworld/adem.ayt.ac">
          <a className="text-2xl">
            <i className="mdi mdi-github"></i>
          </a>
        </Link>
      </footer>
    </>
  );
}