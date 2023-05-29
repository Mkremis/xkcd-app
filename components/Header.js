import { Container, Card, Row, Text } from '@nextui-org/react';
import { data } from 'autoprefixer';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [results, setResults] = useState([]);
  
  const handleChange = async (e)=>{
   fetch(`/api/search?q=${e.target.value}`).then(res=>res.json()).then(hits=>setResults(hits))
  };
 

  return (
    <Container
      as="header"
      responsive
      display="flex"
      justify="space-between"
      alignItems="center"
    >
      <div>
        <h1 className="font-bold">
          <Link href='/' className='transition hover:opacity-50'>
          next<span className="font-light">xkcd</span>
          </Link>
        </h1>
      </div>

      <nav>
        <Container
          as="ul"
          responsive
          display="flex"
          justify="space-between"
          alignItems="center"
          style={{ gap: '16px' }}
        >
          <li>
            <Link className="text-sm font-semibold" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-sm font-semibold" href="/about">
              About
            </Link>
          </li>
          <li className='relative'>
            <input type='search' className='px-4 py-1 border border-gray-400 focus:border-blue-400 rounded-lg' onChange={handleChange}/>
            {
             Boolean(results.length) && <ul className='absolute top-100 left-0'>{
              results.map(result=>{
               return(
                <li key={result.id}>
                  <Link href={`/comic/${result.id}`} className='text-sm font-semibold'>
                  {result.title}
                  </Link>
                </li>
               )
              })}</ul>}
          </li>
        </Container>
      </nav>
    </Container>
  );
}
