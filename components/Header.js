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
            <input type='search' className='border-gray-300 focus:border-blue-400 w-full text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700' onChange={handleChange}/>
            {results.length>0 && <ul className='absolute top-100 left-0'>{
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
