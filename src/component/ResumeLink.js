import React from 'react'

const ResumeLink = (props) =>  {
    return <a href="/public/Rylan_Bauermeister_Technical_Resume.pdf" download>{props.downloadText}</a>;
}

export default ResumeLink
