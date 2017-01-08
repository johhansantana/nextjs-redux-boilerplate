import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'> Home </Link> |
        <Link href='/about'> About </Link>
      </nav>
    </header>

    { children }

    <footer>
      This is the footer
    </footer>
  </div>
)
