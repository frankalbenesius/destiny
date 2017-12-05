import Head from 'next/head'
import colors from '../colors'

export default ({ children }) =>
  <div>
    <Head>
      <title>SWD | 5 Die Squads</title>
    </Head>
    {children}
    <style jsx global>{`
      body {
        font-family: monospace;
        color: ${colors.black};
      }
    `}</style>
    <style jsx>{`
      div {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
      }
    `}</style>
  </div>
