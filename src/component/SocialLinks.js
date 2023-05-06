import React from 'react'
import {Button} from 'semantic-ui-react'

const SocialLinks = (props) => {
    return <div className="social-links">
      <a href="https://www.linkedin.com/in/rylan-bauermeister/" target="blank"><Button circular color='linkedin' icon='linkedin' /></a>
      <a href="https://github.com/RylanBauermeister" target="blank"><Button circular icon='github' /></a>
      <a href="https://medium.com/@rylanbauermeister" target="blank"><Button circular color="medium" icon='medium' /></a>
    </div>;
}

export default SocialLinks
