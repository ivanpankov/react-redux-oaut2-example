import React from 'react';

const SocialButton = ({text, onClick, colorClass, iconClass}) => (
    <button onClick={onClick} className={`btn btn-block ${colorClass}`}>
        <i className={`visible-xs ${iconClass}`}></i>
        <span className="hidden-xs">{text}</span>
    </button>
);

export default SocialButton;
