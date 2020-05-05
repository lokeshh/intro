import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import styles from './links.module.css'
import GitHub from "../../assets/icons/github.svg";
import ShrinkMe from "../../assets/icons/shrink-me.svg";
import LinkedIn from "../../assets/icons/linkedIn.svg";
import Mail from "../../assets/icons/mail.svg";

export default () => (
  <div className={styles.links}>

    <OutboundLink href="https://github.com/lokeshh" rel="noopener noreferrer" target="_blank" aria-label="Link to my GitHub profile">
      <GitHub alt="GitHub icon" />
    </OutboundLink>

    <OutboundLink href="https://www.linkedin.com/in/lokesh-sharma-aa6069bb/" rel="noopener noreferrer" target="_blank" aria-label="Link to my LinkedIn profile">
      <LinkedIn alt="LinkedIn icon" />
    </OutboundLink>
    
    <OutboundLink href="mailto:lokeshhsharma@gmail.com" rel="noopener noreferrer" aria-label="Link to my email address">
      <Mail alt="Mail icon" />
    </OutboundLink>
    
  </div>
)
