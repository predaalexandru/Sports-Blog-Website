import React from 'react'
import postMasonry from '../components/post-masonry'
import trending from '../assets/mocks/trending'

export default function Home() {
    return (
        <section className="container home">
            <div className="row">
                <h2>Trending Posts</h2>
                <postMasonry posts={trending} columns={3} />
            </div>
        </section>
    )
}
