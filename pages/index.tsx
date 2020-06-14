import Head from 'next/head'
import Form from '../components/Form'

const IndexPage: React.FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Feedback Form</title>
      </Head>
      <Form />
    </>
  )
}

export default IndexPage
