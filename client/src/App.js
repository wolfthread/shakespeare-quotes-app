import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './App.css';
import { BackgroundImage } from './components/styles/styles';
import CustomNavbar from './components/custom-navbar/CustomNavbar';
import Parchment from './components/parchment/Parchment';

class App extends Component {
  state = {
    quotesUrl: 'api/v1/quotes',
    twitterUrl: 'https://twitter.com/intent/tweet?text=',
    brand: "For Shakespeare Hath Said't Best",
    portfolioLink: 'https://sylvaindessureault.com',
    portfolioPlaceholder: "Seeth Mine Own P'rtfolio",
    quote: 'Alloweth me receiveth a quote for thee...',
    play: '',
    likeTxt: 'Liketh',
    shareTxt: 'Shareth With A Cousin',
    likeIcon: 'fas fa-crown fa-2x',
    shareIcon: 'fab fa-twitter fa-2x',
    currentTheme: 'All Themes',
    currentPlay: 'All Plays',
    currentPlaySlug: '',
    themes: [
      { key: 0, value: 0, name: 'All Themes', selected: false },
      { key: 1, value: 1, name: 'Ambition', selected: false },
      { key: 2, value: 2, name: 'Appearance', selected: false },
      { key: 3, value: 3, name: 'Conscience', selected: false },
      { key: 4, value: 4, name: 'Courage', selected: false },
      { key: 5, value: 5, name: 'Desire', selected: false },
      { key: 6, value: 6, name: 'Disorder', selected: false },
      { key: 7, value: 7, name: 'Evil', selected: false },
      { key: 8, value: 8, name: 'Faith', selected: false },
      { key: 9, value: 9, name: 'Fate', selected: false },
      { key: 10, value: 10, name: 'Friends', selected: false },
      {
        key: 11,
        value: 11,
        name: 'Friendship',
        selected: false,
      },
      { key: 12, value: 12, name: 'Guilt', selected: false },
      { key: 13, value: 13, name: 'Love', selected: false },
      { key: 14, value: 14, name: 'Lust', selected: false },
      { key: 15, value: 15, name: 'Order', selected: false },
      { key: 16, value: 16, name: 'Pain', selected: false },
      { key: 17, value: 17, name: 'Rich', selected: false },
      { key: 18, value: 18, name: 'Spirit', selected: false },
      { key: 19, value: 19, name: 'Strength', selected: false },
      { key: 20, value: 20, name: 'Tyranny', selected: false },
      {
        key: 21,
        value: 21,
        name: 'Vengeance',
        selected: false,
      },
      { key: 22, value: 22, name: 'Violence', selected: false },
      {
        key: 23,
        value: 23,
        name: 'Witchcraft',
        selected: false,
      },
    ],
    plays: [
      {
        key: 0,
        value: 0,
        name: "A Midsummer Night's Dream",
        slug: "a-midsummer-night's-dream",
      },
      {
        key: 1,
        value: 1,
        name: "All's Well That Ends Well",
        slug: "all's-well-that-ends-well",
      },
      {
        key: 2,
        value: 2,
        name: 'Antony and Cleopatra',
        slug: 'antony-and-cleopatra',
      },
      {
        key: 3,
        value: 3,
        name: 'As You Like It',
        slug: 'as-you-like-it',
      },
      {
        key: 4,
        value: 4,
        name: 'Coriolanus',
        slug: 'coriolanus',
      },
      { key: 5, value: 5, name: 'Cymbeline', slug: 'cymbeline' },
      { key: 6, value: 6, name: 'Hamlet', slug: 'hamlet' },
      { key: 7, value: 7, name: 'Henry IV', slug: 'henry-iv' },
      { key: 8, value: 8, name: 'Henry V', slug: 'henry-v' },
      { key: 9, value: 9, name: 'Henry VI', slug: 'henry-vi' },
      {
        key: 10,
        value: 10,
        name: 'Henry VIII',
        slug: 'henry-viii',
      },
      {
        key: 11,
        value: 11,
        name: 'Julius Caesar',
        slug: 'julius-caesar',
      },
      {
        key: 12,
        value: 12,
        name: 'King John',
        slug: 'king-john',
      },
      {
        key: 13,
        value: 13,
        name: 'King Lear',
        slug: 'king-lear',
      },
      {
        key: 14,
        value: 14,
        name: "Love's Labor's Lost",
        slug: "love's-labor's-lost",
      },
      { key: 15, value: 15, name: 'Macbeth', slug: 'macbeth' },
      {
        key: 16,
        value: 16,
        name: 'Measure For Measure',
        slug: 'measure-for-measure',
      },
      {
        key: 17,
        value: 17,
        name: 'Much Ado About Nothing',
        slug: 'much-ado-about-nothing',
      },
      { key: 18, value: 18, name: 'Othello', slug: 'othello' },
      { key: 19, value: 19, name: 'Pericles', slug: 'pericles' },
      {
        key: 20,
        value: 20,
        name: 'Richard II',
        slug: 'richard-ii',
      },
      {
        key: 21,
        value: 21,
        name: 'Richard III',
        slug: 'richard-iii',
      },
      {
        key: 22,
        value: 22,
        name: 'Romeo and Juliet',
        slug: 'romeo-and-juliet',
      },
      {
        key: 23,
        value: 23,
        name: 'The Comedy of Errors',
        slug: 'the-comedy-of-errors',
      },
      {
        key: 24,
        value: 24,
        name: 'The Merchant of Venice',
        slug: 'the-merchant-of-venice',
      },
      {
        key: 25,
        value: 25,
        name: 'The Merry Wives of Windsor',
        slug: 'the-merry-wives-of-windsor',
      },
      {
        key: 26,
        value: 26,
        name: 'The Taming of the Shrew',
        slug: 'the-taming-of-the-shrew',
      },
      {
        key: 27,
        value: 27,
        name: 'The Tempest',
        slug: 'the-tempest',
      },
      {
        key: 28,
        value: 28,
        name: 'The Two Gentlemen of Verona',
        slug: 'the-two-gentlemen-of-verona',
      },
      {
        key: 29,
        value: 29,
        name: 'The Two Noble Kinsmen',
        slug: 'the-two-noble-kinsmen',
      },
      {
        key: 30,
        value: 30,
        name: "The Winter's Tale",
        slug: "the-winter's-tale",
      },
      {
        key: 31,
        value: 31,
        name: 'Timon of Athens',
        slug: 'timon-of-athens',
      },
      {
        key: 32,
        value: 32,
        name: 'Titus Andronicus',
        slug: 'titus-andronicus',
      },
      {
        key: 33,
        value: 33,
        name: 'Troilus and Cressida',
        slug: 'troilus-and-cressida',
      },
      {
        key: 34,
        value: 34,
        name: 'Twelfth Night',
        slug: 'twelfth-night',
      },
    ],
  };

