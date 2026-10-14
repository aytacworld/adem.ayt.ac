import Footer from '@components/Footer';
import Header from '@components/Header';
import Head from 'next/head';

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="grow mx-2 prose max-w-none flex justify-center content-center">
          <div className="border border-gray-300 rounded-br-3xl bg-yellow-50 p-4 max-w-[850px] w-full">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
