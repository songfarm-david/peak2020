import React from "react"

import GoogleAds from "../../images/partners/google-ads-640w.png"
import GoogleMB from "../../images/partners/google-my-business-640w-c.png"
import Moz from "../../images/partners/MOZ-LOGO-640w.webp"
import SEMRush from "../../images/partners/semrush-logo-640w.webp"
import Yelp from "../../images/partners/YELP-LOGO-640w.webp"
import AHrefs from "../../images/partners/ahrefs-logo-640w.png"

import "./partners.scss"

const Partners = () => {

    return (
        <article className={"section_container section_container--white"}>
            <div className={"section_content"}>
                <h3 className={"align_center"}>Some of Our Partners</h3>
                <div className={"flex_parent__partners"}>
                    <div className="flex_child__partners">
                        <img src={GoogleAds} />
                    </div>
                    <div className="flex_child__partners">
                        <img src={AHrefs} />
                    </div>
                    <div className="flex_child__partners">
                        <img src={Moz} />
                    </div>
                    <div className="flex_child__partners">
                        <img src={SEMRush} />
                    </div>
                    <div className="flex_child__partners">
                        <img src={Yelp} />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Partners