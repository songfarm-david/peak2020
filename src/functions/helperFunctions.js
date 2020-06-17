import ReactHtmlParser from 'react-html-parser';

/**
 * Formats a page title for front-facing 
 * @param {Str} pageTitle a post or page title
 */
export function formatTitle(pageTitle) {
    // look for first occurence of space and replace with a dash '-'
    let formattedTitle = pageTitle.toLowerCase().trim().replace(/\s/g, '-')
    return ReactHtmlParser(formattedTitle)
}

/**
 * Adds an ellipsis to blocks of text of 100 characters
 * @param {String} excerpt a string of content
 */
export function truncateExcerpt(excerpt) {
    const contentMax = 75
    if (excerpt.length > contentMax) {
        return excerpt.substring(0, contentMax) + '...'
    } else {
        return excerpt
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

/**
 * This function search a string for a particular string of text
 * Used mostly for finding a class within a strong of content
 * @param {Str} str the string to test against
 * @param {Str} textStr the string to test
 */
// export const includesStr = (str, textStr) => {
//     if (!str) return
//     let s = str.toString()
//     return s.includes(textStr) ? true : false
// }