import React from "react"
import { Link } from "gatsby"

const Footer = ({ footerLinks }) => (
    <footer>
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
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
        © {new Date().getFullYear()}
    </footer>
)

export default Footer
