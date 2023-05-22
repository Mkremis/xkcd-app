import Head from 'next/head';
import Header from '../components/Header';
import fs from "fs/promises";
import { Image, Link } from '@nextui-org/react';

export default function Home({lastestComics}) {
  console.log(lastestComics)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <main>
        <h2 className='text-3xl font-bold text-center mb-10'>Latest Comics</h2>
        <section className='grid grid-cols-1 gap-2 max-w-md m-auto sm:grid-cols-2'>
        {lastestComics.map(comic=>{
      return(
          <Link key={comic.id} href={`/comic/${comic.id}`}>
            <div className='mb-4 pb-4 m-auto'>
            <h3 className='font-bold text-sm text-center pb-2'>{comic.title}</h3>
          <Image width='300' height='300' layout='intrinsic' objectFit='contain' src={comic.img} alt={comic.alt}/>
          </div>
          </Link>
      
      )
    })}
        </section>
      </main>
    </div>
  );
}
export async function getStaticProps(context) {
 const files = await fs.readdir('./comics');
 const lastestComicsFiles = files.slice(-8, files.length);
 const promisesReadFiles = lastestComicsFiles.map(async(file)=>{
  const content = await fs.readFile(`./comics/${file}`, 'utf-8');
  return JSON.parse(content)
 })
const lastestComics = await Promise.all(promisesReadFiles)
  return{
    props:{
      lastestComics
    }
  }
}
