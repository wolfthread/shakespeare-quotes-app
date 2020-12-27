import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class CustomDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: this.props.choices,
    };
  }

  getStyle = () => {
    return { marginBottom: '0.2rem', marginRight: '0.2rem' };
  };

  sendChoice = (item) => {
    if (item.slug) {
      this.props.onSelect(item.name, item.slug);
    } else {
      this.props.onSelect(item.name);
    }
  };

  render() {
    return (
      <div>
        <Dropdown style={this.getStyle()}>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            {this.props.currentChoice}
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ overflow: 'scroll', maxHeight: '250px' }}>
            {this.state.choices.map((item) => {
              return (
                <Dropdown.Item
                  href="#"
                  key={item.key}
                  onClick={() => this.sendChoice(item)}
                >
                  {item.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default CustomDropdown;
