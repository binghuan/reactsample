'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import marked from "marked";

var MarkdownEditor = React.createClass({
    getInitialState: function() {
        return {
            value: 'Type some *markdown* here!'
        };
    },
    handleChange: function() {
        this.setState({
            value: this.refs.textarea.value
        });
    },
    rawMarkup: function() {
        return {
            __html: marked(this.state.value, {
                sanitize: true
            })
        };
    },
    render: function() {

        var imgStyle = {
            margin: "10px 0 0 0"
        };

        return ( < div className = "MarkdownEditor" >
            < h3 > Input < /h3> < textarea onChange = {
                this.handleChange
            }
            ref = "textarea"
            defaultValue = {
                this.state.value
            }
            /> < h3 > Output < /h3> < div className = "content"
            dangerouslySetInnerHTML = {
                this.rawMarkup()
            }
            /> < img src = "../images/sampleOfMarkdownEditor.png"
            style = {
                imgStyle
            }
            /> < /div>
        );
    }
});

export default MarkdownEditor;
