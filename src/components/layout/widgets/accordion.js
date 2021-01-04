import React from 'react';

/**
 * Accordion widget
 * Dec 30, 2020
 * 
 * https://www.npmjs.com/package/react-accessible-accordion
 */

import "./accordion.scss"

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

/**
 * Takes a 'title' and 'content' attribute
 * @param {string} title a string for the heading tag
 * @param {array} content array of objects @see data/seo-faq.js 
 */
export default function AccordionWidget({title, content}) {
    // console.log(title, content);
    return (
        <article className="section_container">
            <div className="section_content section_content__accordion">
                <h3>{title}</h3>
                <Accordion allowZeroExpanded preExpanded={['a']}>
                    {content.map(({q, a, id}, idx) => (
                        <AccordionItem key={idx} uuid={id}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <h4>{q}</h4>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel dangerouslySetInnerHTML={{__html: a}} />
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </article>
    );
}



