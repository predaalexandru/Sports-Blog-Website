import React from 'react'

export default function MasonryPost({post, tagsOnTop}) {

    const style = {backgroundImage:`url("${require(`../../assets/images/${post.image}`)}")`};

    return (
        <a className="masonry-post overlay" style={style} href={post.link}> 
        <div className="image-text">
            <div>
    <h2 className="image-title">{post.title}</h2>
    <span className="image-date">{post.date}</span>
            </div>
        </div>
        </a>
    )
}