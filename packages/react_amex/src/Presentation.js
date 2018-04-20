import React, { Component } from 'react';

const Presentation = ({ imageUrl }) => (
    <div className="dogImage">
        { imageUrl ? <img src={imageUrl} /> : <div />}
    </div>
);

export default Presentation;