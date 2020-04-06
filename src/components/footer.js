import React from "react"
import { Link } from "gatsby"

import "../styles/footer.scss"

const Footer = ({ footerLinks, legalLinks }) => (
    <footer id="siteFooter">
      <div className="grid">
        <article className="grid-child">
          <h3>Want the latest trends?</h3>
          <div><p>Mailing List component here</p></div>
        </article>
        <div className="grid-child">
          <h3>Recent Articles</h3>
          <div><p>Import recent articles query here</p></div>
        </div>
        <div className="grid-child">
          <h3>Need Advice?</h3>
          <p>Have something you want to build but not sure how to approach it? <Link to="/about">Speak to a web specialist.</Link>
          </p>
        </div>
      </div>
        <div id="legalLinks">
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {legalLinks.map(link => (
                <li
                  className="link-item"
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `black` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="copyright">© {new Date().getFullYear()}</p>
        </div>
    </footer>
)

export default Footer
