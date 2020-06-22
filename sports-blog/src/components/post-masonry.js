import React from 'react'
import masonryPost from './masonry-post'

export default function postMasonry({posts, columns, tagsOnTop}) {
    return (
        <section className="masonry" style={{gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))`}}>
            { posts.map((post, index) =>
                <masonryPost {...{post, index, tagsOnTop, key: index}} />
            )}
        </section>
    )
}
