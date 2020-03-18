import React, {Component} from 'react';
import { connect } from 'react-redux';
import { secondAction } from './actions/basicAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import './App.css';
// import bg00 from '../public/images/bg00.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.basicAction = this.basicAction.bind(this);
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
            <span id="quotation">&#8220;</span><br />
            <cite><span>&nbsp;&nbsp;&nbsp;</span>{this.props.basicReducer.quote}</cite>
          </p>
          <p id="author">
            {this.props.basicReducer.author}
          </p>
          <div id="social-media-bar">
            <a id="tweet-quote" href={ encodeQuoteURI("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=", this.props.basicReducer.quote, this.props.basicReducer.author) } target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
          </div>
          <button id="new-quote" onClick={this.basicAction}>Another quote</button>
        </div>
        
        <div id="sign">
          <a href="https://anders.femtearenan.se">
            <svg xmlns="http://www.w3.org/2000/svg" width="181.287" height="181.331" viewBox="0 0 181.287 181.331">
              <g id="logo-A" transform="translate(-0.529 -1.277)">
                <g id="left" transform="translate(0 -114)">
                  <path id="path953" d="M12.818,202.6a12,12,0,1,0,0,23.99,12,12,0,1,0,0-23.99Zm.05,2.637c5.539,0,10.029,4.167,10.029,9.308s-4.49,9.307-10.028,9.307-10.029-4.167-10.029-9.307,4.49-9.307,10.028-9.307Z"/>
                </g>
                <g id="right" transform="translate(0 -27)">
                  <ellipse id="path953-2" cx="12.158" cy="11.995" rx="12.158" ry="11.995" transform="translate(157.5 123.005)"/>
                </g>
                <g id="mouth">
                  <path id="path1025" d="M39.289,162.159c.157-.266,5.07,2.548,13.736,6.188a140.523,140.523,0,0,0,36.2,9.913h0a141.118,141.118,0,0,0,17.221,1.182,154.172,154.172,0,0,0,25.7-1.988,171.1,171.1,0,0,0,30.493-7.869c7.351-3.05,11.754-4.733,11.89-4.486h0c.114.256-4.06,2.407-11.308,5.882a145.411,145.411,0,0,1-30.666,8.9,143.889,143.889,0,0,1-26.132,2.208A133.775,133.775,0,0,1,88.876,180.8h0a126.129,126.129,0,0,1-36.521-10.961c-8.608-4.108-13.176-7.494-13.067-7.68Z" transform="translate(-15.346 0.517)"/>
                </g>
                <g id="nose" transform="translate(0 -27)">
                  <path id="path1021" d="M15.875,84.134c.579.027-1.722-14.667,6.409-37.684,3.231-9.158,8.531-20.212,17.362-29.468A51.924,51.924,0,0,1,66.774,1.647h0C78.31-.583,90.69,1.514,102.385,6.578a35.089,35.089,0,0,1,8.708,5.308,31.537,31.537,0,0,1,6.226,7.089q.358.56.693,1.134a42.247,42.247,0,0,1,5.214,16.958,81.22,81.22,0,0,1-.886,21.249h0A153.2,153.2,0,0,1,116.9,80.567a270.131,270.131,0,0,1-16.119,38.9h0c-2.2,4.388-4.363,8.467-6.5,12.284h0c-.65,1.162-1.293,2.29-1.938,3.4h0q-.262.449-.525.893h0l-.347-.379h0l-.035.057-.009.014c21.173,8.161,34,13.469,33.872,13.793S112.145,144.93,90.382,136.1l.012-.02.033-.059h0q-.04-.416-.08-.836h0q.251-.442.5-.891h0c.618-1.108,1.234-2.239,1.86-3.405h0c2.055-3.832,4.14-7.917,6.265-12.312h0a280.83,280.83,0,0,0,15.6-38.74A153.644,153.644,0,0,0,119.8,57.917h0a79.407,79.407,0,0,0,.808-20.571,39.992,39.992,0,0,0-4.877-15.9q-.309-.527-.64-1.039a28.974,28.974,0,0,0-5.7-6.5,32.575,32.575,0,0,0-8.049-4.919c-11.334-4.89-23.177-7-34.1-4.908h0c-10.442,1.959-19.436,7.729-26,14.442C32.61,27.344,27.263,38.1,23.9,47.038,15.587,69.17,16.2,84.149,15.875,84.134Z" transform="translate(-15.346 27.517)"/>
                </g>
              </g>
            </svg>
            <p>A React App by Anders Björkland 2020</p>
          </a>
        </div>
        
      </div>
    );
  }
}

function encodeQuoteURI(preURI="", quote, author) {
  let uriStr = preURI + encodeURI('"' + quote + '"\n' + author);
  return uriStr;
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  secondAction: () => dispatch(secondAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
