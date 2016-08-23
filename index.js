var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props) {
    return (
        <div className="card">
            {props.text}
        </div>
    );
};

var List = function(props) {
    // var cards = [];
    // for (var i=0; i<3; i++) {
    //     cards.push(<Card />);
    // }
    return (
        <div className="list">
          <div className="list-title">{props.title}</div>
          {props.cards}
            // <Card text="I am card one!" />
            // <Card text="I am card two!" />
            // <Card text="I am card three!" />
        </div>
    );
};

var Board = function(props) {
    // var lists = [];
    // lists.push(<List title="List One" />);
    // for (var i=0; i<3; i++) {
    //     lists.push(<List />);
    // }
    return (
        <div className="board">
          <div className="board-title">{props.title}</div>
          {props.lists}
            // <List title="List One" />
            // <List title="List Two" />
            // <List title="List Three" />
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title="WELCOME TO MY BOARD" />, document.getElementById('app'));
});
