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

export function formatTitle(pageTitle) {
    let t = pageTitle.toLowerCase().replace(/\s/g, '-')
    // look for first occurence of space and replace with a dash '-'
    return t
}

export function removeDash(pageTit) {
    let p = pageTit.replace(/-/g, ' ')
    return p
}

export const getRelPath = () => {
    const url = typeof window !== 'undefined' ? window.location.pathname : '';
    console.log('getRelPath', url);
    return url;
}

/**
 * Cancel subscribe event
 * Used for Netlify forms :: TESTING
 * 
 * @param {} e 
 */
export const onFormSubmit = async e => {
    e.preventDefault()

    console.log('preventDefault called', e);

}