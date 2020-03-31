import React from "react"
import { Link } from "gatsby"

const Footer = ({ footerLinks, legalLinks }) => (
    <footer>
      <div>
        <article>
          <h3>Want the latest trends?</h3>
        </article>
        <div>
          <h3>Recent Articles</h3>
        </div>
        <div>
          <h3>Need Advice?</h3>
          <p>Have something you want to build but not sure how to approach it? <Link to="/about">Speak to a web specialist.</Link>
          </p>
        </div>
        </div>
        <div>
          <nav id="legalLinks">
            <ul style={{ display: "flex", flex: 1 }}>
              {legalLinks.map(link => (
                <li
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
        </div>
        © {new Date().getFullYear()}
    </footer>
)

export default Footer
