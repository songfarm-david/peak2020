import React from "react"

import "./demoVideo.scss"
import custOrderVid from "../../../data/videos/customer-order-demo.mp4"
import receiveOrderVid from "../../../data/videos/receive-order-demo.mp4"

const DemoVideos = () => (
    <>
        <div className={"section_container section_container--grey demo_video_container"}>
            <section className={"section_content section_container__inner"}>
                <p className={"heading-2"}>Your Restaurant's Front-of-house &mdash; only online</p>  
                <div className={"demo_video"}>
                    <h4>How customers order:</h4>
                    <div className={"demo_video__inner"}>
                        <ol className={"demo_video__list"}>
                            <li>Customer selects an ordering option</li>
                            <li>Customer browses and selects items from menu</li>
                            <li>Customer fills out checkout information</li>
                            <li>Customer enters payment details</li>
                            <li>Order is sent to the restaurant</li>
                        </ol>
                        <video src={custOrderVid} height="auto" width="100%" autoplay="true" preload="auto" loop="true" playsinline defaultmuted muted="true" className={"demo_video__video"}>
                            Sorry but your browser does not support playing video.
                        </video>
                    </div>
                </div>
            </section>
        </div>
    
        <div className={"section_container section_container--white demo_video_container"}>
            <section className={"section_content section_container__inner"}>
                <div className={"demo_video"}>
                    <h4>How orders can be received:</h4>
                    <div className={"demo_video__inner"}>
                        <ol className={"demo_video__list"}>
                            <li>View orders from the central dashboard</li>
                            <li>Recieve orders by email</li>
                            <li>Get automated phone calls</li>
                            <li>Receive a text</li>
                            <li>Automatically print to a printer</li>
                        </ol>
                        <video src={receiveOrderVid} height="auto" width="100%" autoplay="true" preload="auto" loop="true" playsinline defaultmuted muted="true" className={"demo_video__video demo_video__video--vertical"}>
                            Sorry but your browser does not support playing video.
                        </video>
                    </div>
                </div>
            </section>
        </div>
    </>

)

export default DemoVideos