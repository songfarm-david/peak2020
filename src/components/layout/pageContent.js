import React from "react"
import { formatTitle } from "../../functions/helperFunctions"

const PageContent = ({ path, children }) => (
    <div className={"page-content " + formatTitle(path.toLowerCase())}>
        {children}
    </div>
)

export default PageContent