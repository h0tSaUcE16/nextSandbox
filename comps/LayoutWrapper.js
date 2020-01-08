import Head from 'next/head';
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Head>
        <title>Bat Page</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link
          rel="icon"
          href="https://www.stickpng.com/assets/images/58428ba1a6515b1e0ad75ab0.png"
        />
      </Head>
      <Header />
      {props.children}
    </div>
  )
}