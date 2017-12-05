import Head from 'next/head'
import colors from '../colors'
import { initGA, logPageView } from './analytics'

export default class Wrapper extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render() {
    return (
      <div>
        <Head>
          <title>SWD | 5-Die Squads</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        {this.props.children}
        <style jsx global>{`
          body {
            font-size: 1.25em;
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
    )
  }
}
