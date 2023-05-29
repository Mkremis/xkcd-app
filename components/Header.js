import { Container, Card, Row, Text } from '@nextui-org/react';
import { data } from 'autoprefixer';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function Header() {
  const [results, setResults] = useState([]);
  const searchRef = useRef();
  const q = searchRef.current?.value;
  
  const handleChange = async ()=>{
   fetch(`/api/search?q=${q}`).then(res=>res.json()).then(hits=>setResults(hits))
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
          <div className='relative z-50'>
            <input type='search' className='px-4 py-1 border text-xs border-gray-400 focus:border-blue-400 rounded-lg' onChange={handleChange} ref={searchRef}/>
            {
             Boolean(results.length) && <div className='absolute top-100 left-0'>
              <ul className='w-full overflow-hidden bg-white border rounded-lg shadow-xl border-gray-50 '>
              <li className='m-0'>
                  <Link href={`/search?q=${q}`} className='italic text-gray-400 block px-2 py-1 text-sm font-semibold hover:bg-slate-200 text-ellipsis whitespace-nowrap'>
                 ver {results.length} resultados
                  </Link>
                </li>
                {
              results.map(result=>{
               return(
                <li className='m-0' key={result.id}>
                  <Link href={`/comic/${result.id}`} className='block px-2 py-1 text-sm font-semibold hover:bg-slate-200 text-ellipsis whitespace-nowrap'>
                  {result.title}
                  </Link>
                </li>
               )
              })}
              </ul>
              </div>}
          </div>
        </Container>
      </nav>
    </Container>
  );
}
