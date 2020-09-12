import React from 'react'
import Layout from '../components/Layout/Layout'
import Link from 'next/link'
export default function Blog() {
    return (
        <Layout title='My Blogs'>
            <ul>
                <li>
                    <Link href={`/[blogs]/[post]`} as={`/post/react`}><a>react</a></Link>
                </li>
                <li>
                    <Link href={`/[blogs]/[post]`} as={`/post/angular`}><a>angular</a></Link>
                </li>
                <li>
                    <Link href={`/[blogs]/[post]`} as={`/post/veu`}><a>veu</a></Link>
                </li>
            </ul>
        </Layout>
    )
}


