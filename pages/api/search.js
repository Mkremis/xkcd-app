import search from 'services/search';

export default async (req, res) => {
  const {query:{q}} = req;
  const {hits} = await search(q)
  res.status(200).json(hits);
};
