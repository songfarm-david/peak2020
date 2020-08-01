import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import PageBanner from "../components/layout/pageBanner"
import PageContent from "../components/layout/pageContent"

import custOrderVid from "../data/videos/customer-order-demo.mp4"
import receiveOrderVid from "../data/videos/receive-order-demo.mp4"

const features = [
    {
        title: "Branded Mobile App",
        description: "Give your customers a branded and engaging mobile app and desktop experience that works seamlessly on any device, regardless of whether Apple or Android.",
        icon: "pathToIcon"
    }, {
        title: "Quick Setup",
        description: "Get set up in less than an hour and start receiving online orders. Get a QR code for instant scanning for passers-by.",
        icon: ""
    }, {
        title: "POS Integrated",
        description: "Seamlessly integrate online ordering with your POS system and gain complete control of all your front and back-end operations.",
        icon: ""
    }, {
        title: "Safe and Secure Payment",
        description: "Allow your customers the option to pay COD, credit card, debit, and net banking through PCI-compliant, secure gateway integrations of your choice.",
        icon: ""
    }, {
        title: "Customer Loyalty Tools",
        description: "Drive customer loyalty with Coupon management, Customer Loyalty points, and Email Newsletters to promote specials, deals, and promotions.",
        icon: ""
    }, {
        title: "Dedicated Support",
        description: "Receive timely and dedicated customer support from staff that cares so you’re never far from an answer or a solution.",
        icon: ""
    }, {
        title: "Delivery Zone Integration",
        description: "Set up delivery areas, control minimum order and delivery charges, and track all your delivery orders in a clear, centralized dashboard.",
        icon: "car-icon"
    }, {
        title: "Multilingual Support/Accessibility",
        description: "Offer your online ordering system in multiple languages and accommodate all your customers.",
        icon: "something flag or global"
    }, {
        title: "No Commissions",
        description: "Most online ordering systems take a cut of your profits. We don’t. Only pay a low, flat monthly fee.",
        icon: "something money cancel smoking"
    }
]

export default ({ location }) => {
    
    const ButtonCTA = () => (
        <div className={"cta-section"}>
            <p>Get started today</p>
            <button>Schedule a Demo</button> <button>View Demo App</button>
        </div>
    )
    
    return (
    <Layout>

        <SEO title={"Online Ordering System"} description={"Online ordering systems offer safe, secure, and contactless online ordering ordering for your customers during uncertain times. Affordable, flexible, commission-free online restaurant online ordering systems available."} path={location.href} />
        <Helmet title={"Online Ordering System"} />
        <PageBanner title={"Online Ordering System"} />
            
        <PageContent>
            
            {/* Intro */}
            <section className={"section"} id="">
                <p className="heading-2">A powerful online ordering system for your restaurant</p>
                <p className={"byline-text"}>See more orders, bigger orders, and increased revenue!</p>
                <p>The restaurant industry has changed. Are you changing with it?</p>
                <p>Hello,</p>
                <p>My name’s David and I’m the owner of Peak Websites. When the pandemic hit, I saw early on the need for restaurants to offer safe, secure, and contactless online ordering.</p>
                <p>As a web developer and longtime employee in the food-service industry, I knew I was in a unique position to help so I started looking for solutions. I researched and interviewed countless software companies and demoed dozens of online ordering systems.</p>
                <p>I knew I wanted my online ordering system to be branded to the restaurant and work seamlessly on any device, allow for pickup, delivery, curbside, and contactless dine-in, be quick to set up and integrate with POS systems - and not least of all, it would all operate <em>commission-free</em>.</p>
                <p>I’m happy to say that I was able to locate a software that not only provides safe, secure, and commission-free online ordering but also gives restaurants the tools to help them keep pace with their local competitors and thrive in this new reality.</p>
                <ButtonCTA />

                
            </section>

            {/* Features */}
            <section className={"section"} id="featuresSection">
                <h2>Features</h2>
                {/* {features} */}
                {features.map((feature, idx) => (
                    <div key={idx} className={"feature"}>
                        <p className={"feature__title heading-4"}>{feature.title}</p>
                        <p className={"feature__description"}>{feature.description}</p>
                    </div>
                ))}
            </section>

            {/* Demo section */}
            <section className={"section"} id="demoSection">
                <p className={"heading-2"}>Your Restaurant's Front-of-house &mdash; only online</p>
                
                <div className={"demo-video"}>
                    <h3>How customers order:</h3>
                    <div className={"demo-video__inner"}>
                        <ol>
                            <li>Customer selects an ordering option</li>
                            <li>Customer browses and selects items from menu</li>
                            <li>Customer fills out checkout information</li>
                            <li>Customer enters payment details</li>
                            <li>Order is sent to the restaurant</li>
                        </ol>
                        <video src={custOrderVid} height="auto" width="100%" autoplay="true" preload="auto" loop="true" playsinline defaultmuted muted="true">
                            Sorry but your browser does not support playing video.
                        </video>
                    </div>
                </div>

                <div className={"demo-video"}>
                    <h3>How orders can be received:</h3>
                    <div className={"demo-video__inner"}>
                        <ol>
                            <li>View orders from the central dashboard</li>
                            <li>Recieve orders by email</li>
                            <li>Get automated phone calls</li>
                            <li>Receive a text</li>
                            <li>Automatically print to a printer</li>
                        </ol>
                        <video src={receiveOrderVid} height="auto" width="100%" autoplay="true" preload="auto" loop="true" playsinline defaultmuted muted="true">
                            Sorry but your browser does not support playing video.
                        </video>
                    </div>
                </div>

            </section>

            <aside>
                <h3>Benefits</h3>
                <ol>
                    <li>Increase revenue</li>
                    <li>Safe & Contactless</li>
                    <li>Build customer loyalty</li>
                    <li>Less waste, more efficient</li>
                    <li>Gain customer marketing insights</li>
                </ol>
            </aside>

            {/* Sign up CTA */}
            <ButtonCTA />


        </PageContent>

        

    </Layout>
)}