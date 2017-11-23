import Head from 'next/head'
export default ({ children }) => (
  <div>
    <Head>
      <title>SWD Analysis</title>
    </Head>
    {children}
    <style jsx>{`
      div {
        text-align: center;
      }
    `}</style>
  </div>
)
