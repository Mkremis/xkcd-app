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
        <h2>Latest Comics</h2>
    {lastestComics.map(comic=>{
      return(
          <Link key={comic.id} href={`/comic/${comic.id}`}>
          <Image layout="fill" src={comic.img} alt={comic.alt}/>
          </Link>
      )
    })}
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
