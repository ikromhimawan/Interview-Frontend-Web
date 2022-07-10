import '../styles/globals.css'
import "../public/bootstrap/bootstrap-5.0.2-dist/css/bootstrap.min.css"
import "../styles/datatables.css"
import Layout from '../Component/Layuot'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
