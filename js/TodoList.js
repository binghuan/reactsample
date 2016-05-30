'use strict'
import React from 'react';
import ReactDOM from 'react-dom';

var TodoList = React.createClass({
    render: function() {
        var createItem = function(item) {
            return <li key = {
                item.id
            } > {
                item.text
            } < /li>;
        };

        if(this.props.items != null) {
            return <ul > {
                this.props.items.map(createItem)
            } < /ul>;
        }
        else
        {
            return <ul > {
                [].map(createItem)
            } < /ul>;
        }

    }
});
var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            items: [],
            text: ''
        };
    },
    onChange: function(e) {
        this.setState({
            text: e.target.value
        });
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([{
            text: this.state.text,
            id: Date.now()
        }]);
        var nextText = '';
        this.setState({
            items: nextItems,
            text: nextText
        });
    },
    render: function() {

            var imgStyle = {
                margin: "10px 0 0 0"
            };

            return (
                <div >
                <h3>TODO</h3>
                <TodoList items = {this.state.items}/>
                <form onSubmit = {this.handleSubmit}>
                    <input onChange= {this.onChange} value = {this.state.text}/>
                    <button> {'Add #' + (this.state.items.length + 1)} </button>
                </form >
                <img src = {'../images/sampleOfTodoList.png'} style = {imgStyle}/> < /div >
            );
        }
});

export default TodoList;
