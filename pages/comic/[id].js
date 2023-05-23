import Head from 'next/head';
import Header from 'components/Header.js';
import { Image } from '@nextui-org/react';
import {readFile, stat} from 'fs/promises'
import Link from 'next/link';
export default function Comic({img, alt, title, width, height, hasPrevious, hasNext, prevId, nextId}) {
  return(
    <>
        <Head>
        <title>xkcd - Comics for developers</title>
        <meta name='description' content='Comics for developers'/>
        <link rel='icon' href=''/>
      </Head>
      <Header/>
      <main>
        <section className='max-w-lg m-auto'>
        <h1 className='font-bold'>{title}</h1>
        <Image src={img} width={width} height={height} alt={alt} />
        <p>{alt}</p>
        <div className='flex justify-between'>
         { hasPrevious && <Link className='text-gray-600' href={`${prevId}`}>Previous</Link>}
         { hasNext && <Link className='text-gray-600' href={`${nextId}`}>Next</Link>}
        </div>
        </section>
      
      </main>
    </>
  )
}


export async function getStaticPaths(){
  return {
    paths:[
      {params:{id:'2500'}},
      {params:{id:'2501'}},
      {params:{id:'2502'}},
      {params:{id:'2503'}},
    ],
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