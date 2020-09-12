import Layout from "../components/Layout/Layout"
import React from 'react'

export default function Error({statusCode}) {
    return (
        <Layout title='Error!!'>
            {statusCode ? `Could not load your userdata :status code ${statusCode}`:`Couldn't get that Page, sorry!`}
        </Layout>
      )
}
