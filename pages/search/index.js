import Layout from 'components/Layout';
import { useI18N } from 'context/i18n';
import Image from 'next/image';
import Link from 'next/link';
import search from 'services/search';

export default function Search({query, results}){
    const {translations} = useI18N();
    return (
        <Layout title={`xkcd - Results for query ${query}`} description={`Search results for query ${query}`}>
        <h1>{translations("SEARCH_RESULT_TITLE", results.length, query)}</h1>
        {results.map(result=>{
            return(
                <Link href={`/comic/${result.id}`} key={result.id} className='flex flex-row justify-start bg-slate-300 hover:bg-salte-50 content-center'>
                    <Image width={50} height={50} className='rounded-full' alt={result.alt} src={result.img}/>
                    <div>
                    <h2>{result.title}</h2>
                    </div>
                   
                </Link>
            )
        })}
        </Layout>
    )
}

export async function getServerSideProps(context){
    // {q=''} para que por defecto tenga un valor (string vacio) para evitar que de error en caso que el valor sea undefined 
    const {q=''} = context.query;
    const {hits} = await search(q);
   
    return{
        props:{
            query:q,
            results:hits
        }
    }

}