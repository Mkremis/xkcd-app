import algoliasearch from 'algoliasearch/lite';
const APP_ID = process.env.APP_ID;
const API_KEY = process.env.API_KEY;
const client = algoliasearch(APP_ID, API_KEY);
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
 