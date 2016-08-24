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
    var myCards = [];
    for (var i=0; i<props.cards.length; i++) {
        myCards.push(<Card text={props.cards[i]}/>);
    }
    
    return (
        <div className="list">
          <div className="list-title">{props.title}</div>
          {myCards}
          <div>
              <input onChange={props.onAddInputChanged} type="text" name="list-input"/>
              <button onClick={props.onAddSubmit} name="list-button">Push Here</button>
          </div>
        </div>

    );
};

var CardMaker = React.createClass({
    getInitialState: function() {
        return {};

    },
    onAddInputChanged: function () {
        console.log('I am changing the input!');
        // this.setState({

        // });
    },
    onAddSubmit: function(event) {
        console.log(event);
        event.preventDefault();
        console.log('I am pressing submit!');
        // this.setState({

        // })
    },
    render: function() {
        return (
            <List title={this.props.title} cards={this.props.cards} onAddSubmit={this.onAddSubmit} onAddInputChanged={this.onAddInputChanged} />
        );
    }
});


var Board = function(props) {
    var myLists = [];
    // lists.push(<List title="List One" />);
    for (var i=0; i<props.lists.length; i++) {
        myLists.push(<CardMaker title={props.lists[i].listTitle} cards={props.lists[i].listCards} />);
    }

    return (
        <div className="board">
          <div className="board-title">{props.title}</div>
          {myLists}
        </div>
    );
};

var WholeSite = function() {
    let listContent = [
        {
            listTitle: 'fruits',
            listCards: ['apples', 'oranges', 'bananas']
        },
        {
            listTitle: 'veggies',
            listCards: ['celery', 'lettuce', 'carrots']
        },
        {
            listTitle: 'snacks',
            listCards: ['chips', 'cookies', 'popsicles']
        }
    ];

    return(
        <Board title="Welcome to my board" lists={listContent}/>
    );
};


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<WholeSite />, document.getElementById('app'));
});
