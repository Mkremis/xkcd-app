import Head from 'next/head';
import Header from '../components/Header';
import fs from "fs/promises"
import { isUtf8 } from 'buffer';

export default function Home({lastestComics}) {
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
export async function getStaticProps(context) {
 const files = await fs.readdir('./comics');
 const lastestComicsFiles = files.slice(-8, files.length);
 const promisesReadFiles = lastestComicsFiles.map(async(file)=>{
  const content = await fs.readFile(`./comics/${file}`, 'utf-8');
  return{content}
 })
const lastestComics = await Promise.all(promisesReadFiles)
  return{
    props:{
      lastestComics
    }
  }
}
