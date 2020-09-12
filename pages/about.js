import Layout from '../components/Layout/Layout'
import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Error from './_error'

export default class About extends Component {
    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/geethaVani16');
        const statusCode = res.status > 200 ? res.status : false;
        const data = await res.json()
        return { user: data, statusCode }

    }
    render() {
        const { user, statusCode } = this.props
        if (statusCode) {
            return <Error statusCode={statusCode}/>
        }
        return (
            <Layout title='About'>
                <h2>{user.login}</h2>
                <img
                    src={user.avatar_url}
                    alt='img'
                    height="200"
                />
            </Layout>
        )
    }
}
