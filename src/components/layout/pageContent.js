import React from "react"
import { formatTitle } from "../../functions/helperFunctions"

const PageContent = ({ page, children }) => (
    <div className={"page-content " + formatTitle(page.toLowerCase())}>
        {children}
    </div>
)

export default PageContent