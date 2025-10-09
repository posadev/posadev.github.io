import React from "react";

const XTwitter: React.FC<React.SVGProps<SVGSVGElement>> = ( props) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <title>Twitter</title>
            <path d="M8 3H4L15.5 21.5H19.5L8 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 3.5L4 21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
export default XTwitter