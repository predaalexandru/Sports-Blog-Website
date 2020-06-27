import React from 'react'
import {PostMasonry, MasonryPost, PostGrid} from '../components/common/index'
import trending from '../assets/mocks/trending'
import featured from '../assets/mocks/featured'

const trendingConfig ={
    1: {
        gridArea: '1 / 2 / 3 / 3'
    }
}

const featuredConfig ={
    0: {
        gridArea: '1 / 1 / 2 / 3 ',
        height: '300px'
    },

    1: {
        height: '300px'
    }, 

    4: {
        height: '830px',
        marginLeft: '40px',
        width: '830px'
    }
}

const mergeStyles = function(posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
        post.author = 'Alex Preda'
        post.description = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu'
    })
}

const recentPosts = [...trending, ...featured, ...featured]

mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)

const lastPost = featured.pop()

export default function Home() {
    return (
        <main className="home">
            <section className="container">
            <div className="row">   
                <section className="featured-posts">
                    <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
                    <MasonryPost post={lastPost} tagsOnTop={true} />
                </section>
            </div>
        </section>
        <section className="bg-white">
        <section className="container">
            <div className="row">   
                <h1>Recent Posts</h1>
                <PostGrid posts={recentPosts} />     
            </div>
        </section>
        </section>

        <section className="container">
            <div className="row">   
                <PostMasonry posts={trending} columns={3} />     
            </div>
        </section>
        </main>
    )
}
