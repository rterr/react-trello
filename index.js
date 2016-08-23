var React = require('react');
var ReactDOM = require('react-dom');

var Card = function() {
    return (
        <div className="card">
            This is a card!
        </div>
    );
};

var List = function() {
    var cards = [];
    for (var i=0; i<3; i++) {
        cards.push(<Card />);
    }
    return (
        <div className="list">
            {cards}
        </div>
    );
};

var Board = function() {
    var lists = [];
    for (var i=0; i<3; i++) {
        lists.push(<List />);
    }
    return (
        <div className="board">
            {lists}
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});
