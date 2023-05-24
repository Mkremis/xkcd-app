import Head from 'next/head';
export default function Search({query}){
    return (
        <> 
     <Head>
        <title>xkcd - Search Comics</title>
        <meta name='description' content='Comics for developers'/>
        <link rel='icon' href=''/>
      </Head>
      <main>
      <h1>Resultado para query {query}</h1>
      </main>
      
        </>
    )
}

export async function getServerSideProps(context){
    // {q=null} para que por defecto tenga un valor (null) para evitar que de error en caso que el valor sea undefined 
    const {q=null} = context.query;

    // llamar a la api de Algolia para buscar los resultados
    return{
        props:{
          query:q
        }
    }

}