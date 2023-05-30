import fs from "fs/promises";
import { Image, Link } from '@nextui-org/react';
import Layout from 'components/Layout';
import { useI18N } from "context/i18n";


export default function Home({lastestComics}) {
const {translations} = useI18N();
  return (
    <Layout title={'xkcd - Home Page'} description={'Comics for developers'}>
    <h2 className='text-3xl font-bold text-center mb-10'>{translations("LATEST_COMICS")}</h2>
        <section className='grid grid-cols-1 gap-2 m-auto sm:grid-cols-2 md:grid-cols-3 items-baseline justify-items-center'>
        {lastestComics.map(comic=>{
      return(
          <Link key={comic.id} href={`/comic/${comic.id}`}>
            <div className='mb-4 pb-4 m-auto'>
            <h3 className='font-bold text-sm text-center pb-2'>{comic.title}</h3>
          <Image width={comic.width} height={comic.height} src={comic.img} alt={comic.alt}/>
          </div>
          </Link>
      
      )
    })}
        </section>
    </Layout>
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
