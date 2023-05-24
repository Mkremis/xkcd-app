import Layout from 'components/Layout';

export default function Search({query}){
    return (
        <Layout title={`xkcd - Results for query ${query}`} description={`Search results for query ${query}`}>
        <h1>Resultado para query {query}</h1>
        </Layout>
    )
}

export async function getServerSideProps(context){
    // {q=''} para que por defecto tenga un valor (string vacio) para evitar que de error en caso que el valor sea undefined 
    const {q=''} = context.query;

    // llamar a la api de Algolia para buscar los resultados
    return{
        props:{
          query:q
        }
    }

}