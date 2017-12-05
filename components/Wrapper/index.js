import Head from 'next/head'
import colors from '../colors'

export default ({ children }) =>
  <div>
    <Head>
      <title>SWD | 5 Die Squads</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
    </Head>
    {children}
    <style jsx global>{`
      body {
        font-family: monospace;
        color: ${colors.black};
        background: ${colors.gray[0]};
        margin: 0;
      }
    `}</style>
    <style jsx>{`
      div {
        width: 100%;
        max-width: 50em;
        margin: 0 auto;
        text-align: center;
      }
    `}</style>
  </div>
