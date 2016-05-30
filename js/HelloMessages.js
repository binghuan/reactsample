'use strict'
import React from 'react';
import ReactDOM from 'react-dom';

var HelloMessages = React.createClass({
    render: function() {

        var imgSrc = location.origin + location.pathname + "/images/sampleOfHelloMessages.png";

        var imgStyle = {
                margin: "10px 0 0 0"
        };

        return <div > Hello {
            this.props.name
        } <br/>< img src = {imgSrc}
        style = {imgStyle}
        /></div > ;
    }
});

export default HelloMessages;
