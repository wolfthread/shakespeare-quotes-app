import React, { Component } from 'react';
import { Brand } from '../styles/styles';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import CustomDropdown from '../custom-dropdown/CustomDropdown';

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Brand style={{ marginRight: '1rem' }}>{this.props.brand}</Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <CustomDropdown
            choices={this.props.plays}
            onSelect={this.props.onPlaySelect}
            currentChoice={this.props.currentPlay}
          />
          <CustomDropdown
            choices={this.props.themes}
            onSelect={this.props.onThemeSelect}
            currentChoice={this.props.currentTheme}
          />
          <Button
            variant="outline-info"
            href={this.props.portfolioLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginBottom: '0.2rem' }}
          >
            {this.props.portfolioPlaceholder}
          </Button>
        </Navbar.Collapse>
      </Navbar>
    );
    // return (
    //   <Navbar className="bg-light" variant="light">
    // <Brand>{this.props.brand}</Brand>
    //     <Nav className="mr-auto"></Nav>
    // <CustomDropdown
    //   choices={this.props.plays}
    //   onSelect={this.props.onPlaySelect}
    //   currentChoice={this.props.currentPlay}
    // />
    // <CustomDropdown
    //   choices={this.props.themes}
    //   onSelect={this.props.onThemeSelect}
    //   currentChoice={this.props.currentTheme}
    // />
    // <Button
    //   variant="outline-info"
    //   href={this.props.portfolioLink}
    //   target="_blank"
    //   rel="noopener noreferrer"
    // >
    //   {this.props.portfolioPlaceholder}
    // </Button>
    //   </Navbar>
    // );
  }
}

export default CustomNavbar;
