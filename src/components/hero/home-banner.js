import React from "react"

import "../../styles/hero.scss"

let keywords = ['management','development','design','SEO','consulting','webmaster services']

function launchTextRotator(keywords) {

    let formattedKeywords = []
    let wordArray = []
    var currentWord = 0

    /**
     * wrap keywords in spans with classes
     * @param {array} keys an array of keywords
     */
    function mapKeywordsToTag( keys ) {
        formattedKeywords = keys.map((word, idx) => (
            <span key={`word-${idx}`} className="word" style={{opacity: 1}}>{word}</span>
        ))
    }

    /**
     * splits words into letters, push into new array
     * @param {obj|array} word a word to separate into letters 
     */
    function separateIntoLetters(word) {
        let words = Array.from(word.props.children);
        let letters = []
        for (let y = 0; y < words.length; y++) {
            var letter = document.createElement('span');
            letter.className = 'letter';
            letter.innerHTML = words[y];        
            letters.push(letter)
        }
        wordArray.push(letters)
    }

    function animateLetterOut(cw, i) {
        setTimeout(function() {
              cw[i].className = 'letter out';
        }, i*80);
    }
      
    function animateLetterIn(nw, i) {
        setTimeout(function() {
                nw[i].className = 'letter in';
        }, 340+(i*80));
    }
    
    mapKeywordsToTag(keywords)

    for (let q = 0; q < formattedKeywords.length; q++) {
        separateIntoLetters(formattedKeywords[q])
    }

    function changeWord(x) {
        let cW = x[currentWord]
        let nW = currentWord === x.length-1 ? x[currentWord] : x[currentWord+1]
        // console.log('changeWord called', cW, nW);  
        for (var i = 0; i < cW.length; i++) {
            animateLetterOut(cW, i);
        } 
        for (var j = 0; j < nW.length; j++) {
            nW[j].className = 'letter behind';
            // nW[0].parentElement.style.opacity = 1;
            animateLetterIn(nW, j);
          }
    }
    
    changeWord(wordArray);
    // setInterval(changeWord, 4000);

    console.log(wordArray);
    
    // return wordArray

    // https://codepen.io/rachsmith/pen/BNKJme

}

const Banner = () => (
    <div className="hero-banner">
        <div className="text-container">
            <p>Do you need reliable, creative, experienced <span className="rotatorContainer">{launchTextRotator(keywords)}</span> <br />to partner with your business?</p>
        </div>
    </div>
)

export default Banner