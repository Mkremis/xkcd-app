import { Image } from '@nextui-org/react';
import {readFile, stat, readdir} from 'fs/promises'
import Link from 'next/link';
import Layout from 'components/Layout';
export default function Comic({img, alt, title, width, height, hasPrevious, hasNext, prevId, nextId}) {
  return(
    <Layout title={`xkcd - Comic ${title}`} description={`xkcd - Showing comic ${title}`}>
    <section className='max-w-lg m-auto'>
        <h1 className='font-bold text-center mb-4 text-xl'>{title}</h1>
        <div className='max-w-xs m-auto mb-4'>
        <Image src={img} layout="responsive" width={width} height={height} alt={alt} />
        </div>
       
        <p>{alt}</p>

        <div className='flex justify-between mt-4 font-bold'>
         { hasPrevious && <Link className='text-gray-600' href={`${prevId}`}>⬅ Previous</Link>}
         { hasNext && <Link className='text-gray-600' href={`${nextId}`}>Next ➡</Link>}
        </div>
        </section>
    </Layout>
  )
}


export async function getStaticPaths({locales}){
  const files = await readdir('./comics');
  let paths = [];
  locales.forEach(locale => {
    paths = paths.concat(files.map(file=>{return {params:{id:file}, locale}}));
  });

  return {
    paths,
    fallback:false,
  }
}
export async function getStaticProps({params}) {
  const {id} = params; 
 const content =  await readFile(`./comics/${id}`, 'utf-8');
 const comic = JSON.parse(content);
 const idNumber = +id;
 const prevId = idNumber - 1;
 const nextId = idNumber + 1;
 const [prevResult, nextResult] = await Promise.allSettled([
  stat(`comics/${prevId}`),
  stat(`comics/${nextId}`)
]);
const hasPrevious = prevResult.status === "fulfilled";
const hasNext = nextResult.status ==="fulfilled";

   return{
    props:{
      ...comic,hasPrevious, hasNext, prevId, nextId
    }
   }
 }