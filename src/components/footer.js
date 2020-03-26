import React from "react"
import { Link } from "gatsby"

const Footer = ({ footerLinks, legalLinks }) => (
    <footer>
      <div>
        <nav id="footerLinks">
          <ul>
            {footerLinks.map(link => (
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
