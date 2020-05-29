import React from "react"

/**
 * Adds an ellipsis to blocks of text of 100 characters
 * @param {String} excerpt a string of content
 */
export function truncateExcerpt(excerpt) {
    const contentMax = 100
    if (excerpt.length > contentMax) {
        return <p className="post-excerpt" dangerouslySetInnerHTML={{ __html: `${excerpt.substring(0, contentMax)}...`}} />
    } else {
        return <p className="post-excerpt" dangerouslySetInnerHTML={{ __html: excerpt}} />
    }
}

/**
 * Get the last updated date
 * fallback to publishing date
 * @param {String} modDate last modified date
 * @param {String} pubDate publishing date
 */
export function getDate(modDate, pubDate) {
    // if modDate exists, return that
    // else return pubDate    
    if (modDate) return modDate;
    return pubDate;

}

/**
 * Check if post has the category 'Guest Post'
 * @param {categories} categories the categories for a post
 * @param {author} author the (default) author of the post
 */
export function getAuthor(categories, author) {
    return (categories.some(category => 
        category.name === 'Guest Post')) 
    ? 'Guest Post' :  author
}