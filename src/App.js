import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firstAction, secondAction } from './actions/basicAction';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.basicAction = this.basicAction.bind(this);
    this.firstAction = true;
    this.state = {
      data: {}
    };
  }

  basicAction() {
    this.props.secondAction(this.props);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Random Quote Generator</h1>
        </header>
        <div id="quote-box">
          <p id="text">
            {this.props.basicReducer.quote}
          </p>
          <p id="author">
            {this.props.basicReducer.author}
          </p>
        </div>
        <button id="new-quote" onClick={this.basicAction}>Another quote</button>

        <div id="social-media-bar">
          <a id="tweeet-quote" href={ encodeQuoteURI("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=", this.props.basicReducer.quote, this.props.basicReducer.author) } target="_blank">TWEET</a>
        </div>
      </div>
    );
  }
}

function encodeQuoteURI(preURI="", quote, author) {
  let uriStr = preURI + encodeURI(quote + '\n' + author);
  return uriStr;
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  firstAction: () => dispatch(firstAction()),
  secondAction: () => dispatch(secondAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
