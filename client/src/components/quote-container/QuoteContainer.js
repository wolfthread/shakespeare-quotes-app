import React, { Component } from 'react';
import { Quote, Social, Icon, SocialLink, Button } from '../styles/styles';

class QuoteContainer extends Component {
  render() {
    return (
      <Quote>
        {' '}
        <h2>{this.props.quote}</h2>
        <h3>
          <em>{this.props.play}</em>
        </h3>
        <br />
        <Button onClick={this.props.onGenerateQuote}>
          Receiveth another quote
        </Button>
        <Social>
          <Icon>
            <i className={this.props.likeIcon} />
            <p>{this.props.like}</p>
          </Icon>
          <SocialLink href={this.props.onTweetShare()}>
            <i className={this.props.shareIcon} />
            <p>{this.props.share}</p>
          </SocialLink>
        </Social>
      </Quote>
    );
  }
}

export default QuoteContainer;
