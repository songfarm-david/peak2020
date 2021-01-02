import React from "react"

import "./featuresBlock.scss";

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
        title: "Secure Payment",
        description: "Allow your customers the option to pay COD, credit card, debit, and net banking through PCI-compliant, secure gateway integrations of your choice.",
        icon: ""
    }, {
        title: "Customer Loyalty Tools",
        description: "Coupon builders, Reward programs, combos and promotional display, and Email Newsletters to drive customer loyalty.",
        icon: ""
    }, {
        title: "Dedicated Support",
        description: "Receive timely and dedicated customer support from staff that cares so you’re never far from an answer or a solution.",
        icon: ""
    }, {
        title: "Delivery Zones",
        description: "Set up delivery areas, control minimum order and delivery charges, and track all your delivery orders in a clear, centralized dashboard.",
        icon: "car-icon"
    }, {
        title: "Multilingual Support",
        description: "Offer your online ordering system in multiple languages and accommodate all your customers.",
        icon: "something flag or global"
    }, {
        title: "No Commissions",
        description: "Most online ordering systems take a cut of your profits. We don’t. Only pay a low, flat monthly fee.",
        icon: "something money cancel smoking"
    }
]

const FeaturesBlock = () => (
    <div className={"section_container"}>
        <section className={"section_content"} id="featuresSection">
            <div className={"flex_container"}>
                <h2 className={"flex_container__header"}>Features</h2>
                {/* {features} */}
                {features.map((feature, idx) => (
                    <div key={idx} className={"flex_child flex_child__card"}>
                        <p className={"feature__title heading-4"}>{feature.title}</p>
                        <p className={"feature__description"}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
)

export default FeaturesBlock