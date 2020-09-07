import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

export default function about() {
    return (
        <Layout title='About'>
            <Link href='/'>Back to home</Link>
            <p>About Page</p>
        </Layout>
    )
}
