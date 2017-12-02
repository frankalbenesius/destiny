import Head from 'next/head'
import colors from '../colors'

export default ({ children }) => (
  <div>
    <Head>
      <title>SWD Analysis</title>
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
        border: 1px solid ${colors.base};
      }
    `}</style>
  </div>
)
