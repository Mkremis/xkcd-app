import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Header />
      </main>
    </div>
  );
}
export async function getStaticProps(context) {}
