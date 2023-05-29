import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch('6M6MPFWU23', '7d6795fad561c8d663c8bde299b3650d');
const index = client.initIndex('prod_comics');
const CACHE = {};

export default async function search(q){
  if (CACHE[q]) {
    console.log('returning from cache..')
    return {hits: CACHE[q]}
  }
  console.log('returning from search..')
  const {hits} = await index.search(q,
    {
      attributesToRetrieve:['id', 'title', 'img', 'alt'],
      hitsPerPage: 10
    });
    CACHE[q] = hits;
    return {hits}
};
 