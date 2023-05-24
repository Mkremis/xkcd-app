import Head from 'next/head';
import Header from 'components/Header.js';
import Footer  from 'components/Footer';
export default function Layout({children, title, description}){

    return(
        <>
        <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>{title || 'xkcd - Comics for developers'}</title>
        <meta name='description' content={description || 'Comics for developers'}/>
        <link rel='icon' href=''/>
      </Head>
      <Header/>
      <main className='max-w-xl m-auto'>
        {children}
      </main>
      <Footer/>

      </>
    )

}