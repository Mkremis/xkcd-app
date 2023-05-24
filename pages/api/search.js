import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch('6M6MPFWU23', '7d6795fad561c8d663c8bde299b3650d');
const index = client.initIndex('prod_comics');


export default async (req, res) => {
  const {query:{q}} = req;
  const {hits} = await index.search(q,
    {
      attributesToRetrieve:['id', 'title', 'img', 'alt'],
      hitsPerPage: 10
    })
  res.status(200).json(hits);
};
