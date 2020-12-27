import React, { Component, Fragment } from 'react';
import { Sheet } from '../styles/styles';
import QuoteContainer from '../quote-container/QuoteContainer';

class Parchment extends Component {
  render() {
    return (
      <Fragment>
        <Sheet>
          <QuoteContainer
            quote={this.props.quote}
            play={this.props.play}
            like={this.props.like}
            share={this.props.share}
            likeIcon={this.props.likeIcon}
            shareIcon={this.props.shareIcon}
            onGenerateQuote={this.props.onGenerateQuote}
            onTweetShare={this.props.onTweetShare}
          />
        </Sheet>
      </Fragment>
    );
  }
}

export default Parchment;