  componentDidMount() {
    this.onGenerateQuote();
  }

  handleThemeSelect = async (theme) => {
    await this.setState({
      currentPlay: 'All Plays',
      currentTheme: theme,
    });
    await this.onGenerateQuote();
  };

  handlePlaySelect = async (play, slug) => {
    await this.setState({
      currentPlay: play,
      currentPlaySlug: slug,
      currentTheme: 'All Themes',
    });
    await this.onGenerateQuote();
  };

  onGenerateQuote = async () => {
    let response;
    if (
      this.state.currentTheme === 'All Themes' &&
      this.state.currentPlay === 'All Plays'
    ) {
      response = await axios.get(`${this.state.quotesUrl}/single`);
    } else if (this.state.currentTheme === 'All Themes') {
      response = await axios.get(
        `${this.state.quotesUrl}/by-play/${this.state.currentPlaySlug}`
      );
    } else {
      response = await axios.get(
        `${
          this.state.quotesUrl
        }/by-theme/${this.state.currentTheme.toLowerCase()}`
      );
    }
    const quote = response.data.quote.quote;
    const play = response.data.quote.play;
    this.setState({
      quote,
      play,
    });
  };

  onTweetShare = () => {
    const url = `${this.state.twitterUrl}${this.state.quote}%0A${this.state.play}`;
    return url;
  };

  getBackgroundImage = () => {
    return <BackgroundImage />;
  };

  render() {
    return (
      <Fragment>
        {this.getBackgroundImage()}
        <CustomNavbar
          brand={this.state.brand}
          portfolioLink={this.state.portfolioLink}
          portfolioPlaceholder={this.state.portfolioPlaceholder}
          onThemeSelect={this.handleThemeSelect}
          onPlaySelect={this.handlePlaySelect}
          currentTheme={this.state.currentTheme}
          currentPlay={this.state.currentPlay}
          themes={this.state.themes}
          plays={this.state.plays}
        />
        <Parchment
          quote={this.state.quote}
          play={this.state.play}
          like={this.state.likeTxt}
          share={this.state.shareTxt}
          likeIcon={this.state.likeIcon}
          shareIcon={this.state.shareIcon}
          onGenerateQuote={this.onGenerateQuote}
          onTweetShare={this.onTweetShare}
        />
      </Fragment>
    );
  }
}

export default App;
