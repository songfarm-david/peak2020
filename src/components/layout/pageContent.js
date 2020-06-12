import React from "react"
import { formatTitle } from "../../functions/helperFunctions"

import pageContent from "./pageContent.module.scss"

const PageContent = ({ path, children }) => (
    <div className={pageContent.pageContent + " " + formatTitle(path.toLowerCase())}>
        {children}
    </div>
)

export default PageContent