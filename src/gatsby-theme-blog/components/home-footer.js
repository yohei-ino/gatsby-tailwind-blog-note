import React from "react"
import { Themed, css } from "theme-ui"

const Footer = () => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    © {new Date().getFullYear()}, Created by
    {` `}
    <Themed.a href="https://www.github.com/yohei-ino">yohei-ino</Themed.a>
  </footer>
)
export default Footer
