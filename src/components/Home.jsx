import React from 'react';

const Home = ({ testString, text, typeText }) => (
    <div id="home" className="container">
        {testString}

        <input type="text" onChange={typeText} />
        <label>{text}</label>
    </div>
);

export default Home;
