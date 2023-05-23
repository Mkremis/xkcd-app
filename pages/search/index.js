export default function Search({search}){
    return (
        <>
        <h1>Resultado para query {search}</h1>
        </>
    )
}

export async function getServerSideProps(context){
    const query = {context};
    console.log(query)
    // const {search} = query;

    // llamar a la api de Algolia para buscar los resultados
    return{
        props:{
            search
        }
    }

}