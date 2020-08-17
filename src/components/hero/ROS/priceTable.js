import React from "react"

const PriceTable = () => (
    <div className={"section_container section_container--grey demo_video_container"}>
        <section className={"section_content section_container__inner"}>
            <p className={"heading-2"}>Plans and pricing</p>  
            <figure className={"theme_table"}>
                <table>
                    <thead>
                        <tr>
                            <th data-align="center"><span className="heading-4">Basic Plan</span><br />$65 per month/store</th><th data-align="center"><span className="heading-4">Advanced Plan</span><br />$115 per month/store</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-align="center">Unlimited Orders</td><td data-align="center"><strong>All of Basic Plan plus:</strong></td>
                        </tr>
                        <tr>
                            <td data-align="center">Mobile Web Ordering</td><td data-align="center">Order Notification Through Printer</td>
                        </tr>
                        <tr>
                            <td data-align="center">Online Payments</td><td data-align="center">Order Notification Through Fax</td>
                        </tr>
                        <tr>
                            <td data-align="center">Real Time Order Notification</td><td data-align="center">Delivery Management</td>
                        </tr>
                        <tr>
                            <td data-align="center">Coupon Builder</td><td data-align="center">Facebook Ordering</td>
                        </tr>
                        <tr>
                            <td data-align="center">Loyalty Program</td><td className={"emptyCell"}></td>
                        </tr>
                        <tr>
                            <td data-align="center">Order Management Dashboard</td><td className={"emptyCell"}></td>
                        </tr>
                        <tr>
                            <td data-align="center">Real Time Analytics</td><td className={"emptyCell"}></td>
                        </tr>
                    </tbody>
                </table>
                <figcaption>All prices in Canadian (CAD)</figcaption>
            </figure>
        </section>
    </div>
)

export default PriceTable