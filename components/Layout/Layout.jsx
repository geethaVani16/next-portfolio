import React from 'react'
import Link from 'next/link'

export default function Layout({ children, title }) {
    return (
        <div className='root'>
            <header>
                <Link href='/'>Home </Link>
                <Link href='/about'> About</Link>
            </header>
            <h1>{title}</h1>
            {children}
            <footer>&copy;{new Date().getFullYear()}</footer>
            <style jsx> {`
                    .root {
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        flex-direction:column;
                    }
                    header {
                        width:100%;
                        display:flex;
                        justify-content:space-around;
                        padding:1em;
                        font-size:1.2em;
                        background:indigo;

                    }
                    header a {
                        color:darkgrey;
                        text-decoration:none;  
                    }
                    header a:hover {
                        font-weight:bold;
                        color:lightgrey
                    }
                    footer {
                        padding:1em;
                    }
                    `}</style>
            <style global jsx>
                {`
                    body{
                        margin:0;
                        font-size:110%;
                        background:#f0f0f0
                    }
                `}
            </style>
        </div>
    )
}

<Layout>
</Layout>