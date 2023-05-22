import { Container, Card, Row, Text } from '@nextui-org/react';
import Link from 'next/link';
export default function Header() {
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
          next<span className="font-light">xkcd</span>
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
          <li>
            <Link className="text-sm font-semibold" href="/search">
              Search
            </Link>
          </li>
        </Container>
      </nav>
    </Container>
  );
}
